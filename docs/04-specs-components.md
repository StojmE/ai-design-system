# Specs: Components

Measurements, typography, colors and states for every component. Values name the tokens they use; pixel values are given where it helps. The same table appears at the bottom of each component's page.

Common rules:

- **Focus:** all interactive components show `focus-ring` on keyboard focus.
- **Disabled:** `bg-disabled` + `text-disabled`, no hover, `not-allowed` cursor.
- **Transitions:** 120–200ms on color, border and transform.
- **Font:** Plus Jakarta Sans throughout; code uses the system monospace stack.

## Actions

### Button

| Property | Spec |
|---|---|
| Anatomy | Container · optional leading icon (16px) · label |
| Height | Medium 40px · Small 32px |
| Padding (x) | Medium `space-lg` 16px · Small `space-md` 12px |
| Icon gap | Medium `space-sm` 8px · Small `space-xs` 4px |
| Radius | `radius-md` 4px |
| Type | `label-medium` 14/20 SemiBold |
| Primary | `bg-brand` → hover `bg-brand-hover`; text `text-on-brand` |
| Secondary | `bg-default` + 1px `border-strong` → hover `bg-hover`; text `text-primary` |
| Ghost | transparent → hover `bg-hover`; text `text-primary` |
| Destructive | `bg-danger` → hover `bg-danger-hover`; text `text-on-brand` |
| Disabled | `bg-disabled`, text `text-disabled` (Ghost stays transparent) |
| Pressed | Primary `indigo-800` · Secondary and Ghost `bg-pressed` |
| Focus | `focus-ring`: 2px gap + 2px indigo ring |
| Min width | none; label never wraps |

### Icon button

| Property | Spec |
|---|---|
| Size | Medium 40×40 · Small 32×32 |
| Icon | 16px |
| Radius | `radius-md` 4px |
| Ghost | `icon-secondary` → hover `bg-hover` + `icon-primary`; active `bg-brand-subtle` + `icon-brand` |
| Secondary | `bg-default` + 1px `border-strong`, `icon-primary` |
| Primary | `bg-brand`, `icon-on-brand` |
| Disabled | `bg-disabled`, `text-disabled` |
| Focus | `focus-ring` |
| Accessibility | `label` is required: sets aria-label and title |

### Link

| Property | Spec |
|---|---|
| Type | inherits size; SemiBold |
| Color | `text-brand` (Subtle: `text-primary`, regular weight) |
| Underline | 35% opacity, 3px offset → 100% on hover |
| Focus | `focus-ring`, `radius-sm` |
| External | 12px external-link icon, 3px gap, opens new tab |

## Forms

### Input

| Property | Spec |
|---|---|
| Anatomy | Label · field (optional 16px icon + text) · helper or error |
| Field height | 40px |
| Field padding | 0 `space-md` 12px; icon gap `space-sm` 8px |
| Label → field gap | `space-xs` 4px |
| Radius | `radius-md` 4px |
| Type | Label `label-medium` · value `body-small` 14/20 · helper `caption` 12/16 |
| Default | `bg-default`, 1px `border-strong`, placeholder `text-placeholder` |
| Hover / Focus | `border-focus`; focus adds `focus-ring` |
| Error | `border-danger`; helper text `text-danger` |
| Disabled | `bg-disabled`, `border-disabled`, all text `text-disabled` |

### Textarea

| Property | Spec |
|---|---|
| Same as Input except | height grows; padding `space-sm` 8px / `space-md` 12px |
| Min height | 60px text area (4 rows by default) |
| Resize | vertical only |

### Select

| Property | Spec |
|---|---|
| Anatomy | Label · trigger (value + chevron-down 16px) · helper |
| Size, radius, type, states | Same as Input |
| Open | `border-focus` + `focus-ring`; chevron rotates 180° |
| Placeholder | `text-placeholder` until a value is set |
| List | Use Menu, 4px below the trigger, same width |

### Checkbox

