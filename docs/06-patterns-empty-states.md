# Patterns: Empty states

An empty screen is a chance to explain the feature and get people started. See the live **Empty state patterns** in Components.

## The four kinds

| Kind | When | What to show | Example |
|---|---|---|---|
| **First use** | Nothing has been created yet | What this place is for + the first action | "No projects yet. Projects keep chats and files together." · **New project** |
| **New chat** | A conversation hasn't started | Greeting + 3–4 Suggestion chips + the composer | "How can I help today?" |
| **No results** | A search or filter matched nothing | What was searched + how to widen it | "No chats match 'roadmap'." · **Clear search** |
| **All done** | The user cleared everything | Quiet confirmation, no action needed | "You're all caught up." |

## Anatomy

Use the **Empty state** component: icon in a `bg-brand-subtle` circle, title (`heading-h4`), one sentence of description, and at most one primary action (plus an optional secondary link).

## Rules

- **Say what will appear here** and why it's useful, in one sentence.
- **Offer one clear next step.** If there's nothing to do, don't invent a button.
- **No-results states echo the query** and suggest a fix (check spelling, clear filters).
- **Keep the layout.** Show the empty state inside the area that will hold the content, with headers and navigation still in place.
- **Loading is not empty.** While data loads, show a Skeleton, never an empty state.
- **Errors are not empty.** If loading failed, use the error pattern instead.
