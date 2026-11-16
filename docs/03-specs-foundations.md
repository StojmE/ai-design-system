# Specs: Foundations

Exact values for every token, the layout grid and the accessibility rules. Token names are the same in code (`var(--name)`) and match the Figma variables (with `/` in place of `-`, e.g. `color/bg/brand`).

## Color

Semantic tokens point at the primitive palette. Use semantic tokens in designs and code; the primitives only feed them.

### Background

| Token | Light | Dark | Use for |
|---|---|---|---|
| `bg-default` | #FFFFFF (`white`) | #0F172A (`gray-900`) | Page and card background. |
| `bg-subtle` | #F8FAFC (`gray-50`) | #162033 (`gray-850`) | Sidebars, AI message bubbles, quiet panels. |
| `bg-muted` | #F1F5F9 (`gray-100`) | #1E293B (`gray-800`) | Neutral badges, chips, muted fills. |
| `bg-hover` | #F1F5F9 (`gray-100`) | #1E293B (`gray-800`) | Hover fill for Secondary/Ghost buttons and menu rows. |
| `bg-pressed` | #E2E8F0 (`gray-200`) | #334155 (`gray-700`) | Pressed state of Secondary and Ghost buttons and tappable rows. |
| `bg-disabled` | #F1F5F9 (`gray-100`) | #1E293B (`gray-800`) | Disabled control fill; pair with text-disabled. |
| `bg-strong` | #8190A6 (`gray-450`) | #64748B (`gray-500`) | Toggle track when off, neutral swipe actions, sheet handles. Holds 3:1 against bg-default and bg-subtle (it marks a control). |
| `bg-inverse` | #0F172A (`gray-900`) | #F8FAFC (`gray-50`) | Tooltips and inverse surfaces; text-inverse on it. |
| `bg-overlay` | RGBA(15,23,42,0.45) (`rgba(15,23,42,0.45)`) | RGBA(0,0,0,0.6) (`rgba(0,0,0,0.6)`) | Scrim behind modals, drawers and sheets. |
| `bg-brand` | #4F46E5 (`indigo-600`) | #4F46E5 (`indigo-600`) | Primary buttons, selected states, user chat bubbles. text-on-brand on it. |
| `bg-brand-hover` | #4338CA (`indigo-700`) | #4338CA (`indigo-700`) | Hover state of bg-brand. |
| `bg-selected` | #4F46E5 (`indigo-600`) | #6366F1 (`indigo-500`) | Fill of selected controls: checked checkbox and radio, toggle on, slider and progress fill. Holds 3:1 against bg-default in both themes; icons on it use icon-on-brand. |
| `bg-brand-subtle` | #EEF2FF (`indigo-50`) | #1E1B4B (`indigo-950`) | Brand badge, selected menu row, avatar initials. |
| `bg-success-subtle` | #DCFCE7 (`green-100`) | #052E16 (`green-950`) | Success badge background; text-success on it. |
| `bg-warning-subtle` | #FEF3C7 (`amber-100`) | #451A03 (`amber-950`) | Warning badge background; text-warning on it. |
| `bg-danger` | #DC2626 (`red-600`) | #DC2626 (`red-600`) | Destructive buttons. text-on-brand on it. |
| `bg-danger-hover` | #B91C1C (`red-700`) | #B91C1C (`red-700`) | Hover state of bg-danger. |
| `bg-danger-subtle` | #FEE2E2 (`red-100`) | #450A0A (`red-950`) | Danger badge background; text-danger on it. |

### Text