| Property | Spec |
|---|---|
| Box | 16×16, `radius-sm` 2px, 1px `border-strong`, `bg-default` |
| Checked | `bg-selected` fill, 12px check icon, 2px stroke, `icon-on-brand` |
| Label | `body-small` 14/20, gap `space-sm` 8px |
| Hover | Box border `border-focus`; checked box `bg-brand-hover` |
| Error | Box border `border-danger`; message `caption` in `text-danger`, aligned with the label |
| Disabled | `bg-disabled`, `border-disabled`, label `text-disabled` |
| Focus | `focus-ring` on the box |

### Radio group

| Property | Spec |
|---|---|
| Dot | 16×16 circle, 1px `border-strong` |
| Checked | 5px `bg-selected` ring |
| Option gap | Vertical `space-sm` 8px · Horizontal `space-lg` 16px |
| Label | `body-small` 14/20; group label `label-medium` |
| Hover | Dot border `border-focus` |
| Focus | `focus-ring` on the dot |
| Error | Dots `border-danger`; message `caption` `text-danger` under the group |
| Disabled | `bg-disabled`, `border-disabled`, `text-disabled` |

### Toggle

| Property | Spec |
|---|---|
| Track | 36×20, `radius-full`, padding `space-2xs` 2px |
| Knob | 16×16 white, `shadow-sm`; moves 16px |
| Off / On | Track `bg-strong` / `bg-selected` (both 3:1 against the page) |
| Label | `body-small` 14/20, gap `space-sm` 8px |
| Hover | Track `gray-450` (off) · `bg-brand-hover` (on) |
| Focus | `focus-ring` on the track |
| Disabled | Track `bg-disabled`; knob gets 1px `border-strong`, no shadow |
| Motion | 150ms |

### Slider

| Property | Spec |
|---|---|
| Track | 6px tall, `radius-full`; filled `bg-selected`, rest `bg-muted` |
| Thumb | 18×18 white, 2px `bg-selected` ring, `shadow-sm` |
| Header | Label `label-medium` + value `label-medium` in `text-brand` |
| End labels | `caption` 12/16, `text-secondary` |
| Disabled | 50% opacity |

### File dropzone

| Property | Spec |
|---|---|
| Padding | `space-xl` 24px |
| Border | 1.5px dashed `border-strong`; `radius-lg` 8px |
| Background | `bg-subtle` → drag-over `bg-brand-subtle` + `border-focus` |
| Icon | 20px upload in a 40px circle, `bg-default`, `icon-brand` |
| Type | Title `label-medium` · hint `caption` |

## Navigation

### Tabs

| Property | Spec |
|---|---|
| Tab padding | `space-sm` 8px / `space-md` 12px |
| Type | `label-medium` 14/20 |
| Unselected | `text-secondary` → hover `text-primary` |
| Selected | `text-primary` + 2px `border-brand` underline |
| Focus | `focus-ring`, `radius-sm` |
| Disabled | `text-disabled`, not clickable |
| Row | 1px `border-default` bottom rule |

### Segmented control

| Property | Spec |
|---|---|
| Container | `bg-muted`, padding & gap `space-2xs` 2px, `radius-md` 4px |
| Segment | Medium 32px tall, 0 `space-md` · Small 24px, 0 `space-sm` |
| Type | `label-medium` (Small: 12/16) |
| Selected | `bg-default` + `shadow-sm`, `text-primary` |
| Unselected | `text-secondary`, radius `radius-sm` |

### Menu

| Property | Spec |
|---|---|
| Container | Width 256px default · padding `space-xs` 4px · item gap `space-2xs` 2px |
| Surface | `bg-default`, 1px `border-default`, `radius-lg` 8px, `shadow-lg` |
| Item | 36px tall, 0 `space-sm` padding, `radius-sm` 2px, `body-small` |
| Item states | Hover `bg-hover` · Focus `focus-ring` · Selected `bg-brand-subtle` + `text-brand` + trailing check · Disabled `text-disabled` |

