import crypto from "crypto";
import { Resend } from "resend";
import { env } from "../../config/env.js";
import { AppError } from "../../shared/errors/AppError.js";
import { getSupabaseAdmin, isSupabaseConfigured } from "../../shared/database/supabase.js";

type VerificationRecord = {
  codeHash: string;
  expiresAtMs: number;
  lastSentAtMs: number;
  attemptsLeft: number;
};

const store = new Map<string, VerificationRecord>();
const verifiedEmails = new Map<string, number>();

const CODE_TTL_MS = 10 * 60 * 1000;
const VERIFIED_EMAIL_TTL_MS = 30 * 60 * 1000;
const RESEND_COOLDOWN_MS = 45 * 1000;
const MAX_ATTEMPTS = 6;

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function generateCode(): string {
  return String(Math.floor(100000 + Math.random() * 900000));
}

function sha256(value: string) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function maskEmail(email: string) {
  const [user, domain] = email.split("@");
  if (!user || !domain) return email;
  const head = user.slice(0, 2);
  const tail = user.slice(-1);
  return `${head}***${tail}@${domain}`;
}

function requireSupabase() {
  if (!isSupabaseConfigured()) {
    throw new AppError(
      503,
      "SUPABASE_NOT_CONFIGURED",
      "Configura SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY en el .env del backend"
    );
  }
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    throw new AppError(503, "SUPABASE_NOT_CONFIGURED", "No se pudo conectar con Supabase");
  }
  return supabase;
}

function getResendClient() {
  if (!env.RESEND_API_KEY) return null;
  return new Resend(env.RESEND_API_KEY);
}

export async function startEmailVerification(emailInput: string) {
  const email = normalizeEmail(emailInput);
  const now = Date.now();

  const existing = store.get(email);
  if (existing && now - existing.lastSentAtMs < RESEND_COOLDOWN_MS) {
    // No revelamos nada; solo aplicamos rate limit.
    return { ok: true };
  }

  const code = generateCode();
  const record: VerificationRecord = {
    codeHash: sha256(code),
    expiresAtMs: now + CODE_TTL_MS,
    lastSentAtMs: now,
    attemptsLeft: MAX_ATTEMPTS,
  };
  store.set(email, record);

  const resend = getResendClient();
  if (!resend || !env.RESEND_FROM) {
    // En dev sin credenciales, no fallamos el flujo de UI.
    console.warn(
      `[auth] RESEND_API_KEY/RESEND_FROM no configurados; código generado para ${maskEmail(email)}: ${code}`
    );
    return { ok: true };
  }

  const { data, error } = await resend.emails.send({
    from: env.RESEND_FROM,
    to: email,
    subject: "Tu código de verificación",
    text: `Tu código de verificación es: ${code}\n\nCaduca en 10 minutos.`,
  });

  if (error) {
    store.delete(email);
    console.error("[auth] Error al enviar correo con Resend:", error);
    throw new AppError(502, "EMAIL_SEND_FAILED", "No se pudo enviar el correo de verificación");
  }

  if (env.NODE_ENV === "development") {
    console.info(`[auth] Correo enviado a ${maskEmail(email)} (id: ${data?.id ?? "—"})`);
  }

  return { ok: true };
}

export async function verifyEmailCode(emailInput: string, codeInput: string) {
  const email = normalizeEmail(emailInput);
  const code = codeInput.trim();
  const now = Date.now();

  const record = store.get(email);
  if (!record) {
    return { ok: false as const, reason: "CODE_INVALID_OR_EXPIRED" as const };
  }

  if (now > record.expiresAtMs) {
    store.delete(email);
    return { ok: false as const, reason: "CODE_INVALID_OR_EXPIRED" as const };
  }

  if (record.attemptsLeft <= 0) {
    store.delete(email);
    return { ok: false as const, reason: "TOO_MANY_ATTEMPTS" as const };
  }

  record.attemptsLeft -= 1;
  store.set(email, record);

  if (sha256(code) !== record.codeHash) {
    return { ok: false as const, reason: "CODE_INVALID" as const };
  }

  store.delete(email);
  verifiedEmails.set(email, Date.now() + VERIFIED_EMAIL_TTL_MS);
  return { ok: true as const };
}

function isEmailVerified(email: string) {
  const expiresAt = verifiedEmails.get(email);
  if (!expiresAt) return false;
  if (Date.now() > expiresAt) {
    verifiedEmails.delete(email);
    return false;
  }
  return true;
}

