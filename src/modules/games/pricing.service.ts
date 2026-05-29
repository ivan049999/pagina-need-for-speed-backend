import { AppError } from "../../shared/errors/AppError.js";
import {
  GAME_PRICING,
  type GamePricingConfig,
  type PricingSourceId,
} from "./pricing.config.js";
import type { GamePriceResponse, PriceQuote } from "./pricing.types.js";

const FETCH_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  Accept: "text/html,application/xhtml+xml",
  "Accept-Language": "es-ES,es;q=0.9",
};

const CACHE_TTL_MS = Number(process.env.GAME_PRICE_CACHE_MS ?? 60 * 60 * 1000);
const CEX_MANUAL_PRICE = process.env.UNDERGROUND_CEX_PRICE
  ? Number(process.env.UNDERGROUND_CEX_PRICE)
  : undefined;

const cache = new Map<string, { expiresAt: number; data: GamePriceResponse }>();

function parseEuropeanAmount(raw: string): number {
  return Number.parseFloat(raw.replace(",", "."));
}

function formatEur(amount: number): string {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
}

function priceLabelFor(source: PricingSourceId | "fallback", count: number): string {
  if (count > 1) return "Desde";
  if (source === "cex") return "En CeX desde";
  if (source === "ea") return "En EA app desde";
  return "Desde";
}

async function fetchHtml(url: string): Promise<string> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12_000);
  try {
    const res = await fetch(url, {
      headers: FETCH_HEADERS,
      signal: controller.signal,
    });
    if (!res.ok) {
      throw new AppError(`No se pudo obtener precio (${res.status})`, 502);
    }
    return res.text();
  } finally {
    clearTimeout(timeout);
  }
}

async function fetchEaPrice(config: GamePricingConfig): Promise<PriceQuote | null> {
  try {
    const html = await fetchHtml(config.sources.ea.url);
    const badgeMatches = [
      ...html.matchAll(/PriceBadge_bold__[^>]+>(\d+[,.]\d{2})</g),
    ].map((match) => parseEuropeanAmount(match[1]));

    if (badgeMatches.length > 0) {
      const amount = Math.min(...badgeMatches);
      return { amount, currency: "EUR", source: "ea" };
    }

    const undergroundIdx = html.toLowerCase().indexOf("underground");
    if (undergroundIdx >= 0) {
      const window = html.slice(undergroundIdx, undergroundIdx + 20_000);
      const eurMatch = window.match(/(\d+[,.]\d{2})\s*€/i);
      if (eurMatch) {
        return {
          amount: parseEuropeanAmount(eurMatch[1]),
          currency: "EUR",
          source: "ea",
        };
      }
    }

    return null;
  } catch {
    return null;
  }
}

async function fetchCexPrice(config: GamePricingConfig): Promise<PriceQuote | null> {
  if (CEX_MANUAL_PRICE !== undefined && !Number.isNaN(CEX_MANUAL_PRICE)) {
    return { amount: CEX_MANUAL_PRICE, currency: "EUR", source: "cex" };
  }

  try {
    const html = await fetchHtml(config.sources.cex.url);
    const jsonPrice =
      html.match(/"sellPrice"\s*:\s*(\d+(?:\.\d+)?)/i) ??
      html.match(/"cashPrice"\s*:\s*(\d+(?:\.\d+)?)/i) ??
      html.match(/"price"\s*:\s*(\d+(?:\.\d+)?)/i);

    if (jsonPrice) {
      const amount = Number.parseFloat(jsonPrice[1]);
      if (amount >= 1 && amount <= 120) {
        return { amount, currency: "EUR", source: "cex" };
      }
    }

    return null;
  } catch {
    return null;
  }
}

function buildResponse(
  config: GamePricingConfig,
  quotes: PriceQuote[],
  stale: boolean
): GamePriceResponse {
  const availableQuotes = quotes.filter((q) => q.amount > 0);
  const best =
    availableQuotes.length > 0
      ? availableQuotes.reduce((lowest, current) =>
          current.amount < lowest.amount ? current : lowest
        )
      : {
          amount: config.fallbackAmount,
          currency: config.fallbackCurrency,
          source: "fallback" as const,
        };

  const sourceDetails: GamePriceResponse["sources"] = (
    ["ea", "cex"] as PricingSourceId[]
  ).map((sourceId) => {
    const quote = availableQuotes.find((q) => q.source === sourceId);
    if (!quote) {
      return {
        source: sourceId,
        amount: 0,
        currency: "EUR",
        formatted: "—",
        available: false,
      };
    }
    return {
      source: sourceId,
      amount: quote.amount,
      currency: "EUR",
      formatted: formatEur(quote.amount),
      available: true,
    };
  });

  return {
    slug: config.slug,
    amount: best.amount,
    currency: "EUR",
    formatted: formatEur(best.amount),
    source: best.source,
    priceLabel: priceLabelFor(best.source, availableQuotes.length),
    sources: sourceDetails,
    fetchedAt: new Date().toISOString(),
    stale,
  };
}

export async function getGamePrice(slug: string): Promise<GamePriceResponse> {
  const config = GAME_PRICING[slug];
  if (!config) {
    throw new AppError("Juego no configurado para precios dinámicos", 404);
  }

  const cached = cache.get(slug);
  if (cached && Date.now() < cached.expiresAt) {
    return cached.data;
  }

  const [eaQuote, cexQuote] = await Promise.all([
    fetchEaPrice(config),
    fetchCexPrice(config),
  ]);

  const quotes = [eaQuote, cexQuote].filter((q): q is PriceQuote => q !== null);
  const stale = quotes.length === 0;
  const data = buildResponse(config, quotes, stale);

  cache.set(slug, { data, expiresAt: Date.now() + CACHE_TTL_MS });
  return data;
}
