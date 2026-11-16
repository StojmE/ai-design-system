// Builds every code token file from tokens/tokens.json (the single source of truth).
// Run: npm run tokens
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const t = JSON.parse(readFileSync(join(root, 'tokens/tokens.json'), 'utf8'));
const out = join(root, 'src/tokens');
mkdirSync(out, { recursive: true });

const C = Object.fromEntries(t.color.tokens.map((x) => [x.name, x]));
const val = (n, th) => (typeof C[n].value === 'object' ? C[n].value[th] : C[n].value);
const res = (n, th) => { let v = val(n, th); while (v.startsWith('{')) v = val(v.slice(1, -1), th); return v; };
const isPrim = (n) => /^(indigo|gray|green|amber|red)-\d+$|^white$|^black$/.test(n);
const sem = Object.keys(C).filter((n) => !isPrim(n));
const prim = Object.keys(C).filter(isPrim);
const themed = (x, th) => (typeof x.value === 'object' ? x.value[th] : x.value);
const ref = (v) => (v.startsWith('{') ? `var(--${v.slice(1, -1)})` : v);
const HEAD = '/* AI Design System tokens — generated from tokens.json. Do not edit by hand. */\n';

// ---------- tokens.css ----------
const css = [HEAD, ':root {', ...prim.map((n) => `  --${n}: ${val(n, 'light')};`), '}\n'];
for (const [th, sel] of [['light', ':root, [data-theme="light"]'], ['dark', '[data-theme="dark"]']]) {
  css.push(sel + ' {', ...sem.map((n) => `  --${n}: ${ref(val(n, th))};`), ...t.shadow.tokens.map((x) => `  --${x.name}: ${themed(x, th)};`), '}\n');
}
css.push(':root {');
for (const fam of ['spacing', 'radius', 'size']) css.push(...t[fam].tokens.map((x) => `  --${x.name}: ${x.value};`));
css.push(...Object.entries(t.type.families).map(([k, v]) => `  --font-${k}: ${v};`), '}\n');
css.push('@media (prefers-color-scheme: dark) {\n  :root:not([data-theme="light"]) {\n' + sem.map((n) => `    --${n}: ${ref(val(n, 'dark'))};`).join('\n') + '\n  }\n}\n');
for (const g of t.type.groups) for (const s of g.styles) {
  css.push(`.${s.name} { font-family: var(--font-${s.family || g.family}); font-size: ${s.fontSize}; line-height: ${s.lineHeight}; font-weight: ${s.fontWeight}; letter-spacing: ${s.letterSpacing || '0px'}; }`);
}
writeFileSync(join(out, 'tokens.css'), css.join('\n') + '\n');

// ---------- W3C Design Tokens JSON (one file per theme) ----------
const colorGroup = (th) => {
  const g = { palette: {} };
  for (const n of prim) { const [fam, step] = n.split('-'); (g.palette[fam] ??= {})[step || 'base'] = { $type: 'color', $value: val(n, th), $description: C[n].usage }; }
  for (const n of sem) {
    const i = n.indexOf('-'); const role = n.slice(0, i); const rest = n.slice(i + 1);
    let v = val(n, th);
    if (v.startsWith('{')) { const [f, s] = v.slice(1, -1).split('-'); v = `{color.palette.${f}.${s || 'base'}}`; }
    (g[role] ??= {})[rest] = { $type: 'color', $value: v, $description: C[n].usage };
  }
  return g;
};
const dim = (fam) => Object.fromEntries(t[fam].tokens.map((x) => [x.name.split('-').slice(1).join('-'), { $type: 'dimension', $value: x.value, $description: x.usage || '' }]));
const typography = {};
for (const g of t.type.groups) for (const s of g.styles) {
  typography[s.name] = { $type: 'typography', $value: { fontFamily: `{font.${s.family || g.family}}`, fontSize: s.fontSize, lineHeight: s.lineHeight, fontWeight: s.fontWeight, letterSpacing: s.letterSpacing || '0px' }, $description: s.usage || '' };
}
const fonts = Object.fromEntries(Object.entries(t.type.families).map(([k, v]) => [k, { $type: 'fontFamily', $value: v.split(',').map((f) => f.trim().replace(/^"|"$/g, '')) }]));
for (const th of ['light', 'dark']) {
  const doc = {
    $description: `AI Design System — ${th} theme (W3C Design Tokens format)`,
    color: colorGroup(th), spacing: dim('spacing'), radius: dim('radius'), size: dim('size'), font: fonts, typography,
    shadow: Object.fromEntries(t.shadow.tokens.map((x) => [x.name, { $type: 'shadow', $value: themed(x, th), $description: x.usage }])),
  };
  writeFileSync(join(out, `tokens.${th}.json`), JSON.stringify(doc, null, 2));
}