### Nav item

| Property | Spec |
|---|---|
| Height | 36px |
| Padding | 0 `space-sm` 8px; icon gap `space-sm` |
| Radius | `radius-md` 4px |
| Type | 14/20 Medium (active: SemiBold) |
| Default | `text-secondary`, `icon-secondary` → hover `bg-hover` |
| Active | `bg-brand-subtle`, `text-brand`, `icon-brand`; count pill `bg-brand` |
| Focus | `focus-ring` |
| Count | 12/16 SemiBold, `bg-muted`, `radius-full`, 0 6px |

### Breadcrumbs

| Property | Spec |
|---|---|
| Type | `body-small` 14/20 |
| Separator | 12px chevron-right, `icon-secondary`, gap `space-xs` |
| Links | `text-secondary` → hover underline `text-primary` |
| Current | `text-primary` SemiBold, not a link |

### Pagination

| Property | Spec |
|---|---|
| Page button | 32×32 min, `radius-md`, `label-medium` |
| Prev / next | Small Icon button (32px) |
| Current | `bg-brand-subtle`, `text-brand` |
| Gap | `space-2xs` 2px; ellipsis 24px |

### Stepper

| Property | Spec |
|---|---|
| Dot | 24×24 circle, 12px Bold number |
| Todo | 1px `border-strong`, `text-secondary` |
| Current | `bg-brand`, `text-on-brand`; label SemiBold `text-primary` |
| Done | `bg-brand-subtle` with 12px check; connector `border-brand` |
| Connector | 1px `border-default`, min 16px |

## AI

### Chat message

| Property | Spec |
|---|---|
| Anatomy | Avatar (32px) · name · bubble · optional attachment |
| Avatar gap | `space-md` 12px |
| Name → bubble | `space-xs` 4px; name `label-small` `text-secondary` |
| Bubble | Padding `space-md` 12px / `space-lg` 16px · `radius-lg` 8px · max width 480px |
| Type | `body-small` 14/20 |
| AI | `bg-subtle` + 1px `border-default`, `text-primary`, left aligned |
| User | `bg-brand`, `text-on-brand`, right aligned |

### Typing indicator

| Property | Spec |
|---|---|
| Layout | Same as an AI Chat message |
| Dots | 3 × 6px, `icon-secondary`, 4px gap |
| Motion | 1.2s loop, 150ms stagger, 3px lift; off with reduced motion |
| Role | status, "Assistant is typing" |

### Reasoning

| Property | Spec |
|---|---|
| Rule | 2px `border-default` on the left; content inset `space-md` 12px |
| Header | `label-medium` `text-secondary`; lightbulb in `icon-brand` (spinner while active); chevron rotates when open |
| Body | `body-small` `text-secondary`, padding-top `space-sm` |

### Response actions

| Property | Spec |
|---|---|
| Buttons | 4 small ghost Icon buttons (32px): copy, refresh, thumbs-up, thumbs-down |
| Gap | `space-2xs` 2px |
| Selected feedback | `bg-brand-subtle` + `icon-brand` |
| Placement | Under the AI bubble, left aligned with it |

### Suggestion chip

| Property | Spec |
|---|---|
| Padding | `space-sm` 8px / `space-md` 12px |
| Radius | `radius-md` 4px |
| Surface | `bg-default`, 1px `border-default` → hover `bg-hover` + `border-strong` |
| Icon | 16px, `icon-brand`, gap `space-sm` |
| Type | `body-small` 14/20 |

### Prompt composer

| Property | Spec |
|---|---|
| Container | Padding `space-md` 12px (bottom `space-sm`) · `radius-lg` 8px · 1px `border-strong` · `shadow-sm` |
| Focus | `border-focus` + `focus-ring` |
| Text | `body-small` 14/20, 2 rows, no resize |
| Bar | Attach (32px ghost) · model button (32px, `label-small`) · spacer · Send (40px primary Icon button) |
| Send | Disabled until text; becomes Stop (secondary) while generating |
| Disclaimer | `caption` `text-secondary`, centered, `space-sm` below |
| Max width | 760px in a chat column |

