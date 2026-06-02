export type NfsCatalogEntry = {
  label: string;
  href: string;
  slug?: string;
  releaseDate: string;
  published?: boolean;
};

export type NfsCatalogResponse = {
  data: NfsCatalogEntry[];
  meta: {
    count: number;
    updatedAt: string;
    source: "config";
  };
};
