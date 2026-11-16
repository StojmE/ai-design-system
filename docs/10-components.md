# Components

Guidelines and specs for every component. Live previews: `npm run dev`.

---

## Button

`Button` · Actions

Buttons trigger actions in four styles and two sizes. Buttons trigger actions. Use **primary** for the one main action on a view, **secondary** for supporting actions, **ghost** for low-emphasis actions in toolbars and lists, and **destructive** for delete or remove.

- Sizes: `medium` (40px, default) and `small` (32px, inside cards and dense rows).
- Labels start with a verb, in sentence case: "Generate with AI", "Save".
- `icon` adds a 16px leading icon. Use `sparkle` for actions the AI performs.
- Disabled buttons use `bg-disabled` and `text-disabled`. Prefer explaining why an action is unavailable over disabling silently.

### Specs

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

---

## Icon button

`IconButton` · Actions

Icon-only button for toolbars and message actions. Use it where space is tight and the icon is well known (copy, attach, close). Always pass `label`: it becomes the accessible name and the hover title.

- Variants: `ghost` (default), `secondary`, `primary` (the composer's Send button).
- Sizes: 40px (medium) and 32px (`small`). `active` marks a toggled state, like a selected thumbs-up.

### Specs

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

---

## Link

`Link` · Actions

Inline text link. Use it inside text to go somewhere; use a Button to do something. `external` adds an arrow and opens in a new tab.

- `text-brand`, semibold, underlined. `subtle` uses `text-primary` for dense footers.

### Specs

| Property | Spec |
|---|---|
| Type | inherits size; SemiBold |
| Color | `text-brand` (Subtle: `text-primary`, regular weight) |
| Underline | 35% opacity, 3px offset → 100% on hover |
| Focus | `focus-ring`, `radius-sm` |
| External | 12px external-link icon, 3px gap, opens new tab |

---

## Checkbox

`Checkbox` · Forms

Checkbox for multi-select options and consents. Checkbox for multi-select options and consents. Clicking the label toggles it.

- 16px box, `radius-sm`; checked fills with `bg-brand` and a white check.
- Use a Toggle instead when the change takes effect immediately.

### Specs

| Property | Spec |
|---|---|
| Box | 16×16, `radius-sm` 2px, 1px `border-strong`, `bg-default` |
| Checked | `bg-selected` fill, 12px check icon, 2px stroke, `icon-on-brand` |
| Label | `body-small` 14/20, gap `space-sm` 8px |
| Hover | Box border `border-focus`; checked box `bg-brand-hover` |
| Error | Box border `border-danger`; message `caption` in `text-danger`, aligned with the label |
| Disabled | `bg-disabled`, `border-disabled`, label `text-disabled` |
| Focus | `focus-ring` on the box |

---

## File dropzone

`FileDropzone` · Forms

Area for uploading files by dragging or browsing. Use it when uploading is the main task (adding knowledge to a project). In a chat, the composer's paperclip button is enough.

- Dashed `border-strong`; turns `bg-brand-subtle` with `border-focus` while a file is dragged over.
- The hint states allowed types and size limit.

### Specs

| Property | Spec |
|---|---|
| Padding | `space-xl` 24px |
| Border | 1.5px dashed `border-strong`; `radius-lg` 8px |
| Background | `bg-subtle` → drag-over `bg-brand-subtle` + `border-focus` |
| Icon | 20px upload in a 40px circle, `bg-default`, `icon-brand` |
| Type | Title `label-medium` · hint `caption` |

---

## Input

`Input` · Forms

Text field with label, helper text and optional icon. Text field with an optional label, helper text and leading icon. Show `error` text (it replaces the helper) when a value is invalid, and say how to fix it.

- Height 40px, `radius-md`, `border-strong`; focus adds `border-focus` and the `focus-ring` shadow.
- Placeholder text is an example, never a replacement for the label.
- Use the `search` icon for search fields and `sparkle` for prompt fields.

### Specs

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

---

## Radio group

`RadioGroup` · Forms

Choose exactly one option from a short list. Use it when all options should be visible at once (2 to 5 options). For longer lists use Select; for switching views use Segmented control.

- `horizontal` lays options in a row.
- The checked dot is a 5px `bg-brand` ring.

### Specs

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

---

## Select

`Select` · Forms

Dropdown trigger for choosing one option. Dropdown trigger for choosing one option from a list. Pair it with **Menu** for the open list.

- Shows the placeholder in `text-placeholder` until a value is chosen.
- When open, the chevron flips and the field takes the focus style.
- For fewer than four options, consider radio-style choices or Tabs instead.

### Specs

| Property | Spec |
|---|---|
| Anatomy | Label · trigger (value + chevron-down 16px) · helper |
| Size, radius, type, states | Same as Input |
| Open | `border-focus` + `focus-ring`; chevron rotates 180° |
| Placeholder | `text-placeholder` until a value is set |
| List | Use Menu, 4px below the trigger, same width |

---

## Slider

`Slider` · Forms

Pick a value from a range by dragging. Use it for settings where the exact number matters less than the feel, like creativity (temperature) or response length. Show the current value, and label the ends when they mean something.

- Track `bg-muted`, filled part `bg-brand`, white thumb with a brand ring.
- For precise numbers, pair it with an Input.

### Specs

| Property | Spec |
|---|---|
| Track | 6px tall, `radius-full`; filled `bg-selected`, rest `bg-muted` |
| Thumb | 18×18 white, 2px `bg-selected` ring, `shadow-sm` |
| Header | Label `label-medium` + value `label-medium` in `text-brand` |
| End labels | `caption` 12/16, `text-secondary` |
| Disabled | 50% opacity |

---

## Textarea

`Textarea` · Forms

Multi-line text field for longer answers, notes and system prompts. Same label, helper and error behavior as Input. It starts at 4 rows and the user can drag it taller.

- For chat input, use **Prompt composer** instead.

### Specs

| Property | Spec |
|---|---|
| Same as Input except | height grows; padding `space-sm` 8px / `space-md` 12px |
| Min height | 60px text area (4 rows by default) |
| Resize | vertical only |

---

## Toggle

`Toggle` · Forms

Switch for settings that apply immediately. Switch for settings that take effect immediately, like "Web search" or "Dark mode".

- Track `bg-strong` when off, `bg-brand` when on; the knob is white with `shadow-sm`.
- The label names the setting, not the state ("Web search", not "Turn on web search").

### Specs

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

---

## Breadcrumbs

`Breadcrumbs` · Navigation

Shows where a page sits in the hierarchy. Use it on pages two or more levels deep (Projects › Q4 planning › Files). The last item is the current page and isn't a link.

### Specs

| Property | Spec |
|---|---|
| Type | `body-small` 14/20 |
| Separator | 12px chevron-right, `icon-secondary`, gap `space-xs` |
| Links | `text-secondary` → hover underline `text-primary` |
| Current | `text-primary` SemiBold, not a link |

---

## Menu

`Menu` · Navigation

Floating list of options. Floating list of options, opened from a Select, a button, or a right-click. Fill it with **MenuItem**.

- `radius-lg`, `shadow-lg`, `border-default`, `space-xs` padding.
- A selected item gets `bg-brand-subtle`, `text-brand` and a trailing check.
- MenuItem also works as a sidebar row (see the recent chats list).

### Specs

| Property | Spec |
|---|---|
| Container | Width 256px default · padding `space-xs` 4px · item gap `space-2xs` 2px |
| Surface | `bg-default`, 1px `border-default`, `radius-lg` 8px, `shadow-lg` |
| Item | 36px tall, 0 `space-sm` padding, `radius-sm` 2px, `body-small` |
| Item states | Hover `bg-hover` · Focus `focus-ring` · Selected `bg-brand-subtle` + `text-brand` + trailing check · Disabled `text-disabled` |

---

## Nav item

`NavItem` · Navigation

A row in the app sidebar. Use it for top-level destinations (Chats, Projects, Files, Settings). The active item uses `bg-brand-subtle` and `text-brand`. An optional count shows unread or new items.

- For lists of individual chats, use Menu item.

### Specs

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

---

## Pagination

`Pagination` · Navigation

Move between pages of a long list. Use it under tables and lists that don't scroll forever. It shows the first, last and neighbouring pages, with an ellipsis for the rest.

### Specs

| Property | Spec |
|---|---|
| Page button | 32×32 min, `radius-md`, `label-medium` |
| Prev / next | Small Icon button (32px) |
| Current | `bg-brand-subtle`, `text-brand` |
| Gap | `space-2xs` 2px; ellipsis 24px |

---

## Segmented control

`SegmentedControl` · Navigation

Compact switch between two to four views or modes. Use it for mode switches inside a panel (Chat / Code, Day / Week). The selected segment lifts onto `bg-default` with `shadow-sm`.

- Sizes: medium (32px items) and `small` (24px).
- For page-level navigation, use Tabs.

### Specs

| Property | Spec |
|---|---|
| Container | `bg-muted`, padding & gap `space-2xs` 2px, `radius-md` 4px |
| Segment | Medium 32px tall, 0 `space-md` · Small 24px, 0 `space-sm` |
| Type | `label-medium` (Small: 12/16) |
| Selected | `bg-default` + `shadow-sm`, `text-primary` |
| Unselected | `text-secondary`, radius `radius-sm` |

---

## Stepper

`Stepper` · Navigation

Progress through a multi-step flow. Use it for setup and onboarding flows with three to five steps. Completed steps show a check; the current step is filled with `bg-brand`.

### Specs

| Property | Spec |
|---|---|
| Dot | 24×24 circle, 12px Bold number |
| Todo | 1px `border-strong`, `text-secondary` |
| Current | `bg-brand`, `text-on-brand`; label SemiBold `text-primary` |
| Done | `bg-brand-subtle` with 12px check; connector `border-brand` |
| Connector | 1px `border-default`, min 16px |

---

## Tabs

`Tabs` · Navigation

Switches between views of the same thing. Switches between views of the same thing (Chat, Files, Prompts). One row of tabs per area.

- `label-medium`; selected tab uses `text-primary` with a 2px `border-brand` underline, others `text-secondary`.
- Keep labels to one word where you can.

### Specs

| Property | Spec |
|---|---|
| Tab padding | `space-sm` 8px / `space-md` 12px |
| Type | `label-medium` 14/20 |
| Unselected | `text-secondary` → hover `text-primary` |
| Selected | `text-primary` + 2px `border-brand` underline |
| Focus | `focus-ring`, `radius-sm` |
| Disabled | `text-disabled`, not clickable |
| Row | 1px `border-default` bottom rule |

---

## Attachment chip

`AttachmentChip` · AI

A file attached to a message or project. Shows the file name, type and size, with a remove button. While uploading it shows progress; if the upload fails it turns red and says why.

- Sits above the composer before sending, and inside the message after.

### Specs

| Property | Spec |
|---|---|
| Size | 260px wide · padding `space-sm` 8px (right `space-xs`) |
| Radius | `radius-md` 4px; 1px `border-default` |
| File icon | 32×32 tile, `radius-sm`, `bg-brand-subtle`, `icon-brand` |
| Text | Name `label-medium` (truncates) · meta `caption` `text-secondary` |
| Uploading | 3px progress bar, `bg-selected` on `bg-muted` |
| Error | `border-danger`; icon tile and meta `text-danger` |

---

## Citation

`Citation` · AI

A numbered link to the source behind a claim. Place it right after the sentence it supports. Hovering shows the source title and site; clicking opens it.

- Numbers match the order in the Source list below the reply.

### Specs

| Property | Spec |
|---|---|
| Marker | 18px tall, min 18px wide, `radius-sm`, `label-xsmall` numbers |
| Colors | `bg-brand-subtle` + `text-brand` → hover `bg-brand` + `text-on-brand` |
| Tooltip | 220px wide, title SemiBold + source at 75% opacity |

---

## Code block

`CodeBlock` · AI

Formatted code with a language label and a Copy button. Use it in AI replies whenever the answer contains code, commands or config. It follows the theme (`bg-subtle`, `border-default`) and uses the `mono` font.

- Copy confirms with "Copied" for 1.5 seconds.

### Specs

| Property | Spec |
|---|---|
| Surface | `bg-subtle`, 1px `border-default`, `radius-lg` 8px |
| Header | `caption` SemiBold `text-secondary`; bottom rule `border-default`; Copy button 28px |
| Code | `code` style 13/20 mono; padding `space-md` / `space-lg`; scrolls sideways |

---

## Prompt composer

`PromptComposer` · AI

The message box at the bottom of a chat. Holds the text area, an attach button, an optional model picker and the Send button. While a reply streams, Send becomes **Stop**.

- Send stays disabled until there is text.
- Keep the disclaimer line under it; pass `disclaimer={false}` only where it already appears elsewhere.
- Max width 760px, centered in the conversation column.

### Specs

| Property | Spec |
|---|---|
| Container | Padding `space-md` 12px (bottom `space-sm`) · `radius-lg` 8px · 1px `border-strong` · `shadow-sm` |
| Focus | `border-focus` + `focus-ring` |
| Text | `body-small` 14/20, 2 rows, no resize |
| Bar | Attach (32px ghost) · model button (32px, `label-small`) · spacer · Send (40px primary Icon button) |
| Send | Disabled until text; becomes Stop (secondary) while generating |
| Disclaimer | `caption` `text-secondary`, centered, `space-sm` below |
| Max width | 760px in a chat column |

---

## Reasoning

`Reasoning` · AI

Collapsible view of how the AI worked through a question. Shows "Thinking…" with a spinner while the model reasons, then collapses to a one-line summary ("Thought for 12s") the user can expand.

- Collapsed by default once done; the answer is what matters.
- Body text is `text-secondary` so it reads as secondary to the reply.

### Specs

| Property | Spec |
|---|---|
| Rule | 2px `border-default` on the left; content inset `space-md` 12px |
| Header | `label-medium` `text-secondary`; lightbulb in `icon-brand` (spinner while active); chevron rotates when open |
| Body | `body-small` `text-secondary`, padding-top `space-sm` |

---

## Response actions

`ResponseActions` · AI

Copy, regenerate and feedback buttons under an AI reply. Place it directly under the AI message bubble, aligned with the bubble's left edge. Thumbs up and down toggle and are mutually exclusive.

- Show it on the latest reply always, and on older replies on hover.

### Specs

| Property | Spec |
|---|---|
| Buttons | 4 small ghost Icon buttons (32px): copy, refresh, thumbs-up, thumbs-down |
| Gap | `space-2xs` 2px |
| Selected feedback | `bg-brand-subtle` + `icon-brand` |
| Placement | Under the AI bubble, left aligned with it |

---

## Source list

`SourceList` · AI

The sources an AI reply used, as small cards. Show it under a reply that used web search or documents. Each card shows the number, site and title; the numbers match the Citations in the text.

### Specs

| Property | Spec |
|---|---|
| Card | 180px wide · padding `space-sm` / `space-md` · `radius-md` · 1px `border-default` |
| Content | Citation number + site (`caption`) · title `label-medium` 14/20, max 2 lines |
| Gap | `space-sm` 8px; label `label-small` `text-secondary` |

---

## Suggestion chip

`SuggestionChip` · AI

A tappable example prompt. Show three or four chips on an empty chat to help people start. Clicking a chip sends (or fills in) that prompt.

- Write them as the user would type them, under about 40 characters.
- The sparkle icon is the default; swap it for a more specific icon when it helps.

### Specs

| Property | Spec |
|---|---|
| Padding | `space-sm` 8px / `space-md` 12px |
| Radius | `radius-md` 4px |
| Surface | `bg-default`, 1px `border-default` → hover `bg-hover` + `border-strong` |
| Icon | 16px, `icon-brand`, gap `space-sm` |
| Type | `body-small` 14/20 |

---

## Typing indicator

`TypingIndicator` · AI

Shows that the assistant is working on a reply. Show it right after the user sends a message, until the first words of the reply stream in. Three dots pulse inside an AI bubble.

- Pass `text` ("Searching the web…") when the wait will be long or the step is meaningful.
- Respects reduced-motion settings.

### Specs

| Property | Spec |
|---|---|
| Layout | Same as an AI Chat message |
| Dots | 3 × 6px, `icon-secondary`, 4px gap |
| Motion | 1.2s loop, 150ms stagger, 3px lift; off with reduced motion |
| Role | status, "Assistant is typing" |

---

## Alert

`Alert` · Status

Inline message about the state of a page or section. Use it for information people need while they work: a limit reached, a file that couldn't be read, a successful import. It stays until dismissed or resolved.

- Tones: `info` (brand), `success`, `warning`, `danger`.
- Title says what happened; the second line says what to do.

### Specs

| Property | Spec |
|---|---|
| Padding | `space-md` 12px / `space-lg` 16px; icon gap `space-md` |
| Radius | `radius-md` 4px |
| Type | Title `label-medium` · body `body-small` `text-secondary` |
| Tones | Info `bg-brand-subtle` · Success, Warning, Danger `bg-*-subtle`; icon in matching `text-*` |

---

## Badge

`Badge` · Status

Short status or category label. Short status or category label, one or two words.

- `neutral` is the default. `brand` marks new or AI-related things ("Beta", "New").
- `success`, `warning` and `danger` are for status only, never decoration.

### Specs

| Property | Spec |
|---|---|
| Padding | `space-2xs` 2px / `space-sm` 8px |
| Radius | `radius-md` 4px |
| Type | `label-small` 12/16 |
| Tones | Neutral `bg-muted`/`text-secondary` · Brand `bg-brand-subtle`/`text-brand` · Success, Warning, Danger: `bg-*-subtle` / `text-*` |

---

## Progress bar

`ProgressBar` · Status

Shows how far along a longer task is. Use it for uploads, imports and long AI jobs. Show a label and percentage when the value is known; use `indeterminate` when it isn't.

- Track `bg-muted`, fill `bg-brand`, 6px tall, fully rounded.

### Specs

| Property | Spec |
|---|---|
| Track | 6px, `bg-muted`, `radius-full` |
| Fill | `bg-selected`; 200ms width transition |
| Label row | `label-small` `text-secondary`, gap `space-xs` |
| Indeterminate | 40% bar sliding, 1.4s |

---

## Skeleton

`Skeleton` · Status

Placeholder shapes while content loads. Match the layout of the content that's coming so the page doesn't jump. Prefer it over a spinner when loading a list or a card.

- `lines` makes a paragraph; `circle` makes an avatar.

### Specs

| Property | Spec |
|---|---|
| Fill | `bg-muted`, `radius-sm` (circle: `radius-full`) |
| Text lines | 12px tall, `space-sm` gap, last line 60% |
| Motion | Pulse 1.4s |

---

## Spinner

`Spinner` · Status

Indeterminate loading indicator. Use it for short waits inside a control or panel (under a few seconds). For AI replies use the Typing indicator; for long tasks with known progress use Progress bar.

- Sizes: `small` 16, medium 24, `large` 32.

### Specs

| Property | Spec |
|---|---|
| Sizes | Small 16 · Medium 24 · Large 32 |
| Stroke | 2px; `bg-brand` arc on `bg-brand-subtle` |
| Motion | 0.8s per turn |

---

## Toast

`Toast` · Status

Brief confirmation that floats over the page. Use it for quick feedback after an action ("Copied", "Chat deleted"). It disappears on its own after about 4 seconds; add an `action` such as Undo when the action can be reversed.

- Dark surface (`bg-inverse`) so it stands out in both themes.
- Stack at the bottom center, one at a time.

### Specs

| Property | Spec |
|---|---|
| Size | 320–420px wide |
| Padding | `space-md` 12px (left `space-lg`) |
| Radius | `radius-lg` 8px |
| Surface | `bg-inverse`, `text-inverse`, `shadow-lg` |
| Type | Title `label-medium` · body 80% opacity |
| Timing | Dismiss after ~4s; stays while hovered |

---

## Accordion

`Accordion` · Layout

Stacked sections that expand one at a time. Use it for FAQs and long settings pages where people need only one part at a time. Set `multiple` to let several stay open.

- Titles in `label-large`; body in `body-small`, `text-secondary`.

### Specs

| Property | Spec |
|---|---|
| Header | `label-large` 16/24, padding `space-lg` 16px vertical; chevron `icon-secondary` |
| Body | `body-small` `text-secondary`, padding-bottom `space-lg` |
| Dividers | 1px `border-default` top and between |

---

## Card

`Card` · Layout

Container for grouped content. Container for grouped content. **Outlined** (default) for lists and grids, **elevated** (`shadow-md`) for content that should stand out.

- Padding `space-xl`, gap `space-lg`, `radius-md`.
- Optional badge on top, title (`heading-h4`), description (`body-small`, `text-secondary`), then actions as small buttons.

### Specs

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

---

## Divider

`Divider` · Layout

A thin line that separates content. Use it between groups in menus, sidebars and long forms. A labeled divider ("Today", "or") separates chat history by date or alternative actions.

- `border-default`, 1px. `vertical` for toolbars.

### Specs

| Property | Spec |
|---|---|
| Line | 1px `border-default`; margin `space-sm` 8px |
| Labeled | `label-small` `text-secondary`, gap `space-md` |
| Vertical | 1px wide, min 20px tall |

---

## Empty state

`EmptyState` · Layout

What to show when there is nothing here yet. Explain what this place is for and offer the next step. For a new chat, pair it with Suggestion chips.

- Icon in a `bg-brand-subtle` circle, title in `heading-h4`, one-sentence description, one primary action.

### Specs

| Property | Spec |
|---|---|
| Width | max 400px, centered |
| Padding | `space-2xl` 32px / `space-xl` 24px |
| Icon | 24px in a 48px `bg-brand-subtle` circle, `icon-brand` |
| Type | Title `heading-h4` · description `body-small` `text-secondary` |
| Gap | `space-sm` 8px |

---

## Table

`Table` · Layout

Rows of structured data. Use it for lists people compare or scan: files, usage, team members. Keep columns few; right-align numbers.

- Header `bg-subtle`, `label-small`, `text-secondary`; rows separated by `border-default`, hover `bg-subtle`.
- Pass `render` on a column to put components (Badge, Button) in cells.

### Specs

| Property | Spec |
|---|---|
| Container | 1px `border-default`, `radius-md`; scrolls when needed |
| Header | `bg-subtle`, `label-small` `text-secondary`, padding `space-sm` / `space-lg` |
| Cell | Padding `space-md` / `space-lg`, `body-small`, tabular numbers |
| Rows | 1px `border-default` dividers; hover `bg-subtle` |

---

## Drawer

`Drawer` · Overlays

A panel that slides in from the edge of the screen. Use it for detail and settings that relate to the current page (chat settings, a source preview) without leaving it. Prefer a Modal for short confirmations.

- 400px wide by default, full height, `shadow-lg`. Header with title and close; optional footer actions.

### Specs

| Property | Spec |
|---|---|
| Width | 400px default, full height |
| Header / footer | Padding `space-lg` / `space-xl`, `border-default` rules |
| Body | Padding `space-xl` 24px, gap `space-xl`, scrolls |
| Surface | `bg-default`, `shadow-lg`, 1px edge border |

---

## Modal

`Modal` · Overlays

Dialog for focused tasks and confirmations. Dialog for focused tasks and confirmations. Use `destructive` for irreversible actions; its confirm button turns red and says exactly what happens ("Delete").

- 480px wide, `radius-lg`, `shadow-lg`, over a dark scrim.
- Title says the task or question; body explains consequences in one or two sentences.
- Cancel on the left, confirm on the right.

### Specs

| Property | Spec |
|---|---|
| Width | 480px (max 100%) |
| Padding | `space-xl` 24px; section gap `space-lg` 16px |
| Surface | `bg-default`, 1px `border-default`, `radius-lg` 8px, `shadow-lg` |
| Scrim | `bg-overlay` |
| Title | `heading-h4` + 16px close button |
| Footer | Right aligned, `space-sm` gap; Cancel then confirm |

---

## Tooltip

`Tooltip` · Overlays

A short label that appears on hover or focus. Use it to name icon-only buttons or add a brief hint. Keep it to a few words, never essential information.

- `bg-inverse` with `text-inverse`, `radius-md`, `caption` size.
- `placement`: `top` (default) or `bottom`.

### Specs

| Property | Spec |
|---|---|
| Padding | `space-xs` 4px / `space-sm` 8px |
| Radius | `radius-md` 4px |
| Surface | `bg-inverse`, `text-inverse` |
| Type | 12/16 Medium, single line |
| Offset | 6px from the trigger |
| Show | Hover or keyboard focus; 120ms fade |

---

## Avatar

`Avatar` · Identity

AI or user avatar. Shows who is speaking. The **AI** avatar is the sparkle on `bg-brand`; the **user** avatar shows initials on `bg-brand-subtle`.

- Sizes: `medium` (32px, chat) and `small` (24px, dense lists).
- Always round (`radius-full`).

### Specs

| Property | Spec |
|---|---|
| Sizes | Medium 32 · Small 24 |
| Shape | `radius-full` |
| AI | `bg-brand` with sparkle (18px / 14px), `icon-on-brand` |
| User | `bg-brand-subtle`, initials `text-brand` SemiBold (14px / 12px) |

---

## Chat message

`ChatMessage` · Identity

A single message in an AI conversation. A single message in an AI conversation. **AI** messages sit on the left in a neutral bubble (`bg-subtle`, `border-default`); **user** messages sit on the right on `bg-brand`.

- Bubbles fit their text up to 480px wide, then wrap.
- `attachment` puts a Card under the bubble (drafts, files, generated results).
- Keep the sender name on by default; hide it for consecutive messages from the same sender.

### Specs

| Property | Spec |
|---|---|
| Anatomy | Avatar (32px) · name · bubble · optional attachment |
| Avatar gap | `space-md` 12px |
| Name → bubble | `space-xs` 4px; name `label-small` `text-secondary` |
| Bubble | Padding `space-md` 12px / `space-lg` 16px · `radius-lg` 8px · max width 480px |
| Type | `body-small` 14/20 |
| AI | `bg-subtle` + 1px `border-default`, `text-primary`, left aligned |
| User | `bg-brand`, `text-on-brand`, right aligned |

---

## Icon

`Icon` · Foundations

Thirty-six 16px stroke icons including the AI sparkle, drawn with `currentColor`.

- **Actions:** plus, check, close, copy, refresh, trash, more, upload, paperclip, stop, search, settings, edit, archive, share, mic, menu
- **Direction:** arrow-left, arrow-right, chevron-down, chevron-right, chevron-left, external-link
- **Objects:** file, folder, message, home, lightbulb, user, bell, image
- **Feedback:** info, warning, thumbs-up, thumbs-down
- **AI:** sparkle (the AI mark)

1.5px stroke, round caps and joins; they take the text color of their parent. Pass `label` when an icon stands alone and carries meaning.

### Specs

| Property | Spec |
|---|---|
| Grid | 16×16 viewbox |
| Stroke | 1.5px, round caps and joins |
| Color | `currentColor` |
| Sizes used | 12 · 14 · 16 (default) · 18 · 20 · 22 · 24 |

---

## Kbd

`Kbd` · Foundations

A keyboard key or shortcut. Use it in tooltips, menus and help text to teach shortcuts. Pass `keys` for a combination.

### Specs

| Property | Spec |
|---|---|
| Size | 20px tall, min 20px wide, padding 0 5px |
| Border | 1px `border-strong` (2px bottom), `radius-sm` |
| Type | `label-xsmall` 11/14, `text-secondary` |
| Combination gap | 3px |

---

## Action sheet

`ActionSheet` · Mobile

A list of actions for the thing the user just pressed. Use it on touch screens for a long-press or the ••• button on a chat or message (Rename, Share, Delete). Destructive actions are red; Cancel sits apart at the bottom.

- Rows are 56px tall with 17px text, comfortable for thumbs.

### Specs

| Property | Spec |
|---|---|
| Inset | `space-sm` 8px from the screen edges |
| Groups | `bg-default`, `radius-xl` 16px; Cancel in its own group |
| Rows | Min 56px, 16/22 text, `text-brand`; destructive `text-danger`; Cancel SemiBold; pressed `bg-pressed` |
| Title | `caption` 12/16 `text-secondary`, centered |

---

## Bottom nav

`BottomNav` · Mobile

Tab bar for the main sections of a mobile app. Use three to five destinations, each with an icon and a one-word label. The active tab gets a `bg-brand-subtle` pill and `text-brand`. A red count badge shows new items.

- 64px tall plus the device's safe-area inset.

### Specs

| Property | Spec |
|---|---|
| Height | `size-bottom-nav` 64px + bottom safe area |
| Items | 3–5, equal width, min 44px tall |
| Icon | 22px in a 56×30 pill; active pill `bg-brand-subtle` |
| Label | `label-xsmall` 11/14 |
| Colors | Inactive `text-secondary` · active `text-brand` |
| Badge | 16px `bg-danger`, `label-xsmall`, 2px `bg-default` ring |

---

## Bottom sheet

`BottomSheet` · Mobile

A panel that slides up from the bottom of a mobile screen. Use it on touch screens instead of a Modal or Drawer: model pickers, chat options, short forms. It has a drag handle, title, scrollable body and full-width actions (48px tall).

- Top corners 16px; sits over a dark scrim.

### Specs

| Property | Spec |
|---|---|
| Width | Full screen width; max 90% height |
| Radius | `radius-xl` 16px, top corners |
| Padding | `space-sm` top · `space-lg` sides · `space-lg` + safe area bottom |
| Handle | 36×4, `bg-strong`, centered |
| Title | 18/26 SemiBold; description `body-small` |
| Actions | Full width, 48px tall, 16px text, `space-sm` gap |
| Scrim | `bg-overlay` |

---

## FAB

`Fab` · Mobile

Floating button for the main action on a mobile screen. Use one per screen, bottom right, for the most common action (New chat). The extended version adds a label when there's room.

- 56px, `radius-lg`, `bg-brand`, `shadow-lg`.

### Specs

| Property | Spec |
|---|---|
| Size | `size-fab` 56×56; extended: auto width, padding `space-lg` / `space-xl` |
| Radius | `radius-lg` 8px |
| Surface | `bg-brand`, `icon-on-brand`, `shadow-lg` |
| Icon | 22px, 2px stroke |
| Placement | 16px from bottom-right, above the Bottom nav |

---

## Filter chips

`FilterChips` · Mobile

A row of chips for filtering a list. Use them above lists and search results. Single-select by default; `multiple` lets several be on, each showing a check. The row scrolls sideways on small screens.

- 36px tall with a 44px tap area; fully rounded so they read as filters, not buttons.

### Specs

| Property | Spec |
|---|---|
| Chip | 36px tall (44px tap area), 0 `space-lg`, `radius-full` |
| Type | `label-medium` 14/20 |
| Off | `bg-default`, 1px `border-strong` |
| On | `bg-brand-subtle`, `border-brand`, `text-brand`; check icon when multi-select |
| Row | `space-sm` gap, scrolls sideways, no scrollbar |

---

## List item

`ListItem` · Mobile

A full-width row for touch lists and settings. Rows are 56px tall (72px with a subtitle) so they're easy to tap. Lead with an icon or avatar; end with a value, a chevron, a Toggle, or any element via `trailing`. Wrap rows in a `.ai-list` container to group them with dividers.

- Body text is 16px on touch screens.

### Specs

| Property | Spec |
|---|---|
| Height | `size-row` 56px · with subtitle `size-row-2` 72px |
| Padding | `space-sm` / `space-lg`; gap `space-md` 12px |
| Leading icon | 36×36 tile, `radius-md`, `bg-muted` (brand / danger tones) |
| Type | Title 16/22 · subtitle 14/20 `text-secondary` · value 16/22 `text-secondary` |
| Pressed | `bg-pressed` |
| Group | `.ai-list`: `radius-lg`, 1px `border-default`, dividers between rows |

---

## Mobile composer

`MobileComposer` · Mobile

The message box for mobile chat. A plus button for attachments, a rounded text field that grows with the message, and one trailing button: the mic when empty, Send once there's text, Stop while the AI is replying. All buttons are 44px.

- 16px text so phones don't zoom in on focus.

### Specs

| Property | Spec |
|---|---|
| Padding | `space-sm` 8px |
| Plus | 40px circle, `bg-muted` |
| Field | Min 44px, `radius-full`, 1px `border-strong`, padding 10px / `space-lg`; 16/22 text, grows to 120px |
| Trailing | 44px: mic (empty) · Send `bg-brand` (text) · Stop `bg-inverse` (generating) |

---

## Search bar

`SearchBar` · Mobile

Search field for mobile screens. A 44px rounded field on `bg-muted`. When focused it shows a Cancel button; a clear button appears once there's text.

- 16px text so phones don't zoom in on focus.

### Specs

| Property | Spec |
|---|---|
| Field | `size-touch` 44px, `radius-lg` 8px, `bg-subtle` + 1px `border-strong`, 0 `space-md` |
| Text | 16/22 (no zoom on iOS) |
| Focused | `bg-default`, `border-focus`, `focus-ring`; Cancel appears (16px `text-brand`) |
| Clear | 20px circle, `bg-strong`; 44px tap area |

---

## Swipe row

`SwipeRow` · Mobile

A row that reveals actions when swiped left. Wrap any row (usually a Conversation item) to let people swipe left for Archive and Delete. Release past halfway to keep it open. Always offer the same actions in an Action sheet too, since swiping isn't discoverable.

- Try it: drag the rows in the preview.

### Specs

| Property | Spec |
|---|---|
| Action width | 80px each |
| Actions | Neutral `bg-strong` · destructive `bg-danger` + `text-on-brand`; 20px icon over 12/16 label |
| Behavior | Snaps open past half the actions width; 200ms ease-out |
| Gesture | Horizontal pan only; page still scrolls vertically |

---

## Top app bar

`TopAppBar` · Mobile

The bar at the top of a mobile screen. Holds a back or menu button, the screen title (centered, with an optional subtitle such as the model name) and up to two action icons. Every button is a 44px (`size-touch`) tap target.

- `large` puts a big title under the bar for top-level screens (Chats, Settings).

### Specs

| Property | Spec |
|---|---|
| Height | `size-bar` 56px; side padding `space-xs` 4px |
| Buttons | 44×44 (`size-touch`), 20px icons, round |
| Title | 16/22 SemiBold centered; subtitle `caption` `text-secondary` |
| Large title | 28/36 Bold below the bar, padding `space-md` |
| Surface | `bg-default` + 1px `border-default` bottom |

---

## Chat thread

`ChatThread` · Composed

A full conversation built from the AI components. Pass `messages` and it lays out Chat messages with their Reasoning, Source lists and attachments, adds Response actions under the latest AI reply, and shows the Typing indicator while waiting. `compact` drops avatars and indents for narrow screens.

### Specs

| Property | Spec |
|---|---|
| Message gap | `space-xl` 24px · compact `space-lg` 16px |
| Under-message gap | `space-sm` 8px (Reasoning, Source list, Response actions) |
| Indent | 44px to align with the bubble (none in compact) |
| Compact bubble | max 86% width, no avatars |

---

## Conversation item

`ConversationItem` · Composed

A chat in the conversations list. Shows the avatar, title, last-message preview and time. Unread chats get a brand dot and darker preview. 72px tall for touch; wrap in Swipe row for swipe actions.

### Specs

| Property | Spec |
|---|---|
| Height | `size-row-2` 72px; padding `space-md` / `space-lg` |
| Avatar | 32px |
| Type | Title 16/22 SemiBold · preview 14/20 `text-secondary` · time `caption` |
| Unread | 10px `bg-brand` dot; preview `text-primary`; time `text-brand` SemiBold |
| Active | `bg-brand-subtle` |

---

## Mobile chat screen

`MobileChatScreen` · Composed

A complete mobile chat screen in a phone frame. Shows how the touch components fit together: Top app bar, a compact Chat thread with Reasoning, and the Mobile composer. Pass your own `messages` or `children` to mock up other states.

### Specs

| Property | Spec |
|---|---|
| Frame | 375 × 760 viewport, 10px bezel, 44px corner radius |
| Status bar | 44px |
| Stack | Top app bar · thread (padding `space-lg`, scrolls) · Mobile composer |
| Home indicator | 120×5, 8px from bottom |

---

## Option cards

`OptionCards` · Composed

Large selectable cards for choosing one option. Use them when each option needs a description: model choice, plan, tone. Each card is a big tap target with an icon, title, optional badge and description, and a radio. `horizontal` lays them side by side on wide screens.

### Specs

| Property | Spec |
|---|---|
| Card | Padding `space-lg` 16px, `radius-lg`, 1px `border-strong`, min 56px tall |
| Selected | `bg-brand-subtle` + 2px `border-brand` (border + inset); radio `bg-selected` |
| Icon tile | 36×36, `radius-md`, `bg-muted` |
| Type | Title 16/22 SemiBold · description `body-small` |
| Gap | `space-sm` 8px between cards |

---

## Plan card

`PlanCard` · Composed

A pricing plan with features and a call to action. Show two or three side by side; mark one as `featured` (brand border and a "Most popular" flag). Features start with a check icon. `current` disables the button and labels it "Current plan".

### Specs

| Property | Spec |
|---|---|
| Padding | `space-xl` 24px; gap `space-lg` |
| Radius | `radius-lg` 8px |
| Featured | 2px `border-brand` + `shadow-md`; flag 12/18 SemiBold on `bg-brand` |
| Price | 36/44 Bold; period `body-small` `text-secondary` |
| Button | Full width, 44px |
| Features | 14/20 with 14px `icon-brand` checks |

---

## Sign in card

`SignInCard` · Composed

A sign-in form: provider button, email, legal note. Built from Avatar, Button, Divider, Input and Link. Controls are 44px tall and the email field uses 16px text, so it works on phones as is.

### Specs

| Property | Spec |
|---|---|
| Width | max 380px |
| Padding | `space-2xl` 32px / `space-xl` 24px; gap `space-lg` |
| Surface | `radius-lg`, 1px `border-default`, `shadow-md` |
| Controls | 44px tall; email text 16px |
| Title | 22/30 SemiBold; legal note `caption` centered |

---

## Usage meter

`UsageMeter` · Composed

How much of a plan’s limits have been used. Each row is a Progress bar with used / limit. Rows over 90% turn red so people notice before they hit the limit. Put an upgrade button in `action`.

### Specs

| Property | Spec |
|---|---|
| Container | Card: padding `space-xl`, `radius-md`, 1px `border-default` |
| Rows | Progress bar + `label-small` row; `space-lg` between |
| Warning | ≥ 90% fill turns `bg-danger`, numbers `text-danger` |

---

## Welcome screen

`WelcomeScreen` · Composed

The empty state of a new chat. A greeting, four Suggestion chips in a grid and the composer. Pass `mobile` to use the Mobile composer.

### Specs

| Property | Spec |
|---|---|
| Padding | `space-2xl` 32px / `space-lg` 16px; section gap `space-xl` |
| Title | 28/36 SemiBold |
| Suggestions | 2-column grid, max 560px, `space-sm` gap, chips min 44px |
| Composer | max 640px |

---

## Empty state patterns

`EmptyStatePatterns` · Patterns

The four kinds of empty state from *Patterns: Empty states*: first use, no results, new chat and all done. Each keeps to one sentence and at most one action.

### Specs

| Property | Spec |
|---|---|
| Kinds | First use · No results · New chat · All done |
| Component | Empty state (icon, `heading-h4`, one sentence, ≤ 1 action) |

---

## Error patterns

`ErrorPatterns` · Patterns

Where each kind of error goes, from *Patterns: Error messaging*: inline field errors, a form summary, a failed AI reply with Regenerate, a toast for background actions, a full-area error with Try again, and warnings for limits and offline.

### Specs

| Property | Spec |
|---|---|
| Placement | Field → inline · Form → summary Alert · AI reply → inline Alert + Regenerate · Background → Toast · Page → Empty state + Try again |
| Severity | `danger` stops the task · `warning` lets it continue |

---

## Form pattern

`FormPattern` · Patterns

A complete, working form that follows *Patterns: Forms*: labels above fields, the optional field marked, validation on submit with inline errors and an error summary for two or more, a saving state, and a success Alert. Press **Create project** with the fields empty to see the errors.

### Specs

| Property | Spec |
|---|---|
| Width | max 560px (preview 520px) |
| Field gap | `space-lg` 16px; groups `space-2xl` 32px |
| Validation | On submit, then on blur; inline errors + Alert summary for 2+ |
| Buttons | Right aligned: Secondary then Primary; saving shows Spinner + "Creating…" |
