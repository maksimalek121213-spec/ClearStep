const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const root = path.resolve(__dirname, '..');
const errors = [];
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const refs = [...html.matchAll(/\b(?:src|href)=["']([^"']+)["']/gi)].map((m) => m[1]);

for (const ref of refs) {
  if (/^(?:[a-z]+:|\/\/|#)/i.test(ref)) continue;
  const localPath = decodeURIComponent(ref.split(/[?#]/, 1)[0]);
  if (localPath && !fs.existsSync(path.resolve(root, localPath))) errors.push(`Missing local HTML reference: ${ref}`);
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (entry.name === '.git' || entry.name === 'node_modules' || entry.name === 'work') return [];
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
}

const jsFiles = walk(root).filter((file) => file.endsWith('.js'));
for (const file of jsFiles) {
  const result = spawnSync(process.execPath, ['--check', file], { encoding: 'utf8' });
  if (result.status !== 0) errors.push(`JavaScript syntax error in ${path.relative(root, file)}: ${result.stderr.trim()}`);
}

const sql = fs.readFileSync(path.join(root, 'supabase', 'schema.sql'), 'utf8');
for (const [pattern, label] of [
  [/enable\s+row\s+level\s+security/i, 'RLS enablement'],
  [/create\s+policy/i, 'at least one RLS policy'],
  [/auth\.uid\(\)/i, 'owner-scoped auth.uid() policy'],
]) if (!pattern.test(sql)) errors.push(`SQL schema is missing ${label}`);

if (errors.length) {
  console.error(errors.map((error) => `FAIL ${error}`).join('\n'));
  process.exitCode = 1;
} else {
  console.log(`PASS: ${refs.length} local/remote HTML references checked; ${jsFiles.length} JavaScript files parse; SQL RLS markers present.`);
}
