import type { Request, Response } from "express";
import { asyncHandler } from "../../shared/utils/asyncHandler.js";
import {
  getMeFromAccessToken,
  registerUser,
  signInWithEmailPassword,
  startEmailVerification,
  updateProfileBirthDateFromAccessToken,
  updateProfileNameFromAccessToken,
  updateProfileRegionalFromAccessToken,
  startPasswordChangeFromAccessToken,
  startPhoneVerificationFromAccessToken,
  startSecondaryEmailFromAccessToken,
  startTwoFactorFromAccessToken,
  updatePasswordFromAccessToken,
  verifyEmailCode,
  verifyPasswordChangeCodeFromAccessToken,
  verifyPhoneCodeFromAccessToken,
  verifySecondaryEmailFromAccessToken,
  verifyTwoFactorFromAccessToken,
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

export const patchProfileBirthDate = asyncHandler(async (req: Request, res: Response) => {
  const header = req.headers.authorization;
  const token = header?.startsWith("Bearer ") ? header.slice(7).trim() : null;
  if (!token) {
    throw new AppError(401, "UNAUTHORIZED", "No autorizado");
  }
  const { birthDate } = req.body as { birthDate: string };
  const result = await updateProfileBirthDateFromAccessToken(token, { birthDate });
  return res.status(200).json(result);
});

export const patchProfileRegional = asyncHandler(async (req: Request, res: Response) => {
  const token = getBearerToken(req);
  if (!token) throw new AppError(401, "UNAUTHORIZED", "No autorizado");
  const { countryCode, languageCode } = req.body as {
    countryCode: string;
    languageCode: string;
  };
  const result = await updateProfileRegionalFromAccessToken(token, {
    countryCode,
    languageCode,
  });
  return res.status(200).json(result);
});

function getBearerToken(req: Request) {
  const header = req.headers.authorization;
  return header?.startsWith("Bearer ") ? header.slice(7).trim() : null;
}

export const postPhoneSendCode = asyncHandler(async (req: Request, res: Response) => {
  const token = getBearerToken(req);
  if (!token) throw new AppError(401, "UNAUTHORIZED", "No autorizado");
  const { dialCode, phoneNumber } = req.body as { dialCode: string; phoneNumber: string };
  const result = await startPhoneVerificationFromAccessToken(token, { dialCode, phoneNumber });
  return res.status(200).json(result);
});

export const postPhoneVerifyCode = asyncHandler(async (req: Request, res: Response) => {
  const token = getBearerToken(req);
  if (!token) throw new AppError(401, "UNAUTHORIZED", "No autorizado");
  const { code } = req.body as { code: string };
  const result = await verifyPhoneCodeFromAccessToken(token, { code });
  if (!result.ok) {
    return res.status(400).json({ ok: false, code: result.reason });
  }
  return res.status(200).json(result);
});

export const postPasswordSendCode = asyncHandler(async (req: Request, res: Response) => {
  const token = getBearerToken(req);
  if (!token) throw new AppError(401, "UNAUTHORIZED", "No autorizado");
  const result = await startPasswordChangeFromAccessToken(token);
  return res.status(200).json(result);
});

export const postPasswordVerifyCode = asyncHandler(async (req: Request, res: Response) => {
  const token = getBearerToken(req);
  if (!token) throw new AppError(401, "UNAUTHORIZED", "No autorizado");
  const { code } = req.body as { code: string };
  const result = await verifyPasswordChangeCodeFromAccessToken(token, { code });
  if (!result.ok) {
    return res.status(400).json({ ok: false, code: result.reason });
  }
  return res.status(200).json(result);
});

export const patchProfilePassword = asyncHandler(async (req: Request, res: Response) => {
  const token = getBearerToken(req);
  if (!token) throw new AppError(401, "UNAUTHORIZED", "No autorizado");
  const { password } = req.body as { password: string; confirmPassword: string };
  const result = await updatePasswordFromAccessToken(token, { password });
  return res.status(200).json(result);
});

export const postTwoFactorSendCode = asyncHandler(async (req: Request, res: Response) => {
  const token = getBearerToken(req);
  if (!token) throw new AppError(401, "UNAUTHORIZED", "No autorizado");
  const result = await startTwoFactorFromAccessToken(token);
  return res.status(200).json(result);
});

export const postTwoFactorVerifyCode = asyncHandler(async (req: Request, res: Response) => {
  const token = getBearerToken(req);
  if (!token) throw new AppError(401, "UNAUTHORIZED", "No autorizado");
  const { code } = req.body as { code: string };
  const result = await verifyTwoFactorFromAccessToken(token, { code });
  if (!result.ok) {
    return res.status(400).json({ ok: false, code: result.reason });
  }
  return res.status(200).json(result);
});

export const postSecondaryEmailSendCode = asyncHandler(async (req: Request, res: Response) => {
  const token = getBearerToken(req);
  if (!token) throw new AppError(401, "UNAUTHORIZED", "No autorizado");
  const { email } = req.body as { email: string };
  const result = await startSecondaryEmailFromAccessToken(token, { email });
  return res.status(200).json(result);
});

export const postSecondaryEmailVerifyCode = asyncHandler(async (req: Request, res: Response) => {
  const token = getBearerToken(req);
  if (!token) throw new AppError(401, "UNAUTHORIZED", "No autorizado");
  const { code } = req.body as { code: string };
  const result = await verifySecondaryEmailFromAccessToken(token, { code });
  if (!result.ok) {
    return res.status(400).json({ ok: false, code: result.reason });
  }
  return res.status(200).json(result);
});

