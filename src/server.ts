import { createApp } from "./app.js";
import { env } from "./config/env.js";

const app = createApp();

app.listen(env.PORT, () => {
  console.log(`[nfs-api] ${env.NODE_ENV} → http://localhost:${env.PORT}${env.API_PREFIX}`);
});
