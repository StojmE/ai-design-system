// The full AI Design System guide: overview, brand, how to use, foundations, components, patterns and audit.
// Everything is read live from this repo (docs/, tokens/, src/), so edits show up as soon as you save.
import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { marked } from 'marked';
import * as A from '../src/index.js';
import { previews } from './previews.js';
import tokens from '../tokens/tokens.json';
import './playground.css';

const h = React.createElement;
const raw = import.meta.glob(['../docs/*.md', '../src/tokens/*', '../src/components/index.d.ts'], { query: '?raw', import: 'default', eager: true });
const file = (p) => raw['../' + p] || '';
const doc = (p) => file('docs/' + p).replace(/^# .*\n+/, ''); // drop the H1; the page shows its own title
const md = (s) => ({ __html: marked.parse(s || '', { gfm: true }) });
const sections = (p) => Object.fromEntries(doc(p).split(/^## /m).slice(1).map((s) => { const i = s.indexOf('\n'); return [s.slice(0, i).trim(), s.slice(i + 1)]; }));
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// ---------- tokens ----------
const C = Object.fromEntries(tokens.color.tokens.map((x) => [x.name, x]));

// ---------- component docs (docs/10-components.md) ----------
const compDocs = {};
for (const part of doc('10-components.md').split(/\n---\n/).slice(1)) {
  const m = part.match(/## (.+)\n+`(\w+)` · ([^\n]+)\n+([\s\S]*)/);
  if (m) { const [usage, specs] = m[4].split(/\n### Specs\n/); compDocs[m[2]] = { title: m[1], usage, specs }; }
}
const dts = file('src/components/index.d.ts');
const props = (id) => (dts.match(new RegExp('export interface ' + id + 'Props[^{]*\\{[^\\n]*\\}')) || [])[0];

// ---------- pages ----------
const spec = sections('03-specs-foundations.md');
const pages = [];
const add = (id, group, title, lead, render) => pages.push({ id, group, title, lead, render });
const Md = ({ children }) => <div className="md" dangerouslySetInnerHTML={md(children)} />;

add('overview', 'Getting started', 'Overview', '', () => <Md>{doc('00-overview.md')}</Md>);
add('brand-attributes', 'Getting started', 'Brand attributes', 'Five attributes behind every token and component, plus voice and tone.', () => <Md>{doc('01-brand.md')}</Md>);
add('how-to-use', 'Getting started', 'How to use', 'Designing with the system, using it in code, and changing it.', () => <Md>{doc('02-how-to-use.md')}</Md>);

function Hex({ name }) {
  const [v, set] = useState('');
  useEffect(() => {
    const read = () => set(getComputedStyle(document.documentElement).getPropertyValue('--' + name).trim().toUpperCase());
    read(); const o = new MutationObserver(read); o.observe(document.documentElement, { attributes: true }); return () => o.disconnect();
  }, [name]);
  return <span className="sw-hex">{v}</span>;
}
const Swatches = ({ prefix }) => (
  <div className="sw-grid">{Object.values(C).filter((x) => x.name.startsWith(prefix)).map((x) => (
    <div className="sw" key={x.name}><span className="sw-chip" style={{ background: `var(--${x.name})` }} /><code>{x.name}</code><Hex name={x.name} /><small>{x.usage}</small></div>
  ))}</div>
);

add('color', 'Foundations', 'Color', 'Semantic tokens with Light and Dark values, and the primitive palette behind them.', () => (
  <>
    <p>Switch the theme in the menu to see the Dark values; hex codes update with it.</p>
    {[['bg-', 'Background'], ['text-', 'Text'], ['border-', 'Border'], ['icon-', 'Icon']].map(([p, l]) => <React.Fragment key={p}><h2>{l}</h2><Swatches prefix={p} /></React.Fragment>)}
    <h2>Primitive palette</h2>
    {['indigo', 'gray', 'green', 'amber', 'red'].map((f) => (
      <div className="ramp" key={f}><code>{f}</code><div className="ramp-row">{Object.keys(C).filter((n) => new RegExp('^' + f + '-\\d+$').test(n)).map((n) => <div key={n} className="ramp-cell" style={{ background: `var(--${n})` }}><span>{n.split('-')[1]}</span></div>)}</div></div>
    ))}
    <h2>Full table</h2><Md>{spec['Color']}</Md>
  </>
));
add('typography', 'Foundations', 'Typography', 'Plus Jakarta Sans for everything, the system monospace for code.', () => (
  <>
    <div>{tokens.type.groups.flatMap((g) => g.styles.map((s) => (
      <div className="type-row" key={s.name}><div className="type-meta"><code>{s.name}</code><small>{s.fontSize} / {s.lineHeight} · {s.fontWeight}</small></div><div className={s.name}>{s.name === 'code' ? 'const reply = await ai.chat()' : 'How can I help you today?'}</div></div>
    )))}</div>
    <Md>{spec['Typography']}</Md>
  </>
));
add('spacing', 'Foundations', 'Spacing', 'A 4px grid for every padding and gap.', () => (
  <>
    <div>{tokens.spacing.tokens.map((x) => <div className="space-row" key={x.name}><code>{x.name}</code><span className="space-bar" style={{ width: x.value }} /><small>{x.value}</small></div>)}</div>
    <Md>{spec['Spacing']}</Md>
  </>
));
add('radius-elevation', 'Foundations', 'Radius & elevation', 'Crisp 4px corners by default; shadows only on floating surfaces.', () => (
  <>
    <h2>Radius</h2>
    <div className="box-row">{tokens.radius.tokens.map((x) => <div className="box-cell" key={x.name}><span className="rad-box" style={{ borderRadius: x.value }} /><code>{x.name}</code><small>{x.value}</small></div>)}</div>
    <Md>{spec['Radius']}</Md>
    <h2>Elevation</h2>
    <div className="box-row shadow-row">{tokens.shadow.tokens.map((x) => <div className="box-cell" key={x.name}><span className="sh-box" style={{ boxShadow: `var(--${x.name})` }} /><code>{x.name}</code></div>)}</div>
    <Md>{spec['Elevation']}</Md>
  </>
));
add('touch-sizes', 'Foundations', 'Touch sizes', 'Fixed sizes for phones and tablets.', () => <Md>{spec['Touch sizes']}</Md>);
add('layout', 'Foundations', 'Layout', 'Breakpoints and container widths.', () => <Md>{spec['Layout']}</Md>);
add('accessibility', 'Foundations', 'Accessibility', 'Contrast, focus, targets and motion. Run npm run audit to recheck.', () => <Md>{spec['Accessibility']}</Md>);
add('icons', 'Foundations', 'Icons', 'Stroke icons, including the AI sparkle.', () => <><Preview id="Icon" /><Md>{compDocs.Icon?.usage}</Md></>);

function CodeFile({ path, label }) {
  const [done, setDone] = useState(false);
  const text = file(path);
  const copy = () => navigator.clipboard?.writeText(text).then(() => { setDone(true); setTimeout(() => setDone(false), 1500); }, () => {});
  return (
    <>
      <h2>{label}</h2>
      <div className="codefile">
        <div className="codefile-head"><code>{path}</code><button type="button" className="ai-code-copy" onClick={copy}>{done ? 'Copied' : 'Copy'}</button></div>
        <pre><code>{text}</code></pre>
      </div>
    </>
  );
}
add('code-tokens', 'Foundations', 'Code tokens', 'Generated from tokens/tokens.json by npm run tokens.', () => (
  <>
    <p>Edit <code>tokens/tokens.json</code>, run <code>npm run tokens</code>, and these files (and this page) update.</p>
    <CodeFile path="src/tokens/tokens.css" label="CSS variables" />
    <CodeFile path="src/tokens/tailwind-preset.cjs" label="Tailwind preset" />
    <CodeFile path="src/tokens/tokens.ts" label="TypeScript" />
    <CodeFile path="src/tokens/tokens.light.json" label="W3C Design Tokens · Light" />
    <CodeFile path="src/tokens/tokens.dark.json" label="W3C Design Tokens · Dark" />
  </>
));

const groupLabel = { Mobile: 'Mobile (touch)', Foundations: 'Identity' };
for (const p of previews) {
  if (p.group === 'Patterns' || p.id === 'Icon') continue;
  const d = compDocs[p.id] || {};
  add(slug(p.title), 'Components · ' + (groupLabel[p.group] || p.group), p.title, '', () => (
    <>
      <Preview id={p.id} />
      <h2>Usage</h2><Md>{d.usage}</Md>
      {d.specs && <><h2>Specs</h2><Md>{d.specs}</Md></>}
      {props(p.id) && <><h2>Props</h2><pre className="props"><code>{props(p.id)}</code></pre></>}
      <p className="src-hint">Source: <code>src/components/index.js</code> → <code>{p.id}</code> · Styles: <code>src/styles/components.css</code></p>
    </>
  ));
}
for (const [id, title, mdFile, comp, lead] of [
  ['pattern-forms', 'Forms', '05-patterns-forms.md', 'FormPattern', 'Layout, required fields, validation and buttons.'],
  ['pattern-empty-states', 'Empty states', '06-patterns-empty-states.md', 'EmptyStatePatterns', 'First use, no results, new chat and all done.'],
  ['pattern-errors', 'Error messaging', '07-patterns-errors.md', 'ErrorPatterns', 'Where errors go and how to write them.'],
]) add(id, 'Patterns', title, lead, () => <><Preview id={comp} label="Live example" /><Md>{doc(mdFile)}</Md></>);
add('ux-copy', 'Patterns', 'UX copy rules', 'How the interface speaks: casing, buttons, the AI voice, formatting, word list.', () => <Md>{doc('08-ux-copy.md')}</Md>);
add('audit', 'Quality', 'Audit', 'Latest accessibility and consistency results. Re-run with npm run audit.', () => <Md>{doc('09-audit.md')}</Md>);

function Preview({ id, label = 'Preview' }) {
  const p = previews.find((x) => x.id === id);
  if (!p) return null;
  return <div className="preview-card"><div className="preview-label">{label}</div><div className="preview">{p.render(A, h)}</div></div>;
}

// ---------- shell ----------
function App() {
  const [id, setId] = useState(() => location.hash.slice(1) || 'overview');
  const [q, setQ] = useState('');
  const [theme, setTheme] = useState(() => { try { return localStorage.getItem('aids-theme') || 'light'; } catch { return 'light'; } });
  const [menu, setMenu] = useState(false);
  useEffect(() => { document.documentElement.dataset.theme = theme; try { localStorage.setItem('aids-theme', theme); } catch {} }, [theme]);
  useEffect(() => {
    const on = () => { setId(location.hash.slice(1) || 'overview'); setMenu(false); scrollTo(0, 0); };
    addEventListener('hashchange', on); return () => removeEventListener('hashchange', on);
  }, []);
  const i = Math.max(0, pages.findIndex((p) => p.id === id));
  const page = pages[i];
  useEffect(() => { document.title = page.title + ' · AI Design System'; document.querySelector('.nav-link.is-active')?.scrollIntoView?.({ block: 'nearest' }); }, [page]);
  const groups = useMemo(() => {
    const g = [];
    for (const p of pages) {
      if (q && !p.title.toLowerCase().includes(q.toLowerCase())) continue;
      let x = g.find((y) => y.name === p.group);
      if (!x) g.push((x = { name: p.group, items: [] }));
      x.items.push(p);
    }
    return g;
  }, [q]);
  const prev = pages[i - 1], next = pages[i + 1];
  const firstComp = groups.find((g) => g.name.startsWith('Components'))?.name;
  return (
    <div className={'shell' + (menu ? ' menu-open' : '')}>
      <aside className="side" aria-label="Guide">
        <div className="side-top">
          <a className="brand" href="#overview"><A.Avatar type="ai" /><span>AI Design System<small>Guide · {previews.length - 3} components</small></span></a>
          <A.Input icon="search" placeholder="Search" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search the guide" />
        </div>
        <nav className="side-nav">
          {groups.map((g) => (
            <div key={g.name}>
              {g.name === firstComp && <div className="nav-super">Components</div>}
              <div className="nav-head">{g.name.replace('Components · ', '')}</div>
              {g.items.map((p) => <a key={p.id} href={'#' + p.id} className={'nav-link' + (p.id === page.id ? ' is-active' : '')} aria-current={p.id === page.id ? 'page' : undefined}>{p.title}</a>)}
            </div>
          ))}
          {!groups.length && <div className="nav-empty">Nothing matches.</div>}
        </nav>
        <div className="side-foot"><span>Theme</span><A.SegmentedControl size="small" items={['Light', 'Dark']} value={theme === 'dark' ? 'Dark' : 'Light'} onChange={(v) => setTheme(v.toLowerCase())} /></div>
      </aside>
      <div className="scrim" onClick={() => setMenu(false)} />
      <main className="main">
        <div className="topbar"><A.IconButton icon="menu" label="Open menu" onClick={() => setMenu(true)} /><strong>AI Design System</strong></div>
        <article className="doc" key={page.id}>
          <div className="doc-eyebrow">{page.group.replace(' · ', ' / ')}</div>
          <h1 className="doc-title">{page.title}</h1>
          {page.lead && <p className="doc-lead">{page.lead}</p>}
          <div className="doc-body">{page.render()}</div>
          <nav className="pager">
            {prev && <a className="prev" href={'#' + prev.id}><small>Previous</small>{prev.title}</a>}
            {next && <a className="next" href={'#' + next.id}><small>Next</small>{next.title}</a>}
          </nav>
        </article>
      </main>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