export async function registerUser(input: {
  email: string;
  eaId: string;
  password: string;
  birthDate: string;
  countryCode: string;
}) {
  const email = normalizeEmail(input.email);
  const eaId = input.eaId.trim();
  const password = input.password;
  const birthDate = input.birthDate.trim();
  const countryCode = input.countryCode.trim().toUpperCase();

  if (!isEmailVerified(email)) {
    throw new AppError(
      400,
      "EMAIL_NOT_VERIFIED",
      "Debes verificar tu correo electrónico antes de crear la cuenta"
    );
  }

  if (!isSupabaseConfigured()) {
    throw new AppError(
      503,
      "SUPABASE_NOT_CONFIGURED",
      "Configura SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY en el .env del backend (Supabase → Settings → API → service_role)"
    );
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    throw new AppError(503, "SUPABASE_NOT_CONFIGURED", "No se pudo conectar con Supabase");
  }

  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: {
      pilot_name: eaId,
    },
  });

  if (error) {
    const message = error.message.toLowerCase();
    if (message.includes("already") || message.includes("registered")) {
      throw new AppError(409, "EMAIL_ALREADY_REGISTERED", "Este correo ya tiene una cuenta");
    }
    console.error("[auth] Error al crear usuario en Supabase:", error);
    const detail =
      env.NODE_ENV === "development" ? error.message : "No se pudo crear la cuenta";
    throw new AppError(502, "REGISTRATION_FAILED", detail);
  }

  const userId = data.user?.id;
  if (userId) {
    const { data: existingProfile } = await supabase
      .from("profiles")
      .select("id")
      .eq("id", userId)
      .maybeSingle();

    if (existingProfile) {
      const { error: profileError } = await supabase
        .from("profiles")
        .update({
          pilot_name: eaId,
          birth_date: birthDate,
          country_code: countryCode,
        })
        .eq("id", userId);

      if (profileError) {
        console.warn("[auth] No se pudo actualizar pilot_name en profiles:", profileError);
      }
    } else {
      const { error: insertError } = await supabase.from("profiles").insert({
        id: userId,
        pilot_name: eaId,
        birth_date: birthDate,
        country_code: countryCode,
      });

      if (insertError) {
        console.error("[auth] No se pudo insertar en profiles:", insertError);
        throw new AppError(502, "PROFILE_CREATE_FAILED", "No se pudo crear el perfil del piloto");
      }
    }
  }

  verifiedEmails.delete(email);

  if (env.NODE_ENV === "development") {
    console.info(`[auth] Cuenta creada para ${maskEmail(email)} (pilot_name: ${eaId})`);
  }

  return { ok: true as const, userId };
}

type ProfileRow = {
  pilot_name: string | null;
  first_name: string | null;
  last_name: string | null;
  birth_date: string | null;
  country_code: string | null;
};

function normalizeBirthDate(value: string | null | undefined): string | null {
  if (!value) return null;
  const iso = value.slice(0, 10);
  return /^\d{4}-\d{2}-\d{2}$/.test(iso) ? iso : null;
}

async function getProfileForUser(
  supabase: NonNullable<ReturnType<typeof getSupabaseAdmin>>,
  userId: string,
  fallbackEmail?: string | null
) {
  const { data: profile } = await supabase
    .from("profiles")
    .select("pilot_name, first_name, last_name, birth_date, country_code")
    .eq("id", userId)
    .maybeSingle();

  const row = profile as ProfileRow | null;
  const emailPrefix = fallbackEmail?.split("@")[0];
  const pilotName = row?.pilot_name ?? emailPrefix ?? "Piloto";

  return {
    pilotName,
    firstName: row?.first_name?.trim() || null,
    lastName: row?.last_name?.trim() || null,
    birthDate: normalizeBirthDate(row?.birth_date),
    countryCode: row?.country_code?.trim().toUpperCase() || null,
  };
}

async function getPilotNameForUser(
  supabase: NonNullable<ReturnType<typeof getSupabaseAdmin>>,
  userId: string,
  fallbackEmail?: string | null
) {
  const profile = await getProfileForUser(supabase, userId, fallbackEmail);
  return profile.pilotName;
}