| Token | Light | Dark | Use for |
|---|---|---|---|
| `text-primary` | #0F172A (`gray-900`) | #F8FAFC (`gray-50`) | Body and heading text on bg-default, bg-subtle, bg-muted. |
| `text-secondary` | #475569 (`gray-600`) | #94A3B8 (`gray-400`) | Descriptions, captions, helper text on bg-default and bg-subtle. |
| `text-placeholder` | #64748B (`gray-500`) | #94A3B8 (`gray-400`) | Input placeholders on bg-default and bg-subtle. Not on bg-muted (4.3:1). |
| `text-disabled` | #94A3B8 (`gray-400`) | #475569 (`gray-600`) | Disabled labels on bg-disabled. Not for readable content. |
| `text-on-brand` | #FFFFFF (`white`) | #FFFFFF (`white`) | Text and icons on bg-brand and bg-danger. |
| `text-inverse` | #FFFFFF (`white`) | #0F172A (`gray-900`) | Text on bg-inverse. |
| `text-brand` | #4F46E5 (`indigo-600`) | #A5B4FC (`indigo-300`) | Links, selected tab/menu text, brand badge text. |
| `text-success` | #15803D (`green-700`) | #4ADE80 (`green-400`) | Success text on bg-success-subtle. |
| `text-warning` | #B45309 (`amber-700`) | #FBBF24 (`amber-400`) | Warning text on bg-warning-subtle. |
| `text-danger` | #B91C1C (`red-700`) | #F87171 (`red-400`) | Error messages and danger badge text. |

### Border

| Token | Light | Dark | Use for |
|---|---|---|---|
| `border-default` | #E2E8F0 (`gray-200`) | #1E293B (`gray-800`) | Decorative separation only: card outlines, dividers, table rules. Below 3:1 by design; never the only cue that something is a control. |
| `border-strong` | #8190A6 (`gray-450`) | #64748B (`gray-500`) | Borders that identify a control: inputs, selects, checkboxes, radios, Secondary buttons. Holds 3:1 against bg-default and bg-subtle in both themes (WCAG 1.4.11). |
| `border-focus` | #6366F1 (`indigo-500`) | #818CF8 (`indigo-400`) | Focused input border; pair with the focus-ring shadow. |
| `border-brand` | #4F46E5 (`indigo-600`) | #818CF8 (`indigo-400`) | Selected tab underline, brand outlines. |
| `border-danger` | #EF4444 (`red-500`) | #F87171 (`red-400`) | Input in error state. |
| `border-disabled` | #E2E8F0 (`gray-200`) | #1E293B (`gray-800`) | Disabled control borders. |

### Icon

| Token | Light | Dark | Use for |
|---|---|---|---|
| `icon-primary` | #0F172A (`gray-900`) | #F8FAFC (`gray-50`) | Default icon color. |
| `icon-secondary` | #64748B (`gray-500`) | #94A3B8 (`gray-400`) | Icons inside inputs, close buttons, chevrons. |
| `icon-on-brand` | #FFFFFF (`white`) | #FFFFFF (`white`) | Icons on bg-brand. |
| `icon-brand` | #4F46E5 (`indigo-600`) | #A5B4FC (`indigo-300`) | Brand-colored icons, the sparkle mark. |

### Primitive palette

| Scale | Steps |
|---|---|
| indigo | 50 #EEF2FF · 100 #E0E7FF · 200 #C7D2FE · 300 #A5B4FC · 400 #818CF8 · 500 #6366F1 · 600 #4F46E5 · 700 #4338CA · 800 #3730A3 · 900 #312E81 · 950 #1E1B4B |
| gray | 50 #F8FAFC · 100 #F1F5F9 · 200 #E2E8F0 · 300 #CBD5E1 · 400 #94A3B8 · 450 #8190A6 · 500 #64748B · 600 #475569 · 700 #334155 · 800 #1E293B · 850 #162033 · 900 #0F172A |
| green | 50 #F0FDF4 · 100 #DCFCE7 · 400 #4ADE80 · 500 #22C55E · 600 #16A34A · 700 #15803D · 950 #052E16 |
| amber | 50 #FFFBEB · 100 #FEF3C7 · 400 #FBBF24 · 500 #F59E0B · 600 #D97706 · 700 #B45309 · 950 #451A03 |
| red | 50 #FEF2F2 · 100 #FEE2E2 · 400 #F87171 · 500 #EF4444 · 600 #DC2626 · 700 #B91C1C · 950 #450A0A |
| white / black | #FFFFFF · #000000 |

## Typography

Family: **Plus Jakarta Sans** (Google Fonts, weights 400 / 600 / 700) for everything except code, which uses the system monospace stack.

