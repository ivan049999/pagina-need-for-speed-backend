import type { Request, Response } from "express";
import { asyncHandler } from "../../shared/utils/asyncHandler.js";
import { AppError } from "../../shared/errors/AppError.js";
import * as gameDetailsService from "./game-details.service.js";
import type { GameDetailsResponse } from "./game-details.types.js";

export const getGameDetails = asyncHandler(async (req: Request, res: Response) => {
  const { slug } = req.params as { slug: string };
  const data = gameDetailsService.getGameDetails(slug);

  if (!data) {
    throw new AppError(
      404,
      "GAME_DETAILS_NOT_FOUND",
      `No hay ficha de detalles para el juego: ${slug}`,
    );
  }

  const payload: GameDetailsResponse = { data };
  res.json(payload);
});