export async function signInWithEmailPassword(emailInput: string, password: string) {
  const email = normalizeEmail(emailInput);
  const supabase = requireSupabase();

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error || !data.session || !data.user) {
    throw new AppError(401, "INVALID_CREDENTIALS", "Correo o contraseña incorrectos");
  }

  const pilotName = await getPilotNameForUser(supabase, data.user.id, data.user.email);

  return {
    ok: true as const,
    accessToken: data.session.access_token,
    refreshToken: data.session.refresh_token,
    pilotName,
    email: data.user.email ?? email,
  };
}

export async function getMeFromAccessToken(accessToken: string) {
  const supabase = requireSupabase();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser(accessToken);

  if (error || !user) {
    throw new AppError(401, "INVALID_SESSION", "Sesión no válida o caducada");
  }

  const profile = await getProfileForUser(supabase, user.id, user.email);
  const memberSinceYear = user.created_at
    ? new Date(user.created_at).getFullYear()
    : new Date().getFullYear();

  return {
    ok: true as const,
    email: user.email ?? "",
    pilotName: profile.pilotName,
    firstName: profile.firstName,
    lastName: profile.lastName,
    birthDate: profile.birthDate,
    countryCode: profile.countryCode,
    memberSinceYear,
    emailVerified: Boolean(user.email_confirmed_at),
  };
}

export async function updateProfileNameFromAccessToken(
  accessToken: string,
  input: { firstName: string; lastName: string }
) {
  const supabase = requireSupabase();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser(accessToken);

  if (error || !user) {
    throw new AppError(401, "INVALID_SESSION", "Sesión no válida o caducada");
  }

  const firstName = input.firstName.trim();
  const lastName = input.lastName.trim();

  const { data: existing } = await supabase
    .from("profiles")
    .select("id")
    .eq("id", user.id)
    .maybeSingle();

  if (!existing) {
    const pilotName = await getPilotNameForUser(supabase, user.id, user.email);
    const { error: insertError } = await supabase.from("profiles").insert({
      id: user.id,
      pilot_name: pilotName,
      first_name: firstName,
      last_name: lastName,
    });

    if (insertError) {
      console.error("[auth] No se pudo crear perfil con nombre:", insertError);
      throw new AppError(502, "PROFILE_UPDATE_FAILED", "No se pudo guardar el nombre");
    }
  } else {
    const { error: updateError } = await supabase
      .from("profiles")
      .update({ first_name: firstName, last_name: lastName })
      .eq("id", user.id);

    if (updateError) {
      console.error("[auth] No se pudo actualizar nombre:", updateError);
      throw new AppError(502, "PROFILE_UPDATE_FAILED", "No se pudo guardar el nombre");
    }
  }

  return {
    ok: true as const,
    firstName,
    lastName,
    pilotName: await getPilotNameForUser(supabase, user.id, user.email),
  };
}

export async function updateProfileBirthDateFromAccessToken(
  accessToken: string,
  input: { birthDate: string }
) {
  const supabase = requireSupabase();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser(accessToken);

  if (error || !user) {
    throw new AppError(401, "INVALID_SESSION", "Sesión no válida o caducada");
  }

  const birthDate = normalizeBirthDate(input.birthDate.trim());
  if (!birthDate) {
    throw new AppError(400, "INVALID_BIRTH_DATE", "Fecha de nacimiento no válida");
  }

  const { data: existing } = await supabase
    .from("profiles")
    .select("id")
    .eq("id", user.id)
    .maybeSingle();

  if (!existing) {
    const pilotName = await getPilotNameForUser(supabase, user.id, user.email);
    const { error: insertError } = await supabase.from("profiles").insert({
      id: user.id,
      pilot_name: pilotName,
      birth_date: birthDate,
    });

    if (insertError) {
      console.error("[auth] No se pudo crear perfil con fecha de nacimiento:", insertError);
      throw new AppError(502, "PROFILE_UPDATE_FAILED", "No se pudo guardar la fecha de nacimiento");
    }
  } else {
    const { error: updateError } = await supabase
      .from("profiles")
      .update({ birth_date: birthDate })
      .eq("id", user.id);

    if (updateError) {
      console.error("[auth] No se pudo actualizar fecha de nacimiento:", updateError);
      throw new AppError(502, "PROFILE_UPDATE_FAILED", "No se pudo guardar la fecha de nacimiento");
    }
  }

  return {
    ok: true as const,
    birthDate,
    pilotName: await getPilotNameForUser(supabase, user.id, user.email),
  };
}

