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
        url: "https://es.webuy.com/product-detail/?id=5030934039628",
        productId: "5030934039628",
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
        url: "https://es.webuy.com/product-detail/?id=5030934046091",
        productId: "5030934046091",
      },
    },
  },
  "need-for-speed-carbon": {
    slug: "need-for-speed-carbon",
    fallbackAmount: 9.99,
    fallbackCurrency: "EUR",
    sources: {
      ea: {
        url: "https://www.ea.com/es-es/games/need-for-speed/need-for-speed-carbon",
      },
      cex: {
        url: "https://es.webuy.com/product-detail/?id=5030930052348",
        productId: "5030930052348",
      },
    },
  },
  "need-for-speed-prostreet": {
    slug: "need-for-speed-prostreet",
    fallbackAmount: 9.99,
    fallbackCurrency: "EUR",
    sources: {
      ea: {
        url: "https://www.ea.com/es-es/games/need-for-speed/need-for-speed-prostreet",
      },
      cex: {
        url: "https://es.webuy.com/search?stext=need+for+speed+prostreet",
        productId: "need-for-speed-prostreet",
      },
    },
  },
  "need-for-speed-undercover": {
    slug: "need-for-speed-undercover",
    fallbackAmount: 9.99,
    fallbackCurrency: "EUR",
    sources: {
      ea: {
        url: "https://www.ea.com/es-es/games/need-for-speed/need-for-speed-undercover",
      },
      cex: {
        url: "https://es.webuy.com/search?stext=need+for+speed+undercover",
        productId: "need-for-speed-undercover",
      },
    },
  },
  "need-for-speed-nitro": {
    slug: "need-for-speed-nitro",
    fallbackAmount: 9.99,
    fallbackCurrency: "EUR",
    sources: {
      ea: {
        url: "https://www.ea.com/es-es/games/need-for-speed/need-for-speed-nitro",
      },
      cex: {
        url: "https://es.webuy.com/search?stext=need+for+speed+nitro",
        productId: "need-for-speed-nitro",
      },
    },
  },
  "need-for-speed-world": {
    slug: "need-for-speed-world",
    fallbackAmount: 9.99,
    fallbackCurrency: "EUR",
    sources: {
      ea: {
        url: "https://www.ea.com/es-es/games/need-for-speed/need-for-speed-world",
      },
      cex: {
        url: "https://es.webuy.com/search?stext=need+for+speed+world",
        productId: "need-for-speed-world",
      },
    },
  },
  "need-for-speed-shift": {
    slug: "need-for-speed-shift",
    fallbackAmount: 9.99,
    fallbackCurrency: "EUR",
    sources: {
      ea: {
        url: "https://www.ea.com/es-es/games/need-for-speed/need-for-speed-shift",
      },
      cex: {
        url: "https://es.webuy.com/search?stext=need+for+speed+shift",
        productId: "need-for-speed-shift",
      },
    },
  },
  "need-for-speed-hot-pursuit-2010": {
    slug: "need-for-speed-hot-pursuit-2010",
    fallbackAmount: 9.99,
    fallbackCurrency: "EUR",
    sources: {
      ea: {
        url: "https://www.ea.com/es-es/games/need-for-speed/need-for-speed-hot-pursuit",
      },
      cex: {
        url: "https://es.webuy.com/search?stext=need+for+speed+hot+pursuit+2010",
        productId: "need-for-speed-hot-pursuit-2010",
      },
    },
  },
  "need-for-speed-shift-2-unleashed": {
    slug: "need-for-speed-shift-2-unleashed",
    fallbackAmount: 9.99,
    fallbackCurrency: "EUR",
    sources: {
      ea: {
        url: "https://www.ea.com/es-es/games/need-for-speed/need-for-speed-shift-2-unleashed",
      },
      cex: {
        url: "https://es.webuy.com/search?stext=need+for+speed+shift+2+unleashed",
        productId: "need-for-speed-shift-2-unleashed",
      },
    },
  },
  "need-for-speed-the-run": {
    slug: "need-for-speed-the-run",
    fallbackAmount: 9.99,
    fallbackCurrency: "EUR",
    sources: {
      ea: {
        url: "https://www.ea.com/es-es/games/need-for-speed/need-for-speed-the-run",
      },
      cex: {
        url: "https://es.webuy.com/search?stext=need+for+speed+the+run",
        productId: "need-for-speed-the-run",
      },
    },
  },
  "need-for-speed-rivals": {
    slug: "need-for-speed-rivals",
    fallbackAmount: 9.99,
    fallbackCurrency: "EUR",
    sources: {
      ea: {
        url: "https://www.ea.com/es-es/games/need-for-speed/need-for-speed-rivals",
      },
      cex: {
        url: "https://es.webuy.com/search?stext=need+for+speed+rivals",
        productId: "need-for-speed-rivals",
      },
    },
  },
};
