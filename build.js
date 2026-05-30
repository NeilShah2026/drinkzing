const fs = require('fs');

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_ANON_KEY;

if (!url || !key) {
  console.error('Error: SUPABASE_URL and SUPABASE_ANON_KEY environment variables must be set.');
  process.exit(1);
}

fs.writeFileSync(
  'config.js',
  `window.__ZING = {\n  supabaseUrl: ${JSON.stringify(url)},\n  supabaseKey: ${JSON.stringify(key)}\n};\n`
);

console.log('config.js generated from environment variables.');
