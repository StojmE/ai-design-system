# AI Design System

Tokens, React components, patterns and docs for AI products. Clean and minimal: indigo accent, Plus Jakarta Sans, 4px corners, Light and Dark themes, WCAG 2.2 AA.

- **The full guide** runs locally with `npm run dev`, the same as the Claude docs site, and updates as you edit `docs/` or `tokens/`
- **66 components** (including 3 pattern pages): buttons, forms, navigation, chat, citations, reasoning, status, overlays, and touch components for mobile
- **Tokens** in CSS, Tailwind, TypeScript and W3C JSON, all generated from one file
- **Docs**: brand attributes, how to use, specs, patterns, UX copy rules, audit

## Quick start

**Tip:** to read the guide inside VS Code, run `npm run dev`, then open the Command Palette (Ctrl+Shift+P) → **Simple Browser: Show** → `http://localhost:5173`.

Open **ai-design-system.code-workspace** in VS Code (double-click it, or File → Open Workspace from File). It loads the editor settings, the build tasks and the recommended extensions.

```bash
npm install
npm run dev        # opens the full guide in your browser
```

| Command | What it does |
|---|---|
| `npm run dev` | Opens the full guide at http://localhost:5173: overview, brand, how to use, foundations, every component with live preview, usage, specs and props, patterns, UX copy, audit. Side menu, search, Light/Dark switch. |
| `npm run build:guide` | Builds a static copy of the guide to `dist-guide/` you can host anywhere |
| `npm run tokens` | Rebuilds `src/tokens/*` from `tokens/tokens.json` |
| `npm run audit` | Checks WCAG contrast in both themes and scans component CSS for raw colors, missing focus styles and off-scale type |
| `npm run build` | Builds the library to `dist/` (ES + CommonJS + one CSS file) |

In VS Code these are also under **Terminal → Run Task…**

## Project layout

```
tokens/tokens.json        ← source of truth for every token (edit this)
scripts/build-tokens.mjs  ← generates src/tokens/*
scripts/audit.mjs         ← accessibility + consistency checks
src/
  tokens/                 ← generated: tokens.css, tokens.ts, tailwind-preset.cjs, tokens.light.json, tokens.dark.json
  styles/components.css   ← component styles (tokens only, no raw colors)
  styles/fonts.css        ← Plus Jakarta Sans
  components/index.js     ← all components (React 18)
  components/index.d.ts   ← props for every component
  index.js                ← package entry
playground/               ← the guide app (npm run dev); reads docs/, tokens/ and src/ live
docs/                     ← overview, brand, how to use, specs, patterns, UX copy, audit, component guidelines
```

## Using it in an app

```jsx
import 'ai-design-system/styles.css';
import { Button, PromptComposer, ChatThread } from 'ai-design-system';

export default function Chat() {
  return (
    <div data-theme="light" style={{ maxWidth: 760, margin: '0 auto' }}>
      <ChatThread messages={[{ sender: 'user', text: 'Summarize this report.' }]} typing />
      <PromptComposer model="Fast" onSend={(text) => console.log(text)} />
    </div>
  );
}
```

Set `data-theme="dark"` on any container to switch it. Without a `data-theme`, the tokens follow the OS setting.

**Tailwind:** `presets: [require('ai-design-system/tailwind')]`, and import `ai-design-system/tokens.css`.
**Tokens in JS/TS:** `import { color, spacing } from 'ai-design-system/tokens'`.

## Changing the system

1. Edit `tokens/tokens.json`, then run `npm run tokens`.
2. Use only tokens in `src/styles/components.css` (`var(--bg-brand)`, `var(--space-lg)`…).
3. Run `npm run audit` before committing. It exits with an error if anything fails.
4. Update the component's guidelines in `docs/10-components.md` and its spec in `docs/04-specs-components.md`.

## Where else it lives

- **Claude design system page:** https://claude.ai/artifact/N8kgKbW92mELJnZDvWu8Y7
- **Docs site with side menu:** https://claude.ai/artifact/BHevbLiMQiQVdHnB1p8LP2
- **Figma file:** "Personal Design System" in Emilija's team (rename it to AI Design System). Variables and styles match these tokens; components are partly synced.

Token names map to Figma variables with `/` instead of the first `-`: `bg-brand` ↔ `color/bg/brand`, `space-lg` ↔ `spacing/lg`. Every Figma variable's code syntax is set to the matching CSS variable.
