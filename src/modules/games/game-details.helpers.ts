import type { GameDetailsRating } from "./game-details.types.js";

export function pegiRating(
  age: number,
  assetBase: string,
): GameDetailsRating {
  return {
    system: "pegi",
    age,
    descriptors: [
      {
        id: "violence",
        label: "Violence",
        iconSrc: `${assetBase}/violence-Icono.png`,
      },
    ],
  };
}
