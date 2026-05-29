import type { PricingSourceId } from "./pricing.config.js";

export type PriceQuote = {
  amount: number;
  currency: "EUR";
  source: PricingSourceId | "fallback";
};

export type GamePriceSourceDetail = {
  source: PricingSourceId | "fallback";
  amount: number;
  currency: "EUR";
  formatted: string;
  available: boolean;
};

export type GamePriceResponse = {
  slug: string;
  amount: number;
  currency: "EUR";
  formatted: string;
  source: PricingSourceId | "fallback";
  priceLabel: string;
  sources: GamePriceSourceDetail[];
  fetchedAt: string;
  stale: boolean;
};
