import { Router } from "express";
import { validate } from "../../shared/middleware/validate.js";
import { getAllNews, getLatestNews, getNewsBySlug } from "./news.controller.js";
import { latestNewsQuerySchema, newsSlugParamsSchema } from "./news.schema.js";

export const newsRouter = Router();

newsRouter.get("/", getAllNews);
newsRouter.get("/latest", validate(latestNewsQuerySchema, "query"), getLatestNews);
newsRouter.get("/:slug", validate(newsSlugParamsSchema, "params"), getNewsBySlug);
