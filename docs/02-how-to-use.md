# How to use

A practical guide to working with the AI Design System, whether you're designing a screen, building it in code, or asking Claude to make something with it.

## What's in the system

| Part | Where to find it | What it gives you |
|---|---|---|
| **Overview** | This page | Principles, writing rules, visual foundations, patterns for AI |
| **Tokens** | Colors, Typography, Spacing views | Every color (Light and Dark), text style, spacing step, radius, shadow and touch size |
| **Components** | Components view | 63 live, interactive previews with usage guidelines and specs |
| **Specs** | *Specs: Foundations* and *Specs: Components* sections | Exact measurements, token mappings, states, layout grid, contrast results |
| **Code tokens** | Files view, `code/` folder | `tokens.css`, `tokens.light.json` / `tokens.dark.json` (W3C format), `tailwind.config.js`, `tokens.ts` |
| **Components code** | Files view, `components/` folder | `bundle.css`, `bundle.js` and type definitions |
| **Figma file** | *AI Design System* in Emilija's team | The original variables, text styles and the first 13 components as Figma components |

## For designers

### 1. Start from a component, not a blank frame

Open the **Components** view, find the closest component, and read its guidelines and spec table. Most screens in an AI product are built from a handful of pieces:

- **Chat screens:** Prompt composer (or Mobile composer), Chat thread, Typing indicator, Response actions
- **Lists and settings:** List item, Conversation item, Toggle, Select, Option cards
- **Feedback:** Alert, Toast, Empty state, Skeleton
- **Navigation:** Nav item (desktop sidebar), Bottom nav and Top app bar (mobile), Tabs

### 2. Use tokens for every value

Pick colors, spacing and type from the token views, never by eye.

- **Color:** use the semantic tokens (`bg-*`, `text-*`, `border-*`, `icon-*`). If a role you need doesn't exist, ask for a new semantic token rather than using a primitive like `indigo-600` directly.
- **Spacing:** use the 4px steps (`space-xs` 4 · `space-sm` 8 · `space-md` 12 · `space-lg` 16 · `space-xl` 24 · `space-2xl` 32).
- **Type:** use a text style (`heading-h4`, `body-small`, `label-medium`…). UI text is `body-small`.
- **Corners:** `radius-md` (4px) by default; `radius-lg` (8px) only for floating surfaces and chat bubbles.

### 3. Check both themes

Every token has a **Light** and a **Dark** value (both are listed in *Specs: Foundations*), and every component uses only tokens. If your design uses only tokens too, dark mode comes for free; check the screens where you've placed custom colors or images.

### 4. Design for touch when it's a phone

On screens under 640px wide, use the **Mobile** components and the touch rules: 44px tap targets, 16px text in fields, overlays from the bottom (Bottom sheet, Action sheet), main actions within thumb reach.

### 5. Working in Figma

The Figma file has the same tokens as Figma variables, with slashes instead of dashes: `bg-brand` here is `color/bg/brand` in Figma, `space-lg` is `spacing/lg`. The file is on Figma's free Starter plan, so it has a Light mode only and 3 pages; the Dark values live here.

## For developers

### 1. Load the files

Download these from the **Files** view and include them in this order:

```html
<link rel="stylesheet" href="code/tokens.css">         <!-- all tokens as CSS variables, Light + Dark -->
<link rel="stylesheet" href="components/bundle.css">  <!-- component styles + Plus Jakarta Sans -->

<script src="https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.production.min.js"></script>
<script src="components/bundle.js"></script>          <!-- defines window.AIDesign -->
```

### 2. Set the theme

Put `data-theme` on the root element (or any container). Everything inside switches.

```html
<html data-theme="light">   <!-- or "dark" -->
```

### 3. Use components

