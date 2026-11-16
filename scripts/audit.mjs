// Accessibility + consistency audit. Run: npm run audit
// Checks WCAG 2.2 AA contrast for every intended token pair in both themes,
// and scans component CSS for raw colors, missing focus styles and off-scale values.
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const t = JSON.parse(readFileSync(join(root, 'tokens/tokens.json'), 'utf8'));
const C = Object.fromEntries(t.color.tokens.map((x) => [x.name, x]));
const val = (n, th) => (typeof C[n].value === 'object' ? C[n].value[th] : C[n].value);
const res = (n, th) => { let v = val(n, th); while (v.startsWith('{')) v = val(v.slice(1, -1), th); return v; };
const lum = (hex) => {
  const c = [0, 2, 4].map((i) => parseInt(hex.replace('#', '').slice(i, i + 2), 16) / 255)
    .map((x) => (x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};
const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };

// [foreground, backgrounds it is used on, minimum ratio]
const PAIRS = [
  ['text-primary', ['bg-default', 'bg-subtle', 'bg-muted', 'bg-hover', 'bg-brand-subtle', 'bg-success-subtle', 'bg-warning-subtle', 'bg-danger-subtle'], 4.5],
  ['text-secondary', ['bg-default', 'bg-subtle', 'bg-muted', 'bg-brand-subtle', 'bg-success-subtle', 'bg-warning-subtle', 'bg-danger-subtle'], 4.5],
  ['text-placeholder', ['bg-default', 'bg-subtle'], 4.5],
  ['text-on-brand', ['bg-brand', 'bg-brand-hover', 'bg-danger', 'bg-danger-hover'], 4.5],
  ['text-inverse', ['bg-inverse'], 4.5],
  ['text-brand', ['bg-default', 'bg-subtle', 'bg-brand-subtle'], 4.5],
  ['text-success', ['bg-success-subtle', 'bg-default'], 4.5],
  ['text-warning', ['bg-warning-subtle', 'bg-default'], 4.5],
  ['text-danger', ['bg-danger-subtle', 'bg-default'], 4.5],
  ['border-strong', ['bg-default', 'bg-subtle'], 3],
  ['border-focus', ['bg-default', 'bg-subtle'], 3],
  ['border-danger', ['bg-default'], 3],
  ['border-brand', ['bg-default', 'bg-brand-subtle'], 3],
  ['icon-primary', ['bg-default', 'bg-subtle', 'bg-muted'], 3],
  ['icon-secondary', ['bg-default', 'bg-subtle', 'bg-muted'], 3],
  ['icon-brand', ['bg-default', 'bg-brand-subtle'], 3],
  ['icon-on-brand', ['bg-brand', 'bg-selected'], 3],
  ['bg-selected', ['bg-default', 'bg-subtle'], 3],
  ['bg-strong', ['bg-default', 'bg-subtle'], 3],
];

let fails = 0, checked = 0;
for (const [fg, bgs, min] of PAIRS) for (const bg of bgs) for (const th of ['light', 'dark']) {
  const r = ratio(res(fg, th), res(bg, th)); checked++;
  if (r < min) { fails++; console.log(`✗ ${fg} on ${bg} (${th}): ${r.toFixed(2)}:1, needs ${min}:1`); }
}
console.log(`Contrast: ${checked} pairs checked, ${fails} failing`);

const css = readFileSync(join(root, 'src/styles/components.css'), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
const rawColors = [...new Set(css.match(/#[0-9a-fA-F]{3,6}\b|rgba?\([^)]*\)/g) || [])];
const pointer = new Set([...css.matchAll(/\.(ai-[a-z0-9-]+)\s*\{[^}]*cursor:\s*pointer/g)].map((m) => m[1]));
const focus = new Set([...css.matchAll(/\.(ai-[a-z0-9-]+)[^{,]*:focus/g)].map((m) => m[1]));
const noFocus = [...pointer].filter((c) => !focus.has(c));
const scale = new Set(t.type.groups.flatMap((g) => g.styles.map((s) => s.fontSize)).concat(['13px']));
const offScale = [...new Set([...css.matchAll(/font-size:\s*(\d+px)/g)].map((m) => m[1]))].filter((s) => !scale.has(s));
console.log(`Raw colors in component CSS: ${rawColors.length ? rawColors.join(', ') : 'none'}`);
console.log(`Interactive classes without a focus style: ${noFocus.length ? noFocus.join(', ') : 'none'}`);
console.log(`Font sizes off the type scale: ${offScale.length ? offScale.join(', ') : 'none'}`);
const problems = fails + rawColors.length + noFocus.length + offScale.length;
console.log(problems ? `\n${problems} issue(s) found.` : '\nAll checks pass.');
process.exit(problems ? 1 : 0);
