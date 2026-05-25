import type { Request, Response } from "express";
import { env } from "../../config/env.js";

export function getHealth(_req: Request, res: Response) {
  res.json({
    status: "ok",
    service: "pagina-need-for-speed-backend",
    version: "0.1.0",
    environment: env.NODE_ENV,
    timestamp: new Date().toISOString(),
  });
}
