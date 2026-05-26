import { z } from "zod";

export const startEmailVerificationSchema = z.object({
  email: z.string().trim().email(),
});

export const verifyEmailCodeSchema = z.object({
  email: z.string().trim().email(),
  code: z.string().trim().regex(/^\d{6}$/, "El código debe tener 6 dígitos"),
});

export const registerUserSchema = z.object({
  email: z.string().trim().email(),
  eaId: z
    .string()
    .trim()
    .regex(/^[a-zA-Z0-9_]{4,16}$/, "La ID de EA debe tener de 4 a 16 caracteres"),
  password: z.string().min(8).max(64),
});

export const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(1).max(64),
});

