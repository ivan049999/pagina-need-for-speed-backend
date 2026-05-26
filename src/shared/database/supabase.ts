import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { env } from "../../config/env.js";

const PLACEHOLDER_URL_PARTS = ["your-project.supabase.co", "example.supabase.co"];
const PLACEHOLDER_KEYS = ["your-service-role-key", "your_service_role_key"];

export function isSupabaseConfigured(): boolean {
  const url = env.SUPABASE_URL;
  const key = env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return false;
  if (PLACEHOLDER_KEYS.includes(key)) return false;
  if (PLACEHOLDER_URL_PARTS.some((part) => url.includes(part))) return false;
  if (!key.startsWith("eyJ")) return false;
  return true;
}

export function getSupabaseAdmin(): SupabaseClient | null {
  if (!isSupabaseConfigured()) return null;

  return createClient(env.SUPABASE_URL!, env.SUPABASE_SERVICE_ROLE_KEY!, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
