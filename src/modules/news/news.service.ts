import { AppError } from "../../shared/errors/AppError.js";
import type { NewsArticleDto } from "../../shared/types/news.js";
import * as newsRepository from "./news.repository.js";

export async function getAllNews(): Promise<NewsArticleDto[]> {
  return newsRepository.findAll();
}

export async function getLatestNews(limit: number): Promise<NewsArticleDto[]> {
  return newsRepository.findLatest(limit);
}

export async function getNewsBySlug(slug: string): Promise<NewsArticleDto> {
  const article = await newsRepository.findBySlug(slug);
  if (!article) throw new AppError(404, "NEWS_NOT_FOUND", `Article "${slug}" not found`);
  return article;
}
