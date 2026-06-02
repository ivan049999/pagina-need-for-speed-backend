import type { Request, Response } from "express";
import { asyncHandler } from "../../shared/utils/asyncHandler.js";
import * as catalogService from "./catalog.service.js";
import type { NfsCatalogResponse } from "./catalog.types.js";

export const getNfsCatalog = asyncHandler(async (_req: Request, res: Response) => {
  const data = await catalogService.getNfsCatalog();
  const payload: NfsCatalogResponse = {
    data,
    meta: {
      count: data.length,
      updatedAt: new Date().toISOString(),
      source: "config",
    },
  };
  res.json(payload);
});
