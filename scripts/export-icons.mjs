// Exports the principle icons as standalone SVG files for the GitHub profile README.
// Usage: node --experimental-strip-types scripts/export-icons.mjs <outDir>
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { icons } from '../src/data/icons.ts';

const out = process.argv[2];
if (!out) throw new Error('usage: export-icons.mjs <outDir>');
mkdirSync(out, { recursive: true });

// Fixed mid-tone colours that read on both light and dark GitHub backgrounds.
const COLOR = { line: '#8b8b95', a: '#3987e5', b: '#eb6834' };
const NAME = { strings: 'guitar', checks: 'bike', posture: 'sekiro', roles: 'team', types: 'pokemon', wave: 'grand-blue', toggle: 'club', islands: 'one-piece', swatches: 'fashion' };

for (const [id, shapes] of Object.entries(icons)) {
  const body = shapes
    .map((s) => `<path d="${s.d}" stroke="${COLOR[s.role]}" fill="${s.fill ? COLOR[s.role] : 'none'}"${s.fill ? ' fill-opacity="0.85"' : ''}/>`)
    .join('');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${body}</svg>\n`;
  writeFileSync(join(out, `${NAME[id]}.svg`), svg);
}
console.log('wrote', Object.keys(icons).length, 'icons to', out);
