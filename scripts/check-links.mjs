// Fails when a built page links to an internal path that does not exist in dist/.
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const dist = new URL('../dist', import.meta.url).pathname;
const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const broken = new Set();
for (const file of walk(dist).filter((f) => f.endsWith('.html'))) {
  const html = readFileSync(file, 'utf8');
  for (const [, href] of html.matchAll(/(?:href|src)="(\/[^"#?]*)/g)) {
    const target = join(dist, href.endsWith('/') ? `${href}index.html` : href);
    if (!existsSync(target)) broken.add(`${file.slice(dist.length)} -> ${href}`);
  }
}
if (broken.size) {
  console.error([...broken].sort().join('\n'));
  process.exit(1);
}
console.log('Internal links OK');
