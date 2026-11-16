# Patterns: Forms

How to build forms that are quick to fill in and hard to get wrong. See the live **Form pattern** in Components.

## Structure

- **One column.** Stack fields vertically, one per row. Put two fields side by side only when they're read together (first and last name, start and end date).
- **Labels above fields**, always visible. Never use the placeholder as the label; placeholders are examples ("e.g. Q4 planning").
- **Group related fields** under a short heading (`heading-h4`), with `space-2xl` between groups and `space-lg` between fields.
- **Order fields the way people think:** what, then how, then who.
- **Width follows the expected answer.** Full width for names and descriptions, narrower for codes and numbers. Max form width 560px.

## Required and optional

- Mark whichever is **rarer**. In most forms, most fields are required, so mark the optional ones: "Description (optional)".
- Don't use an asterisk alone; if you must, explain it once at the top.

## Choosing the right control

| Need | Use |
|---|---|
| Short free text | Input |
| Long text, instructions, prompts | Textarea |
| One of 2–5 options, all visible | Radio group (or Option cards when each needs a description) |
| One of many options | Select |
| Several independent yes/no choices | Checkboxes |
| A setting that applies immediately | Toggle (never inside a form with a Save button) |
| A number in a range where feel matters | Slider |
| Files | File dropzone, or the composer's attach button in chat |

## Validation

- **Validate on submit first**, then on blur for fields the user has already corrected. Don't show errors while someone is still typing.
- **Show the error under the field** (`error` prop): the field gets `border-danger` and the message appears in `text-danger`.
- **For two or more errors**, also show an Alert (`tone="danger"`) at the top: "Fix 2 fields to continue", with each problem listed. Move focus to it.
- **Keep what people typed.** Never clear a field because it's invalid.
- **Disable the submit button only while submitting**, not to signal invalid input; let people press it and then explain what's missing.

## Buttons

- Primary action on the right (desktop) or full width at the bottom (mobile), with a verb that names the result: "Create project", not "Submit".
- Secondary action ("Cancel") to its left as a Secondary button.
- While saving: keep the label, add a Spinner, and disable the button to prevent double submits.

## On touch screens

- Fields and buttons at least 44px tall, field text 16px.
- Use the right keyboard: `type="email"`, `type="tel"`, `inputmode="numeric"`.
- Put long option lists in a Bottom sheet instead of a Select.
