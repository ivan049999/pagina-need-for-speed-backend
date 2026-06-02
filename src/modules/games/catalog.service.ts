import { NFS_CATALOG } from "./catalog.config.js";
import type { NfsCatalogEntry } from "./catalog.types.js";

const RAWG_FRANCHISE_NFS = 59;
const CACHE_TTL_MS = 6 * 60 * 60 * 1000;

let cache: { entries: NfsCatalogEntry[]; expiresAt: number } | null = null;

function normalizeLabel(label: string): string {
  return label
    .toLowerCase()
    .replace(/™/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function sortByReleaseDesc(entries: NfsCatalogEntry[]): NfsCatalogEntry[] {
  return [...entries].sort((a, b) => b.releaseDate.localeCompare(a.releaseDate));
}

async function fetchRawgDiscoveries(): Promise<NfsCatalogEntry[]> {
  const apiKey = process.env.RAWG_API_KEY?.trim();
  if (!apiKey) return [];

  try {
    const url = new URL("https://api.rawg.io/api/games");
    url.searchParams.set("key", apiKey);
    url.searchParams.set("franchises", String(RAWG_FRANCHISE_NFS));
    url.searchParams.set("ordering", "-released");
    url.searchParams.set("page_size", "40");

    const res = await fetch(url);
    if (!res.ok) return [];

    const body = (await res.json()) as {
      results?: Array<{
        name: string;
        released: string | null;
        website?: string;
      }>;
    };

    return (body.results ?? [])
      .filter((game) => game.released)
      .map((game) => ({
        label: game.name.includes("™") ? game.name : `${game.name}`,
        href: game.website?.trim() || "https://www.ea.com/games/need-for-speed",
        releaseDate: game.released!.slice(0, 10),
        published: true,
      }));
  } catch {
    return [];
  }
}

function mergeCatalog(
  base: NfsCatalogEntry[],
  discovered: NfsCatalogEntry[],
): NfsCatalogEntry[] {
  const known = new Set(base.map((entry) => normalizeLabel(entry.label)));
  const merged = [...base];

  for (const entry of discovered) {
    const key = normalizeLabel(entry.label);
    if (known.has(key)) continue;
    known.add(key);
    merged.push(entry);
  }

  return merged;
}

export async function getNfsCatalog(): Promise<NfsCatalogEntry[]> {
  const now = Date.now();
  if (cache && cache.expiresAt > now) {
    return cache.entries;
  }

  const published = NFS_CATALOG.filter((entry) => entry.published !== false);
  const discovered = await fetchRawgDiscoveries();
  const entries = sortByReleaseDesc(mergeCatalog(published, discovered));

  cache = { entries, expiresAt: now + CACHE_TTL_MS };
  return entries;
}
