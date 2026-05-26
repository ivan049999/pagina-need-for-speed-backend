import { createApp } from "./app.js";
import { env } from "./config/env.js";
import { isSupabaseConfigured } from "./shared/database/supabase.js";

const app = createApp();

app.listen(env.PORT, () => {
  console.log(`[nfs-api] ${env.NODE_ENV} → http://localhost:${env.PORT}${env.API_PREFIX}`);
  if (!isSupabaseConfigured()) {
    console.warn(
      "[nfs-api] Supabase no configurado: añade SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY en .env (Dashboard → Settings → API)"
    );
  }
});
