# Patterns: Error messaging

Errors should explain what happened, why if it helps, and what to do next, without blaming anyone. See the live **Error patterns** in Components.

## Pick the right place

| Situation | Pattern | Component |
|---|---|---|
| One field is invalid | Inline, under the field | Input / Select / Checkbox `error` |
| A form has 2+ errors | Summary at the top + inline errors | Alert `danger` + field errors |
| An AI reply failed | Inline in the conversation, with a retry | Alert `danger` + **Regenerate** button |
| A background action failed (save, copy) | Brief, with a retry if possible | Toast `danger` + action |
| A whole page or panel couldn't load | Replace the content area | Empty state with warning icon + **Try again** |
| A limit or condition the user should know about | Persistent, above the content | Alert `warning` |
| Offline / connection lost | Persistent until resolved | Alert `warning` at the top of the screen |

## Writing an error message

1. **Say what happened**, in plain words: "Couldn't read the file."
2. **Say what to do:** "Upload a PDF, DOCX or TXT under 20 MB."
3. **Add why only if it helps them fix it.**

| Do | Don't |
|---|---|
| "Enter an email like name@example.com" | "Invalid input" |
| "Couldn't connect. Check your internet and try again." | "Error 503: Service Unavailable" |
| "This file is over 20 MB. Upload a smaller file." | "Oops! Something went wrong 😕" |
| "You've used all 50 Deep model messages this month. They reset Dec 1." | "Limit exceeded" |

## Rules

- **Never blame the user** ("You entered…") or the AI ("The AI failed…"). Describe the problem, not the culprit.
- **Keep their work.** A failed send keeps the message in the composer; a failed save keeps the form filled in.
- **Offer a retry** for anything that might work the second time (network, generation).
- **Don't stack errors.** One Alert per area; group several issues into one summary.
- **Use the right severity.** `danger` stops the task; `warning` lets them continue. Don't use red for things that aren't errors.
- **Announce errors to screen readers.** Alerts with `tone="danger"` use `role="alert"`; field errors set `aria-invalid`.
- **Error codes** go in a secondary line or a "Details" disclosure, never as the headline.