### Attachment chip

| Property | Spec |
|---|---|
| Size | 260px wide · padding `space-sm` 8px (right `space-xs`) |
| Radius | `radius-md` 4px; 1px `border-default` |
| File icon | 32×32 tile, `radius-sm`, `bg-brand-subtle`, `icon-brand` |
| Text | Name `label-medium` (truncates) · meta `caption` `text-secondary` |
| Uploading | 3px progress bar, `bg-selected` on `bg-muted` |
| Error | `border-danger`; icon tile and meta `text-danger` |

### Citation

| Property | Spec |
|---|---|
| Marker | 18px tall, min 18px wide, `radius-sm`, `label-xsmall` numbers |
| Colors | `bg-brand-subtle` + `text-brand` → hover `bg-brand` + `text-on-brand` |
| Tooltip | 220px wide, title SemiBold + source at 75% opacity |

### Source list

| Property | Spec |
|---|---|
| Card | 180px wide · padding `space-sm` / `space-md` · `radius-md` · 1px `border-default` |
| Content | Citation number + site (`caption`) · title `label-medium` 14/20, max 2 lines |
| Gap | `space-sm` 8px; label `label-small` `text-secondary` |

### Code block

| Property | Spec |
|---|---|
| Surface | `bg-subtle`, 1px `border-default`, `radius-lg` 8px |
| Header | `caption` SemiBold `text-secondary`; bottom rule `border-default`; Copy button 28px |
| Code | `code` style 13/20 mono; padding `space-md` / `space-lg`; scrolls sideways |

## Status

### Badge

| Property | Spec |
|---|---|
| Padding | `space-2xs` 2px / `space-sm` 8px |
| Radius | `radius-md` 4px |
| Type | `label-small` 12/16 |
| Tones | Neutral `bg-muted`/`text-secondary` · Brand `bg-brand-subtle`/`text-brand` · Success, Warning, Danger: `bg-*-subtle` / `text-*` |

### Alert

| Property | Spec |
|---|---|
| Padding | `space-md` 12px / `space-lg` 16px; icon gap `space-md` |
| Radius | `radius-md` 4px |
| Type | Title `label-medium` · body `body-small` `text-secondary` |
| Tones | Info `bg-brand-subtle` · Success, Warning, Danger `bg-*-subtle`; icon in matching `text-*` |

### Toast

| Property | Spec |
|---|---|
| Size | 320–420px wide |
| Padding | `space-md` 12px (left `space-lg`) |
| Radius | `radius-lg` 8px |
| Surface | `bg-inverse`, `text-inverse`, `shadow-lg` |
| Type | Title `label-medium` · body 80% opacity |
| Timing | Dismiss after ~4s; stays while hovered |

### Spinner

| Property | Spec |
|---|---|
| Sizes | Small 16 · Medium 24 · Large 32 |
| Stroke | 2px; `bg-brand` arc on `bg-brand-subtle` |
| Motion | 0.8s per turn |

### Progress bar

| Property | Spec |
|---|---|
| Track | 6px, `bg-muted`, `radius-full` |
| Fill | `bg-selected`; 200ms width transition |
| Label row | `label-small` `text-secondary`, gap `space-xs` |
| Indeterminate | 40% bar sliding, 1.4s |

### Skeleton

| Property | Spec |
|---|---|
| Fill | `bg-muted`, `radius-sm` (circle: `radius-full`) |
| Text lines | 12px tall, `space-sm` gap, last line 60% |
| Motion | Pulse 1.4s |

## Layout

### Card

