import { GAME_DETAILS } from "./game-details.config.js";
import type { GameDetails } from "./game-details.types.js";

export function getGameDetails(slug: string): GameDetails | null {
  return GAME_DETAILS[slug] ?? null;
}
