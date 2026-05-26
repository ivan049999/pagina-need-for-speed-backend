import type { Request, Response } from "express";
import { asyncHandler } from "../../shared/utils/asyncHandler.js";
import {
  registerUser,
  signInWithEmailPassword,
  startEmailVerification,
  verifyEmailCode,
} from "./auth.service.js";

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
  const { email, eaId, password } = req.body as {
    email: string;
    eaId: string;
    password: string;
  };
  const result = await registerUser({ email, eaId, password });
  return res.status(201).json({ ok: true, userId: result.userId });
});

export const postLogin = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body as { email: string; password: string };
  const result = await signInWithEmailPassword(email, password);
  return res.status(200).json({
    ok: true,
    accessToken: result.accessToken,
    refreshToken: result.refreshToken,
  });
});