| Property | Spec |
|---|---|
| Padding | `space-xl` 24px |
| Gap | `space-lg` 16px; title → description `space-xs` |
| Radius | `radius-md` 4px |
| Outlined | `bg-default` + 1px `border-default` |
| Elevated | `bg-default` + `shadow-md`, no border |
| Type | Title `heading-h4` 18/26 · description `body-small` `text-secondary` |
| Actions | Small buttons, `space-sm` gap |
| Interactive | Whole card is a button: hover `border-strong` + `shadow-sm` · focus `focus-ring` · selected 2px `border-brand` |

### Table

| Property | Spec |
|---|---|
| Container | 1px `border-default`, `radius-md`; scrolls when needed |
| Header | `bg-subtle`, `label-small` `text-secondary`, padding `space-sm` / `space-lg` |
| Cell | Padding `space-md` / `space-lg`, `body-small`, tabular numbers |
| Rows | 1px `border-default` dividers; hover `bg-subtle` |

### Accordion

| Property | Spec |
|---|---|
| Header | `label-large` 16/24, padding `space-lg` 16px vertical; chevron `icon-secondary` |
| Body | `body-small` `text-secondary`, padding-bottom `space-lg` |
| Dividers | 1px `border-default` top and between |

### Divider

| Property | Spec |
|---|---|
| Line | 1px `border-default`; margin `space-sm` 8px |
| Labeled | `label-small` `text-secondary`, gap `space-md` |
| Vertical | 1px wide, min 20px tall |

### Empty state

| Property | Spec |
|---|---|
| Width | max 400px, centered |
| Padding | `space-2xl` 32px / `space-xl` 24px |
| Icon | 24px in a 48px `bg-brand-subtle` circle, `icon-brand` |
| Type | Title `heading-h4` · description `body-small` `text-secondary` |
| Gap | `space-sm` 8px |

## Overlays

### Modal

| Property | Spec |
|---|---|
| Width | 480px (max 100%) |
| Padding | `space-xl` 24px; section gap `space-lg` 16px |
| Surface | `bg-default`, 1px `border-default`, `radius-lg` 8px, `shadow-lg` |
| Scrim | `bg-overlay` |
| Title | `heading-h4` + 16px close button |
| Footer | Right aligned, `space-sm` gap; Cancel then confirm |

### Drawer

| Property | Spec |
|---|---|
| Width | 400px default, full height |
| Header / footer | Padding `space-lg` / `space-xl`, `border-default` rules |
| Body | Padding `space-xl` 24px, gap `space-xl`, scrolls |
| Surface | `bg-default`, `shadow-lg`, 1px edge border |

### Tooltip

| Property | Spec |
|---|---|
| Padding | `space-xs` 4px / `space-sm` 8px |
| Radius | `radius-md` 4px |
| Surface | `bg-inverse`, `text-inverse` |
| Type | 12/16 Medium, single line |
| Offset | 6px from the trigger |
| Show | Hover or keyboard focus; 120ms fade |

## Identity

### Avatar

| Property | Spec |
|---|---|
| Sizes | Medium 32 · Small 24 |
| Shape | `radius-full` |
| AI | `bg-brand` with sparkle (18px / 14px), `icon-on-brand` |
| User | `bg-brand-subtle`, initials `text-brand` SemiBold (14px / 12px) |

### Icon

| Property | Spec |
|---|---|
| Grid | 16×16 viewbox |
| Stroke | 1.5px, round caps and joins |
| Color | `currentColor` |
| Sizes used | 12 · 14 · 16 (default) · 18 · 20 · 22 · 24 |

### Kbd

| Property | Spec |
|---|---|
| Size | 20px tall, min 20px wide, padding 0 5px |
| Border | 1px `border-strong` (2px bottom), `radius-sm` |
| Type | `label-xsmall` 11/14, `text-secondary` |
| Combination gap | 3px |

## Mobile

### Top app bar

