import twilio from "twilio";
import { env } from "../../config/env.js";
import { AppError } from "../errors/AppError.js";

export type SmsSendResult =
  | { sent: true; channel: "twilio" }
  | { sent: false; channel: "console" | "twilio-fallback"; devConsole: boolean; warning?: string };

export function isTwilioConfigured() {
  return Boolean(
    env.TWILIO_ACCOUNT_SID && env.TWILIO_AUTH_TOKEN && env.TWILIO_PHONE_NUMBER
  );
}

export function toE164Phone(dialCode: string, phoneDigits: string) {
  const prefix = dialCode.startsWith("+") ? dialCode : `+${dialCode}`;
  return `${prefix}${phoneDigits.replace(/\D/g, "")}`;
}

function getTwilioErrorMessage(error: unknown): string {
  const err = error as { code?: number; message?: string };
  const code = err?.code;

  if (code === 21610 || code === 21614) {
    return "En cuenta Trial de Twilio debes verificar tu número en «Verified Caller IDs». España puede estar restringida por SMS: prueba con «Call» o usa el código en la consola del servidor (desarrollo).";
  }
  if (code === 21211) {
    return "El número de teléfono no es válido.";
  }
  if (code === 21408) {
    return "Tu cuenta Twilio no tiene permiso para enviar SMS a este destino.";
  }

  const msg = err?.message?.toLowerCase() ?? "";
  if (msg.includes("unverified") || msg.includes("trial")) {
    return "Cuenta Trial: el destino debe estar verificado en Twilio o el país puede estar restringido (p. ej. España). En desarrollo, mira la consola del backend para el código.";
  }

  return "No se pudo enviar el SMS. Comprueba Twilio (Trial, número verificado o país permitido).";
}

export async function sendVerificationSms(toE164: string, code: string): Promise<SmsSendResult> {
  if (!isTwilioConfigured()) {
    if (env.NODE_ENV === "development") {
      console.warn(
        `[sms] Twilio no configurado. Código de verificación para ${toE164}: ${code}`
      );
    }
    return { sent: false, channel: "console", devConsole: true };
  }

  const client = twilio(env.TWILIO_ACCOUNT_SID!, env.TWILIO_AUTH_TOKEN!);

  try {
    const message = await client.messages.create({
      body: `Tu codigo de verificacion EA es: ${code}. Caduca en 10 minutos.`,
      from: env.TWILIO_PHONE_NUMBER!,
      to: toE164,
    });

    if (env.NODE_ENV === "development") {
      console.info(`[sms] SMS enviado a ${toE164} (sid: ${message.sid})`);
    }

    return { sent: true, channel: "twilio" };
  } catch (error) {
    console.error("[sms] Error al enviar SMS con Twilio:", error);

    if (env.NODE_ENV === "development") {
      const warning = getTwilioErrorMessage(error);
      console.warn(`[sms] Modo desarrollo — código para ${toE164}: ${code}`);
      console.warn(`[sms] ${warning}`);
      return { sent: false, channel: "twilio-fallback", devConsole: true, warning };
    }

    throw new AppError(502, "SMS_SEND_FAILED", getTwilioErrorMessage(error));
  }
}
