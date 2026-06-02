export type GameDetailsAbout = {
  title: string;
  description: string;
  platforms: string;
  languages: string;
  publisher: string;
  releaseDate: string;
};

export type GameDetailsSpecRow = {
  label: string;
  value: string;
};

export type GameDetailsSystemRequirements = {
  title: string;
  osLabel: string;
  minimum: GameDetailsSpecRow[];
  recommended: GameDetailsSpecRow[];
};

export type GameDetailsRating = {
  system: "pegi";
  age: number;
  ageBadgeSrc?: string;
  descriptors?: Array<{
    id: "violence" | "bad-language" | "fear";
    label: string;
    iconSrc?: string;
  }>;
};

export type GameDetails = {
  slug: string;
  source: "ea-official" | "steam" | "manual";
  about: GameDetailsAbout;
  systemRequirements: GameDetailsSystemRequirements;
  rating?: GameDetailsRating;
};

export type GameDetailsResponse = {
  data: GameDetails;
};
