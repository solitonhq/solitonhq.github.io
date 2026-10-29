// Fails when a page exists in English but not in Turkish (or vice versa).
import { readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = new URL('../src/pages', import.meta.url).pathname;
const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const all = walk(root).map((p) => relative(root, p));
const tr = new Set(all.filter((p) => p.startsWith('tr/')).map((p) => p.slice(3)));
const en = new Set(all.filter((p) => !p.startsWith('tr/') && p !== '404.astro'));
const missing = [
  ...[...en].filter((p) => !tr.has(p)).map((p) => `missing Turkish page: tr/${p}`),
  ...[...tr].filter((p) => !en.has(p)).map((p) => `missing English page: ${p}`),
];
if (missing.length) {
  console.error(missing.join('\n'));
  process.exit(1);
}
console.log(`EN/TR parity OK (${en.size} pages)`);