```js
const { Button, PromptComposer, ChatThread } = window.AIDesign;
const h = React.createElement;

ReactDOM.createRoot(document.getElementById('app')).render(
  h('div', { style: { maxWidth: 760, margin: '0 auto' } },
    h(ChatThread, { messages: [
      { sender: 'user', text: 'Summarize this report.' },
      { sender: 'ai', text: 'Revenue grew 18%…', reasoning: 'Thought for 8 seconds' }
    ] }),
    h(PromptComposer, { model: 'Fast', onSend: (text) => console.log(text) })
  )
);
```

Every component's props are documented in `components/index.d.ts` and on its page. Components work uncontrolled (they keep their own state) or controlled (pass `value` and `onChange`).

### 4. Use tokens in your own CSS

When you build something new, read tokens as CSS variables. Never paste hex values.

```css
.my-panel {
  background: var(--bg-subtle);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
  padding: var(--space-xl);
  color: var(--text-primary);
}
.my-panel:focus-visible { box-shadow: var(--focus-ring); }
```

Text styles are available as classes too (`.heading-h4`, `.body-small`, `.label-medium`…).

### 5. Code tokens in other formats

The `code/` folder holds the same tokens for other toolchains. All are generated from `tokens.json`, so they always match.

| File | Use it for |
|---|---|
| `tokens.css` | Any web project. Primitives in `:root`, semantic tokens per theme (`[data-theme="light"]` / `[data-theme="dark"]`), follows the OS setting when no theme is set, plus text-style classes. |
| `tokens.light.json`, `tokens.dark.json` | Token tools that read the W3C Design Tokens format (Style Dictionary, Tokens Studio). Semantic colors reference the palette. |
| `tailwind.config.js` | A Tailwind preset. Load `tokens.css` first; then `bg-bg-brand`, `text-text-secondary`, `p-lg`, `rounded-md`, `shadow-focus-ring` and the text styles (`text-body-small`) all work, and switch with the theme. |
| `tokens.ts` | TypeScript and React Native: resolved hex values per theme, spacing, radius, typography, and a `cssVar()` helper. |

### 6. Not using React?

`components/bundle.css` works on its own. Copy the markup a component renders (inspect its preview) and keep the `ai-*` class names. You lose the built-in behavior (open/close, selection state) and add your own.

## Working with Claude

Because this system is saved in Claude, you can ask for things in plain words and Claude builds them from these tokens and components. For example:

- "Design a settings screen for the mobile app using the AI Design System."
- "Make a landing page for the product in our design system, dark theme."
- "Add a Date picker component that matches the system."
- "Change the brand color to teal and check contrast in both themes."
- "Sync the new components to the Figma file." (needs Figma tool calls available on the plan)

When you ask for a change to the system itself, Claude updates the tokens, components, specs and this guide together, so they stay in step.

## Adding or changing things

1. **Check it doesn't exist.** Search the Components view; many needs are covered by a variant or a composition.
2. **Use existing tokens first.** Add a new token only for a new role, and give it a usage note.
3. **Cover every state:** default, hover, focus, disabled, error where it applies, Light and Dark, and touch if it'll be used on phones.
4. **Write the guidelines and specs** on the component page: what it's for, when not to use it, and the spec table.
5. **Check contrast** (4.5:1 for text, 3:1 for icons and large text) in both themes.

### Naming

- Tokens: lowercase with dashes, role first: `bg-brand-subtle`, `text-secondary`, `space-lg`.
- Components: PascalCase in code (`PromptComposer`), sentence case in docs ("Prompt composer").
- CSS classes: `ai-` prefix (`ai-btn`, `ai-composer`); states as `is-*` (`is-active`, `is-open`).

## Quick checklist before you ship a screen

- [ ] Only semantic tokens, no raw hex values or pixel spacing
- [ ] One primary button per view
- [ ] Looks right in Light and Dark
- [ ] Keyboard focus visible on everything interactive
- [ ] Touch screens: 44px targets, 16px field text
- [ ] Empty, loading and error states designed
- [ ] AI output is marked (sparkle or AI avatar) and the composer shows the disclaimer
