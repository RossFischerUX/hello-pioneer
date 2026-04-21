#!/bin/bash
# Injects env vars into config.js for the static site.
# Locally: source .env first. On Vercel: env vars are set in the dashboard.
# Strip any trailing whitespace/newlines Vercel may add to stored env var values
URL=$(printf '%s' "${SUPABASE_URL}" | tr -d '\n\r')
KEY=$(printf '%s' "${SUPABASE_ANON_KEY}" | tr -d '\n\r')
cat > config.js <<EOF
window.SUPABASE_URL = "${URL}";
window.SUPABASE_ANON_KEY = "${KEY}";
EOF
echo "config.js generated."