| Property | Spec |
|---|---|
| Height | `size-bar` 56px; side padding `space-xs` 4px |
| Buttons | 44×44 (`size-touch`), 20px icons, round |
| Title | 16/22 SemiBold centered; subtitle `caption` `text-secondary` |
| Large title | 28/36 Bold below the bar, padding `space-md` |
| Surface | `bg-default` + 1px `border-default` bottom |

### Bottom nav

| Property | Spec |
|---|---|
| Height | `size-bottom-nav` 64px + bottom safe area |
| Items | 3–5, equal width, min 44px tall |
| Icon | 22px in a 56×30 pill; active pill `bg-brand-subtle` |
| Label | `label-xsmall` 11/14 |
| Colors | Inactive `text-secondary` · active `text-brand` |
| Badge | 16px `bg-danger`, `label-xsmall`, 2px `bg-default` ring |

### Bottom sheet

| Property | Spec |
|---|---|
| Width | Full screen width; max 90% height |
| Radius | `radius-xl` 16px, top corners |
| Padding | `space-sm` top · `space-lg` sides · `space-lg` + safe area bottom |
| Handle | 36×4, `bg-strong`, centered |
| Title | 18/26 SemiBold; description `body-small` |
| Actions | Full width, 48px tall, 16px text, `space-sm` gap |
| Scrim | `bg-overlay` |

### Action sheet

| Property | Spec |
|---|---|
| Inset | `space-sm` 8px from the screen edges |
| Groups | `bg-default`, `radius-xl` 16px; Cancel in its own group |
| Rows | Min 56px, 16/22 text, `text-brand`; destructive `text-danger`; Cancel SemiBold; pressed `bg-pressed` |
| Title | `caption` 12/16 `text-secondary`, centered |

### List item

| Property | Spec |
|---|---|
| Height | `size-row` 56px · with subtitle `size-row-2` 72px |
| Padding | `space-sm` / `space-lg`; gap `space-md` 12px |
| Leading icon | 36×36 tile, `radius-md`, `bg-muted` (brand / danger tones) |
| Type | Title 16/22 · subtitle 14/20 `text-secondary` · value 16/22 `text-secondary` |
| Pressed | `bg-pressed` |
| Group | `.ai-list`: `radius-lg`, 1px `border-default`, dividers between rows |

### Swipe row

| Property | Spec |
|---|---|
| Action width | 80px each |
| Actions | Neutral `bg-strong` · destructive `bg-danger` + `text-on-brand`; 20px icon over 12/16 label |
| Behavior | Snaps open past half the actions width; 200ms ease-out |
| Gesture | Horizontal pan only; page still scrolls vertically |

### FAB

| Property | Spec |
|---|---|
| Size | `size-fab` 56×56; extended: auto width, padding `space-lg` / `space-xl` |
| Radius | `radius-lg` 8px |
| Surface | `bg-brand`, `icon-on-brand`, `shadow-lg` |
| Icon | 22px, 2px stroke |
| Placement | 16px from bottom-right, above the Bottom nav |

### Filter chips

| Property | Spec |
|---|---|
| Chip | 36px tall (44px tap area), 0 `space-lg`, `radius-full` |
| Type | `label-medium` 14/20 |
| Off | `bg-default`, 1px `border-strong` |
| On | `bg-brand-subtle`, `border-brand`, `text-brand`; check icon when multi-select |
| Row | `space-sm` gap, scrolls sideways, no scrollbar |

### Search bar

| Property | Spec |
|---|---|
| Field | `size-touch` 44px, `radius-lg` 8px, `bg-subtle` + 1px `border-strong`, 0 `space-md` |
| Text | 16/22 (no zoom on iOS) |
| Focused | `bg-default`, `border-focus`, `focus-ring`; Cancel appears (16px `text-brand`) |
| Clear | 20px circle, `bg-strong`; 44px tap area |

### Mobile composer

| Property | Spec |
|---|---|
| Padding | `space-sm` 8px |
| Plus | 40px circle, `bg-muted` |
| Field | Min 44px, `radius-full`, 1px `border-strong`, padding 10px / `space-lg`; 16/22 text, grows to 120px |
| Trailing | 44px: mic (empty) · Send `bg-brand` (text) · Stop `bg-inverse` (generating) |

