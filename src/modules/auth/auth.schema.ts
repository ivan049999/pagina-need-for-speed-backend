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
  birthDate: z
    .string()
    .trim()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Fecha de nacimiento no válida"),
  countryCode: z.string().trim().length(2, "País no válido"),
});

export const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(1).max(64),
});

export const updateProfileNameSchema = z.object({
  firstName: z.string().trim().min(1, "Escribe tu nombre").max(64),
  lastName: z.string().trim().min(1, "Escribe tu apellido").max(64),
});

export const updateProfileBirthDateSchema = z.object({
  birthDate: z
    .string()
    .trim()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Fecha de nacimiento no válida"),
});

export const startPhoneVerificationSchema = z.object({
  dialCode: z.string().trim().regex(/^\+\d{1,4}$/, "Prefijo no válido"),
  phoneNumber: z.string().trim().min(6).max(20),
});

export const verifyPhoneCodeSchema = z.object({
  code: z.string().trim().regex(/^\d{6}$/, "El código debe tener 6 dígitos"),
});

export const updateProfileRegionalSchema = z.object({
  countryCode: z.string().trim().length(2, "País no válido"),
  languageCode: z
    .string()
    .trim()
    .regex(/^[a-z]{2}$/, "Idioma no válido"),
});

export const verifyPasswordChangeCodeSchema = z.object({
  code: z.string().trim().regex(/^\d{6}$/, "El código debe tener 6 dígitos"),
});

export const verifyTwoFactorCodeSchema = z.object({
  code: z.string().trim().regex(/^\d{6}$/, "El código debe tener 6 dígitos"),
});

export const startSecondaryEmailSchema = z.object({
  email: z.string().trim().email("Introduce un correo electrónico válido"),
});

export const verifySecondaryEmailCodeSchema = z.object({
  code: z.string().trim().regex(/^\d{6}$/, "El código debe tener 6 dígitos"),
});

const profilePasswordSchema = z
  .string()
  .min(8, "La contraseña debe tener al menos 8 caracteres")
  .max(64, "La contraseña no puede superar 64 caracteres")
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
    "Debe incluir al menos una letra minúscula, una mayúscula y un número"
  );

export const updateProfilePasswordSchema = z
  .object({
    password: profilePasswordSchema,
    confirmPassword: z.string().min(1, "Confirma tu contraseña"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

