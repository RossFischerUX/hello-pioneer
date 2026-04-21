#!/bin/bash
# Injects env vars into config.js for the static site.
# Locally: source .env first. On Vercel: env vars are set in the dashboard.
cat > config.js <<EOF
window.SUPABASE_URL = "${SUPABASE_URL}";
window.SUPABASE_ANON_KEY = "${SUPABASE_ANON_KEY}";
EOF
echo "config.js generated."
