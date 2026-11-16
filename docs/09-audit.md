# Audit

Accessibility and consistency checks of the whole system, what was fixed, and the open questions that need a decision. Audited November 16, 2026, against WCAG 2.2 AA.

## Results at a glance

| Check | Result |
|---|---|
| Text contrast (4.5:1) on every intended background, Light and Dark | **Pass:** 104 pairs checked, 0 failures |
| Non-text contrast (3:1): control borders, focus ring, selected controls, icons | **Pass** after fixes |
| Visible keyboard focus on every interactive element | **Pass** after fixes (11 were missing) |
| Target size: 24px minimum (WCAG 2.5.8), 44px on touch components | **Pass** after fixes (4 close buttons were under 24px) |
| Reduced motion respected | **Pass**: typing dots, spinner, skeleton, progress |
| Status not shown by color alone | **Pass**: badges, alerts and usage meters always carry words or icons |
| Raw hex or rgba values in component styles | **Pass**: 0 (the scrim now uses `bg-overlay`) |
| Font sizes on the type scale | **Pass** after fixes (10, 13 and 17px removed; 11px became `label-xsmall`) |
| Corner radii from tokens | **Pass** after fixes (14px and 22px replaced; added `radius-xl`) |
| Every component has guidelines, live preview, specs and typed props | **Pass**: 63 components + 3 pattern pages |
| Every token has a usage note | **Pass** |

## What changed

| Issue | Before | After |
|---|---|---|
| Control borders too faint (inputs, selects, checkboxes, radios) | `gray-300`, 1.5:1 | New `gray-450`, **3.2:1** Light · `gray-500`, **3.8:1** Dark |
| Focus ring too faint | 3px pale indigo halo, 1.5:1 | 2px gap + 2px solid indigo, **4.5:1** Light · **6.0:1** Dark; new `focus-ring-inset` for full-bleed rows |
| Toggle track (off) and other strong fills | `gray-300`, 1.5:1 | `bg-strong` → `gray-450` / `gray-500`, **3.2–3.8:1** |
| Selected controls in Dark (checkbox, radio, toggle, slider, progress) | `indigo-600`, 2.8:1 | New `bg-selected` → `indigo-500` in Dark, **4.0:1** |
| Search field placeholder on gray fill | 4.3:1 | Field moved to `bg-subtle` + `border-strong`, **4.5:1** |
| Missing focus styles | 11 controls (sheet rows, close buttons, select trigger, code copy…) | All use `focus-ring` or `focus-ring-inset` |
| Small close buttons | 20–22px | 24px minimum; search clear has a 44px tap area |
| Pressed state borrowed a border color | `bg-strong` | New `bg-pressed` token |
| Off-scale type | 10, 11, 13, 17px | `label-xsmall` (11/14) added; others moved onto the scale |
| Off-scale radii | 14px, 22px | `radius-xl` (16px) and `radius-full` |
| Missing states | Hover/focus/disabled/error shown for only some components | State matrix on Button, Icon button, Input, Textarea, Select, Checkbox, Radio group, Toggle, Card, Tabs, Nav item, Menu, Link; error states added to Checkbox and Radio group |

## Accepted exceptions

- **Disabled text** (`text-disabled`) is below 4.5:1 on purpose; WCAG exempts inactive controls.
- **Decorative borders** (`border-default`) are below 3:1 on purpose; they never mark a control on their own.
- **Primary buttons in Dark** keep `indigo-600` (2.8:1 against the page) so white labels stay at 6.3:1; the label identifies the button, which WCAG allows.
- **The phone frame** in Mobile chat screen uses a 44px radius; it's a mockup, not UI.
- **Small spacing values** (2–7px) remain in about 25 places, mostly optical nudges inside small controls (badge padding, icon offsets). They're listed in the component specs.

## Open questions for you

These need a decision rather than a fix:

1. **Darker control borders.** Inputs and outlined buttons now have a visibly darker gray border to meet 3:1. Happy with the look, or should we try a 2px lighter border instead?
2. **Focus ring style.** The new ring is a solid indigo outline with a white gap. Keep it, or prefer a thicker 3px ring without the gap?
3. **Logo.** The system uses the AI sparkle and the name in type. Do you have a product name and logo to add?
4. **High-contrast theme.** Want a third theme with 7:1 text (WCAG AAA) for accessibility settings?
5. **Figma.** Variables and styles are in sync, but Figma's free plan stopped the component sync partway. Upgrade the team to Professional, or wait for the monthly reset, and Claude finishes it (see *Sync status*).

## Sync status

| Target | Status |
|---|---|
| Claude design system (this page) | Up to date |
| Docs site with side menu | Rebuilt with every change in this audit |
| Code tokens (CSS, JSON, Tailwind, TypeScript) | Exported; see *Code tokens* in How to use and the docs site |
| Figma file | **Partly synced** (Figma's Starter plan allows only a few Claude edits per month). Done: all variables (new `gray-450`, `bg-selected`, `bg-pressed`, `bg-overlay`, Size collection, `radius-xl`), Focus ring styles, Label/XSmall and Code text styles, code names matching the code tokens; Button Focus + Pressed, Select Hover/Focus/Error, Menu item Focus/Disabled. Still to do: hide the leading icon on Button variants (it shows by default), state variants for Checkbox, Toggle and Tab, and the 50 components added after the first 13 |

## How to re-run

Ask Claude: "Run the accessibility and consistency audit on the AI Design System." The audit recomputes every contrast pair from `tokens.json` in both themes and scans `components/bundle.css` for missing focus styles, raw colors, off-scale type and radii.
