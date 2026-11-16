# Brand attributes

The AI Design System is for products where people work alongside an AI. Every token and component choice traces back to five attributes. When a decision isn't covered elsewhere, choose the option that fits these best.

## The five attributes

| Attribute | What it means | What it is not | How it shows up |
|---|---|---|---|
| **Clear** | People always know what's happening, what the AI did, and what to do next. | Clever, vague, decorative | One primary action per view. Sentence-case labels that start with a verb. Visible states for loading, thinking and errors. |
| **Calm** | The interface stays quiet so the content can speak. | Flashy, urgent, busy | Neutral slate surfaces, a single indigo accent, flat layers separated by borders, short 120–200ms motion. |
| **Trustworthy** | The AI is honest about what it knows and where answers come from. | Overconfident, opaque | Citations and source lists, the "AI can make mistakes" line, Reasoning you can open, clear undo on destructive actions. |
| **Capable** | Powerful tools feel within reach, not hidden. | Intimidating, technical for its own sake | Suggestion chips on empty screens, sensible defaults, advanced options in drawers and sheets rather than up front. |
| **Human** | It speaks like a helpful colleague and works for everyone. | Robotic, cute, exclusive | Plain words, no jargon or emoji in UI chrome, WCAG AA contrast, 44px touch targets, keyboard focus everywhere. |

## Voice and tone

The voice is constant; the tone shifts with the moment.

| Moment | Tone | Example |
|---|---|---|
| Empty or first use | Warm, inviting | "How can I help today?" |
| Working | Brief, factual | "Searching the web…" · "Thought for 12 seconds" |
| Success | Understated | "Copied to clipboard" · "Document imported" |
| Warning | Direct, helpful | "3 messages left today. Limits reset at midnight." |
| Error | Calm, specific, no blame | "Couldn't read the file. Upload a PDF, DOCX or TXT under 20 MB." |
| Destructive confirm | Plain about consequences | "This will permanently delete the conversation and its files." |

## Visual attributes

| Choice | Value | Why |
|---|---|---|
| Brand color | Indigo (`bg-brand` #4F46E5) | Signals the AI and the one main action. Calm, distinct from status colors. |
| Neutrals | Cool slate grays | Recede behind content; pair cleanly with indigo in both themes. |
| Type | Plus Jakarta Sans | Friendly geometric shapes for **Human**, tight and legible at 14px for **Clear**. |
| Corners | 4px (`radius-md`) | Crisp and precise. 8px is reserved for floating things and chat bubbles. |
| Depth | Borders first, shadows only for floating surfaces | Keeps the interface **Calm** and flat. |
| AI mark | The four-point sparkle | Marks anything the AI made or does. Never used for non-AI actions. |

## Using the AI mark

- Use the sparkle (`Icon name="sparkle"`) for AI avatars, "Generate with AI" actions, suggestion chips and AI features in navigation.
- Color it with `icon-brand` on light surfaces and `icon-on-brand` on `bg-brand`.
- Don't animate it, put it on a gradient, or use it as decoration.
- There is no separate logo yet: set the product name in Plus Jakarta Sans Bold beside the AI avatar (see the docs site header).
