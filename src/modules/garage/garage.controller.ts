import type { Request, Response } from "express";
import { asyncHandler } from "../../shared/utils/asyncHandler.js";
import * as garageService from "./garage.service.js";

export const getGarageByUserId = asyncHandler(async (req: Request, res: Response) => {
  const { userId } = req.params;
  const garage = await garageService.getGarage(userId);
  res.json({ data: garage });
});
