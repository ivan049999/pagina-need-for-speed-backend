import type { Request, Response } from "express";
import { asyncHandler } from "../../shared/utils/asyncHandler.js";
import * as pricingService from "./pricing.service.js";

export const getGamePrice = asyncHandler(async (req: Request, res: Response) => {
  const { slug } = req.params as { slug: string };
  const data = await pricingService.getGamePrice(slug);
  res.json({ data });
});
