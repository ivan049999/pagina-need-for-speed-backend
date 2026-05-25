import { z } from "zod";

export const carSlugParamsSchema = z.object({
  slug: z.string().min(1),
});

export const carTierSchema = z.enum(["D", "C", "B", "A", "S", "S+", "X"]);
