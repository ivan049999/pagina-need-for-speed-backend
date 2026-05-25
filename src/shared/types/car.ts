export type CarTier = "D" | "C" | "B" | "A" | "S" | "S+" | "X";

export type CarStats = {
  topSpeed: number;
  acceleration: number;
};

export type CarDto = {
  id: string;
  slug: string;
  name: string;
  description: string;
  tier: CarTier;
  featured: boolean;
  imageUrl: string;
  stats: CarStats;
};
