import type { NewsArticleDto } from "../../shared/types/news.js";
import { MOCK_NEWS } from "../../../tests/fixtures/news.fixture.js";

export async function findAll(): Promise<NewsArticleDto[]> {
  return MOCK_NEWS;
}

export async function findLatest(limit: number): Promise<NewsArticleDto[]> {
  return MOCK_NEWS.slice(0, limit);
}

export async function findBySlug(slug: string): Promise<NewsArticleDto | null> {
  return MOCK_NEWS.find((a) => a.slug === slug) ?? null;
}
