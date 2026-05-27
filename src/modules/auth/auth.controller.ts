import type { Request, Response } from "express";
import { asyncHandler } from "../../shared/utils/asyncHandler.js";
import {
  getMeFromAccessToken,
  registerUser,
  signInWithEmailPassword,
  startEmailVerification,
  updateProfileNameFromAccessToken,
  verifyEmailCode,
} from "./auth.service.js";
import { AppError } from "../../shared/errors/AppError.js";

export const postStartEmailVerification = asyncHandler(async (req: Request, res: Response) => {
  const { email } = req.body as { email: string };
  await startEmailVerification(email);
  // Importante: no revelar si existe/no existe.
  res.status(200).json({ ok: true });
});

export const postVerifyEmailCode = asyncHandler(async (req: Request, res: Response) => {
  const { email, code } = req.body as { email: string; code: string };
  const result = await verifyEmailCode(email, code);
  if (!result.ok) {
    return res.status(400).json({ ok: false, code: result.reason });
  }
  return res.status(200).json({ ok: true });
});

export const postRegister = asyncHandler(async (req: Request, res: Response) => {
  const { email, eaId, password, birthDate, countryCode } = req.body as {
    email: string;
    eaId: string;
    password: string;
    birthDate: string;
    countryCode: string;
  };
  const result = await registerUser({ email, eaId, password, birthDate, countryCode });
  return res.status(201).json({ ok: true, userId: result.userId });
});

export const postLogin = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body as { email: string; password: string };
  const result = await signInWithEmailPassword(email, password);
  return res.status(200).json({
    ok: true,
    accessToken: result.accessToken,
    refreshToken: result.refreshToken,
    pilotName: result.pilotName,
    email: result.email,
  });
});

export const getMe = asyncHandler(async (req: Request, res: Response) => {
  const header = req.headers.authorization;
  const token = header?.startsWith("Bearer ") ? header.slice(7).trim() : null;
  if (!token) {
    throw new AppError(401, "UNAUTHORIZED", "No autorizado");
  }
  const result = await getMeFromAccessToken(token);
  return res.status(200).json(result);
});

export const patchProfileName = asyncHandler(async (req: Request, res: Response) => {
  const header = req.headers.authorization;
  const token = header?.startsWith("Bearer ") ? header.slice(7).trim() : null;
  if (!token) {
    throw new AppError(401, "UNAUTHORIZED", "No autorizado");
  }
  const { firstName, lastName } = req.body as { firstName: string; lastName: string };
  const result = await updateProfileNameFromAccessToken(token, { firstName, lastName });
  return res.status(200).json(result);
});

