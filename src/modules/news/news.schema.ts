import { z } from "zod";

export const newsSlugParamsSchema = z.object({
  slug: z.string().min(1),
});

export const latestNewsQuerySchema = z.object({
  limit: z.coerce.number().int().min(1).max(20).default(3),
});
