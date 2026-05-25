import type { Request, Response } from "express";
import { asyncHandler } from "../../shared/utils/asyncHandler.js";
import * as newsService from "./news.service.js";

export const getAllNews = asyncHandler(async (_req: Request, res: Response) => {
  const articles = await newsService.getAllNews();
  res.json({ data: articles });
});

export const getLatestNews = asyncHandler(async (req: Request, res: Response) => {
  const { limit } = req.query as { limit: number };
  const articles = await newsService.getLatestNews(limit);
  res.json({ data: articles });
});

export const getNewsBySlug = asyncHandler(async (req: Request, res: Response) => {
  const { slug } = req.params as { slug: string };
  const article = await newsService.getNewsBySlug(slug);
  res.json({ data: article });
});