| Style | Size / line height | Weight | Letter spacing | Use for |
|---|---|---|---|---|
| `display` | 48px / 56px | 700 | -1px | Hero titles, empty-state headlines. |
| `heading-h1` | 36px / 44px | 700 | -0.5px | Page titles. |
| `heading-h2` | 28px / 36px | 600 | -0.25px | Section titles. |
| `heading-h3` | 22px / 30px | 600 | 0px | Subsections, modal titles on large dialogs. |
| `heading-h4` | 18px / 26px | 600 | 0px | Card titles, modal titles, app header. |
| `body-large` | 18px / 28px | 400 | 0px | Lead paragraphs. |
| `body-medium` | 16px / 24px | 400 | 0px | Default reading text. |
| `body-small` | 14px / 20px | 400 | 0px | UI text, chat messages, inputs, descriptions. |
| `label-large` | 16px / 24px | 600 | 0px | Large buttons, emphasized labels. |
| `label-medium` | 14px / 20px | 600 | 0px | Buttons, form labels, tabs. |
| `label-small` | 12px / 16px | 600 | 0.2px | Badges, sender names, overlines. |
| `label-xsmall` | 11px / 14px | 600 | 0.2px | Bottom nav labels, citation numbers, keyboard keys, count badges. The smallest text in the system. |
| `caption` | 12px / 16px | 400 | 0px | Helper text, timestamps, fine print. |
| `code` | 13px / 20px | 400 | 0px | Code blocks and inline code. |

Rules: one `heading-h1` per page; don't skip more than one heading level; UI text is `body-small`; long reading text is `body-medium`; never go below 12px.

## Spacing

A 4px grid. Use these for padding and gaps; never type raw numbers.

| Token | Value | Use for |
|---|---|---|
| `space-none` | 0px | No gap. |
| `space-2xs` | 2px | Toggle knob inset, badge vertical padding. |
| `space-xs` | 4px | Label-to-field gap, icon-to-text in tight rows. |
| `space-sm` | 8px | Gap between buttons, menu padding, small button icon gap. |
| `space-md` | 12px | Small button & input horizontal padding, chat avatar gap. |
| `space-lg` | 16px | Medium button padding, card gap, sidebar padding. |
| `space-xl` | 24px | Card & modal padding, gap between chat messages. |
| `space-2xl` | 32px | Section padding, conversation top/bottom padding. |
| `space-3xl` | 48px | Large section spacing. |
| `space-4xl` | 64px | Page-level spacing. |

## Radius

`radius-md` is the default for controls and cards.

| Token | Value | Use for |
|---|---|---|
| `radius-none` | 0px | Full-bleed panels. |
| `radius-sm` | 2px | Checkboxes, menu rows. |
| `radius-md` | 4px | The default: buttons, inputs, selects, badges, cards. |
| `radius-lg` | 8px | Modals, chat bubbles, menus. |
| `radius-xl` | 16px | Bottom sheets and action sheets (top corners). |
| `radius-full` | 9999px | Avatars, toggle tracks. |

## Touch sizes

Fixed sizes for phones and tablets.

| Token | Value | Use for |
|---|---|---|
| `size-touch` | 44px | Minimum tap target on touch screens (buttons, list rows, icons in bars). |
| `size-row` | 56px | Mobile list row height with one line of text. |
| `size-row-2` | 72px | Mobile list row height with title and subtitle. |
| `size-bar` | 56px | Mobile top app bar height. |
| `size-bottom-nav` | 64px | Mobile bottom navigation height, before the safe-area inset. |
| `size-fab` | 56px | Floating action button. |

## Elevation