## Composed

### Chat thread

| Property | Spec |
|---|---|
| Message gap | `space-xl` 24px · compact `space-lg` 16px |
| Under-message gap | `space-sm` 8px (Reasoning, Source list, Response actions) |
| Indent | 44px to align with the bubble (none in compact) |
| Compact bubble | max 86% width, no avatars |

### Conversation item

| Property | Spec |
|---|---|
| Height | `size-row-2` 72px; padding `space-md` / `space-lg` |
| Avatar | 32px |
| Type | Title 16/22 SemiBold · preview 14/20 `text-secondary` · time `caption` |
| Unread | 10px `bg-brand` dot; preview `text-primary`; time `text-brand` SemiBold |
| Active | `bg-brand-subtle` |

### Option cards

| Property | Spec |
|---|---|
| Card | Padding `space-lg` 16px, `radius-lg`, 1px `border-strong`, min 56px tall |
| Selected | `bg-brand-subtle` + 2px `border-brand` (border + inset); radio `bg-selected` |
| Icon tile | 36×36, `radius-md`, `bg-muted` |
| Type | Title 16/22 SemiBold · description `body-small` |
| Gap | `space-sm` 8px between cards |

### Plan card

| Property | Spec |
|---|---|
| Padding | `space-xl` 24px; gap `space-lg` |
| Radius | `radius-lg` 8px |
| Featured | 2px `border-brand` + `shadow-md`; flag 12/18 SemiBold on `bg-brand` |
| Price | 36/44 Bold; period `body-small` `text-secondary` |
| Button | Full width, 44px |
| Features | 14/20 with 14px `icon-brand` checks |

### Usage meter

| Property | Spec |
|---|---|
| Container | Card: padding `space-xl`, `radius-md`, 1px `border-default` |
| Rows | Progress bar + `label-small` row; `space-lg` between |
| Warning | ≥ 90% fill turns `bg-danger`, numbers `text-danger` |

### Sign in card

| Property | Spec |
|---|---|
| Width | max 380px |
| Padding | `space-2xl` 32px / `space-xl` 24px; gap `space-lg` |
| Surface | `radius-lg`, 1px `border-default`, `shadow-md` |
| Controls | 44px tall; email text 16px |
| Title | 22/30 SemiBold; legal note `caption` centered |

### Welcome screen

| Property | Spec |
|---|---|
| Padding | `space-2xl` 32px / `space-lg` 16px; section gap `space-xl` |
| Title | 28/36 SemiBold |
| Suggestions | 2-column grid, max 560px, `space-sm` gap, chips min 44px |
| Composer | max 640px |

### Mobile chat screen

| Property | Spec |
|---|---|
| Frame | 375 × 760 viewport, 10px bezel, 44px corner radius |
| Status bar | 44px |
| Stack | Top app bar · thread (padding `space-lg`, scrolls) · Mobile composer |
| Home indicator | 120×5, 8px from bottom |

## Patterns

### Form pattern

| Property | Spec |
|---|---|
| Width | max 560px (preview 520px) |
| Field gap | `space-lg` 16px; groups `space-2xl` 32px |
| Validation | On submit, then on blur; inline errors + Alert summary for 2+ |
| Buttons | Right aligned: Secondary then Primary; saving shows Spinner + "Creating…" |

### Empty state patterns

| Property | Spec |
|---|---|
| Kinds | First use · No results · New chat · All done |
| Component | Empty state (icon, `heading-h4`, one sentence, ≤ 1 action) |

### Error patterns

| Property | Spec |
|---|---|
| Placement | Field → inline · Form → summary Alert · AI reply → inline Alert + Regenerate · Background → Toast · Page → Empty state + Try again |
| Severity | `danger` stops the task · `warning` lets it continue |