// ---------- Tailwind preset ----------
const twColors = {};
for (const n of sem) { const i = n.indexOf('-'); (twColors[n.slice(0, i)] ??= {})[n.slice(i + 1)] = `var(--${n})`; }
const tw = {
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: { extend: {
    colors: twColors,
    spacing: Object.fromEntries(t.spacing.tokens.map((x) => [x.name.split('-').slice(1).join('-'), `var(--${x.name})`])),
    borderRadius: Object.fromEntries(t.radius.tokens.map((x) => [x.name.split('-').slice(1).join('-'), `var(--${x.name})`])),
    boxShadow: Object.fromEntries(t.shadow.tokens.map((x) => [x.name.replace('shadow-', ''), `var(--${x.name})`])),
    fontFamily: Object.fromEntries(Object.keys(t.type.families).map((k) => [k, [`var(--font-${k})`]])),
    fontSize: Object.fromEntries(t.type.groups.flatMap((g) => g.styles.map((s) => [s.name, [s.fontSize, { lineHeight: s.lineHeight, fontWeight: String(s.fontWeight), letterSpacing: s.letterSpacing || '0px' }]]))),
    minHeight: { touch: 'var(--size-touch)' }, minWidth: { touch: 'var(--size-touch)' },
  } },
};
writeFileSync(join(out, 'tailwind-preset.cjs'),
  '// AI Design System — Tailwind preset. Load src/tokens/tokens.css first; classes read its CSS variables.\n' +
  '// Usage: presets: [require("ai-design-system/tailwind")]  ·  e.g. bg-bg-brand text-text-on-brand rounded-md p-lg shadow-focus-ring\n' +
  '/** @type {import("tailwindcss").Config} */\nmodule.exports = ' + JSON.stringify(tw, null, 2) + ';\n');

// ---------- TypeScript ----------
const ts = ['// AI Design System tokens — generated from tokens.json. Do not edit by hand.', '',
  'export const themes = ["light", "dark"] as const;', 'export type Theme = typeof themes[number];', '',
  '/** Resolved color values per theme. */', 'export const color = {',
  ...sem.map((n) => `  "${n}": { light: "${res(n, 'light')}", dark: "${res(n, 'dark')}" },`),
  '} as const;', 'export type ColorToken = keyof typeof color;', '',
  '/** CSS variable for a token, e.g. cssVar("bg-brand") → "var(--bg-brand)". */',
  'export const cssVar = (name: string) => `var(--${name})`;', ''];
for (const fam of ['spacing', 'radius', 'size']) ts.push(`export const ${fam} = {`, ...t[fam].tokens.map((x) => `  "${x.name}": "${x.value}",`), '} as const;', '');
ts.push('export const shadow = {', ...t.shadow.tokens.map((x) => `  "${x.name}": ${JSON.stringify(x.value)},`), '} as const;', '');
ts.push('export const font = ' + JSON.stringify(t.type.families, null, 2) + ' as const;', '');
ts.push('export const typography = {', ...t.type.groups.flatMap((g) => g.styles.map((s) => `  "${s.name}": { family: "${s.family || g.family}", fontSize: "${s.fontSize}", lineHeight: "${s.lineHeight}", fontWeight: ${s.fontWeight}, letterSpacing: "${s.letterSpacing || '0px'}" },`)), '} as const;');
writeFileSync(join(out, 'tokens.ts'), ts.join('\n') + '\n');

console.log(`Built ${Object.keys(C).length} colors, ${t.spacing.tokens.length + t.radius.tokens.length + t.size.tokens.length} dimensions, ${Object.keys(typography).length} text styles → src/tokens/`);
