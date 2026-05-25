import type { NextFunction, Request, Response } from "express";
import type { ZodSchema } from "zod";
import { AppError } from "../errors/AppError.js";

export function validate<T>(schema: ZodSchema<T>, source: "body" | "query" | "params" = "body") {
  return (req: Request, _res: Response, next: NextFunction) => {
    const result = schema.safeParse(req[source]);
    if (!result.success) {
      return next(new AppError(400, "VALIDATION_ERROR", result.error.flatten()));
    }
    req[source] = result.data;
    next();
  };
}
