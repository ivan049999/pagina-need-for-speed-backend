# Setup local en Windows
Copy-Item .env.example .env -ErrorAction SilentlyContinue
npm install
Write-Host "Listo. Ejecuta: npm run dev"
