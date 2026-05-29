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
};
