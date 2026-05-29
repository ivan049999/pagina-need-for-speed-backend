export type PricingSourceId = "ea" | "cex";

export type GamePricingConfig = {
  slug: string;
  fallbackAmount: number;
  fallbackCurrency: "EUR";
  sources: {
    ea: { url: string };
    cex: { url: string; productId: string };
  };
};

export const GAME_PRICING: Record<string, GamePricingConfig> = {
  "need-for-speed-underground": {
    slug: "need-for-speed-underground",
    fallbackAmount: 9.99,
    fallbackCurrency: "EUR",
    sources: {
      ea: {
        url: "https://www.ea.com/es-es/games/need-for-speed/need-for-speed-underground",
      },
      cex: {
        url: "https://es.webuy.com/product-detail/?id=5030934036184",
        productId: "5030934036184",
      },
    },
  },
  "need-for-speed-underground-2": {
    slug: "need-for-speed-underground-2",
    fallbackAmount: 9.99,
    fallbackCurrency: "EUR",
    sources: {
      ea: {
        url: "https://www.ea.com/es-es/games/need-for-speed/need-for-speed-underground-2",
      },
      cex: {
        url: "https://es.webuy.com/search?q=Need+for+Speed+Underground+2",
        productId: "need-for-speed-underground-2",
      },
    },
  },
  "need-for-speed-most-wanted-2005": {
    slug: "need-for-speed-most-wanted-2005",
    fallbackAmount: 9.99,
    fallbackCurrency: "EUR",
    sources: {
      ea: {
        url: "https://www.ea.com/es-es/games/need-for-speed/need-for-speed-most-wanted",
      },
      cex: {
        url: "https://es.webuy.com/search?q=Need+for+Speed+Most+Wanted+2005",
        productId: "need-for-speed-most-wanted-2005",
      },
    },
  },
};
