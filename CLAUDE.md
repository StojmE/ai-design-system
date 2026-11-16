# Working in this repo

This is the AI Design System: tokens, React components (no JSX in the library, React.createElement), docs.

## Rules
- `tokens/tokens.json` is the only source of token values. After changing it, run `npm run tokens`. Never edit files in `src/tokens/` by hand.
- `src/styles/components.css` uses CSS variables only. No hex/rgb values, no font sizes off the type scale, every interactive class needs a `:focus-visible` style using `var(--focus-ring)` (or `var(--focus-ring-inset)` for full-bleed rows).
- Class names: `ai-` prefix, states as `is-*`. Components: PascalCase; docs use sentence case ("Prompt composer").
- New component checklist: function + export in `src/components/index.js`, props interface in `index.d.ts`, styles in `components.css`, preview entry in `playground/previews.js` (it then appears in the guide, `npm run dev`), guidelines in `docs/10-components.md`, spec table in `docs/04-specs-components.md`. Cover default, hover, focus, disabled and error states, Light and Dark, and 44px targets for touch components.
- Run `npm run audit` and `npm run build` before finishing. Both must pass.
- UX copy follows `docs/08-ux-copy.md`: sentence case, verbs on buttons, no exclamation marks or emoji in UI.
