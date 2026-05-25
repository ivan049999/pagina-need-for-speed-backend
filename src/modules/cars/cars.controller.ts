import type { Request, Response } from "express";
import { asyncHandler } from "../../shared/utils/asyncHandler.js";
import * as carsService from "./cars.service.js";

export const getCars = asyncHandler(async (req: Request, res: Response) => {
  const { page, limit } = req.query as { page: number; limit: number };
  const result = await carsService.listCars({ page, limit });
  res.json(result);
});

export const getFeaturedCars = asyncHandler(async (_req: Request, res: Response) => {
  const cars = await carsService.listFeaturedCars();
  res.json({ data: cars });
});

export const getCarBySlug = asyncHandler(async (req: Request, res: Response) => {
  const { slug } = req.params as { slug: string };
  const car = await carsService.getCarBySlug(slug);
  res.json({ data: car });
});
