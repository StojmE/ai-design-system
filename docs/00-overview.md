# AI Design System

A clean, minimal foundation for designing AI products. Neutral slate grays carry the interface; one indigo accent marks the action that matters and anything the AI does. Corners are crisp (4px), type is Plus Jakarta Sans, and every value comes from a token.

This system mirrors the Figma file **AI Design System** (team: Emilija's team). Token and component names match, written with dashes here instead of slashes (`color/bg/brand` in Figma is `bg-brand` here). Unlike the Figma file, it has a **Dark** theme.

## Principles

- **Quiet by default.** Most of the screen is `bg-default` and `text-primary`. Color is a signal, not decoration.
- **One primary action per view.** `bg-brand` appears on the single most important button. Everything else is Secondary or Ghost.
- **The AI is indigo.** The sparkle mark, the AI avatar, and "Generate with AI" actions use the brand color, so people can always tell what the AI made.
- **Crisp, not round.** `radius-md` (4px) on controls and cards, `radius-lg` (8px) only on floating surfaces (menus, modals, chat bubbles), `radius-full` only on avatars and toggles.

## Content fundamentals

- Sentence case everywhere: "New chat", "Rename conversation", never "New Chat".
- Buttons start with a verb: "Generate with AI", "Save", "Delete". Avoid "OK" and "Submit".
- Speak plainly and briefly. Helper text says what to do: "Enter a valid email address", not "Invalid input".
- Be honest about the AI: "AI can make mistakes. Check important info." sits under every composer.
- No exclamation marks in UI chrome, and no emoji in components.

## Visual foundations

**Color.** Use semantic tokens only (`bg-*`, `text-*`, `border-*`, `icon-*`). The primitive scales (`indigo-*`, `gray-*`, `green-*`, `amber-*`, `red-*`) exist so semantic tokens can point at them. Don't use them directly. Status colors (`*-success`, `*-warning`, `*-danger`) appear only in badges, errors, and destructive actions.

**Themes.** Light is the default; Dark is the same token names with different values. Switch with `data-theme="dark"` on any ancestor.

**Type.** One UI family, Plus Jakarta Sans, loaded from Google Fonts (weights 400, 500, 600, 700). Use the text styles (`display`, `heading-h1`…`heading-h4`, `body-*`, `label-*`, `caption`). UI text is `body-small` (14/20); buttons and form labels are `label-medium`. Code uses the system monospace stack (`font-mono`, style `code` 13/20).

**Spacing.** A 4px grid: `space-xs` 4 · `space-sm` 8 · `space-md` 12 · `space-lg` 16 · `space-xl` 24 · `space-2xl` 32. Controls are 32px (small) or 40px (medium) tall.

**Elevation.** Flat by default; borders (`border-default`) separate things. `shadow-md` lifts an Elevated card, `shadow-lg` floats menus and modals.

**Focus and controls.** Keyboard focus is `focus-ring`: a 2px gap, then a solid 2px indigo ring (4.5:1 or better). Controls are outlined in `border-strong` and filled with `bg-selected` when on; both hold 3:1 against the page in both themes.

## Touch screens

On phones and tablets, use the **Mobile** components. They follow three rules:

- **Tap targets are at least 44px** (`size-touch`). List rows are 56px (`size-row`), or 72px with a subtitle (`size-row-2`).
- **Text in fields is 16px**, so phones don't zoom in when a field is focused. Body text in lists is 16px too.
- **Overlays come from the bottom.** Use Bottom sheet instead of Modal or Drawer, and Action sheet instead of Menu. Keep primary actions within thumb reach, at the bottom of the screen.

Swipe gestures are shortcuts, never the only way: every Swipe row action also appears in an Action sheet. Respect safe-area insets at the top and bottom of the screen.

## Iconography

Thirty-six 16px stroke icons, 1.5px stroke, round caps and joins, covering actions (plus, copy, trash, upload…), direction (chevrons, arrows), objects (file, folder, message, user, image), feedback (info, warning, thumbs) and **Sparkle**, the AI mark. The Icon component lists them all. They're drawn with `currentColor`, so they take the text color of their parent. Use them through the `Icon` component (`<Icon name="sparkle" />`). Pair one icon with a label; icon-only buttons need an `aria-label`.

## Components

63 components in ten groups, plus three live pattern pages (Form, Empty states, Errors):

- **Actions:** Button, Icon button, Link
- **Forms:** Input, Textarea, Select, Checkbox, Radio group, Toggle, Slider, File dropzone
- **Navigation:** Tabs, Segmented control, Menu, Nav item, Breadcrumbs, Pagination, Stepper
- **AI:** Chat message, Typing indicator, Reasoning, Response actions, Suggestion chip, Prompt composer, Attachment chip, Citation, Source list, Code block
- **Status:** Badge, Alert, Toast, Spinner, Progress bar, Skeleton
- **Layout:** Card, Table, Accordion, Divider, Empty state
- **Overlays:** Modal, Drawer, Tooltip
- **Mobile (touch):** Top app bar, Bottom nav, Bottom sheet, Action sheet, List item, Swipe row, FAB, Filter chips, Search bar, Mobile composer
- **Composed:** Chat thread, Conversation item, Option cards, Plan card, Usage meter, Sign-in card, Welcome screen, Mobile chat screen
- **Identity & foundations:** Avatar, Icon, Kbd

They live in `components/bundle.js` as `window.AIDesign` (React 18) and style themselves with `components/bundle.css`, which reads the tokens. Each component has guidelines next to its preview.

## Patterns for AI

- **Waiting:** show the Typing indicator as soon as a message is sent; swap it for the streaming reply. While streaming, the composer's Send turns into Stop.
- **Thinking:** for reasoning models, a Reasoning block above the reply shows "Thinking…", then collapses to "Thought for 12s".
- **Grounding:** put a Citation after each sourced claim and a Source list under the reply.
- **Files:** Attachment chips above the composer before sending; a File dropzone where uploading is the main task.
- **After a reply:** Response actions (copy, regenerate, thumbs) sit under the latest AI message.
- **Empty chat:** Empty state plus three or four Suggestion chips.
- **Errors:** an inline Alert in the conversation when a reply fails, with a Regenerate action; a Toast for quick confirmations like "Copied".

## Using this system

For reading the system page by page, use the **docs site** with a side menu: https://claude.ai/artifact/BHevbLiMQiQVdHnB1p8LP2

Start with **Brand attributes**, then **How to use**: it covers designing with the system, loading it in code (including the code tokens in `code/`), theming, working with Claude, and adding new components. The **Patterns** sections (Forms, Empty states, Error messaging) and **UX copy rules** say how to combine components and write for them; **Audit** lists the latest accessibility and consistency results. Exact measurements are in **Specs: Foundations** (tokens, layout grid, accessibility) and **Specs: Components** (every component's sizes, type, colors and states); each component page repeats its own spec table.