| Token | Light | Dark | Use for |
|---|---|---|---|
| `shadow-sm` | `0 1px 2px rgba(15,23,42,0.06)` | `0 1px 2px rgba(0,0,0,0.4)` | Toggle knob, subtle lift. |
| `shadow-md` | `0 4px 8px -2px rgba(15,23,42,0.08), 0 2px 4px -2px rgba(15,23,42,0.06)` | `0 4px 8px -2px rgba(0,0,0,0.5), 0 2px 4px -2px rgba(0,0,0,0.4)` | Elevated cards. |
| `shadow-lg` | `0 12px 24px -4px rgba(15,23,42,0.10), 0 4px 8px -4px rgba(15,23,42,0.06)` | `0 12px 24px -4px rgba(0,0,0,0.6), 0 4px 8px -4px rgba(0,0,0,0.4)` | Menus, modals. |
| `focus-ring` | `0 0 0 2px #ffffff, 0 0 0 4px #6366f1` | `0 0 0 2px #0f172a, 0 0 0 4px #818cf8` | Keyboard focus on every interactive control: a 2px gap in the page color, then a solid 2px indigo ring (4.5:1 on white, 6:1 on dark). |
| `focus-ring-inset` | `inset 0 0 0 2px #6366f1` | `inset 0 0 0 2px #818cf8` | Keyboard focus for full-bleed rows and tabs where an outer ring would be clipped (list items, bottom nav, conversation rows). |

Most surfaces are flat and separated by `border-default`. Only floating things get shadows: menus, modals, drawers, sheets, toasts and the FAB.

## Layout

Guidance for laying out screens with the system.

| Breakpoint | Width | Layout |
|---|---|---|
| Mobile | < 640px | One column, 16px (`space-lg`) side margins. Top app bar + Bottom nav. Use the Mobile components. |
| Tablet | 640–1023px | One or two columns, 24px (`space-xl`) margins. Sidebar collapses behind a menu button. |
| Desktop | ≥ 1024px | 280px sidebar + main area. 32px (`space-2xl`) margins. |

| Container | Max width |
|---|---|
| Chat column (messages + composer) | 760px, centered |
| Reading text | 680px |
| Modal | 480px |
| Drawer | 400px |
| Sidebar | 280px |
| Sign-in card | 380px |

## Accessibility

- **Contrast.** Text meets 4.5:1 on its intended backgrounds in both themes (table below). Large text (24px+) and icons need 3:1.
- **Focus.** Every interactive element shows `focus-ring` (a 2px gap, then a solid 2px indigo ring: 4.5:1 on white, 6:1 on dark) on keyboard focus. Never remove it without a replacement.
- **Targets.** 32px minimum on desktop; 44px (`size-touch`) on touch screens.
- **Motion.** Animations are short (120–200ms) and turn off with the reduce-motion setting.
- **Labels.** Icon-only buttons always have an accessible label; form fields always have a visible label.

| Text | On | Light | Dark |
|---|---|---|---|
| `border-strong` | `bg-default` | 3.2:1 | 3.8:1 |
| `border-strong` | `bg-subtle` | 3.1:1 | 3.4:1 |
| `border-focus` | `bg-default` | 4.5:1 | 6.0:1 |
| `text-primary` | `bg-default` | 17.9:1 | 17.1:1 |
| `text-primary` | `bg-subtle` | 17.1:1 | 15.6:1 |
| `text-secondary` | `bg-default` | 7.6:1 | 7.0:1 |
| `text-secondary` | `bg-muted` | 6.9:1 | 5.7:1 |
| `text-placeholder` | `bg-default` | 4.8:1 | 7.0:1 |
| `text-on-brand` | `bg-brand` | 6.3:1 | 6.3:1 |
| `text-on-brand` | `bg-danger` | 4.8:1 | 4.8:1 |
| `text-brand` | `bg-default` | 6.3:1 | 9.0:1 |
| `text-brand` | `bg-brand-subtle` | 5.6:1 | 8.0:1 |
| `text-success` | `bg-success-subtle` | 4.6:1 | 8.6:1 |
| `text-warning` | `bg-warning-subtle` | 4.5:1 | 9.0:1 |
| `text-danger` | `bg-danger-subtle` | 5.3:1 | 5.8:1 |
| `text-inverse` | `bg-inverse` | 17.9:1 | 17.1:1 |

Control borders (`border-strong`) hold 3:1 against `bg-default` and `bg-subtle` in both themes. `border-default` is decorative only (dividers, card outlines) and is never the only cue that something is a control.
