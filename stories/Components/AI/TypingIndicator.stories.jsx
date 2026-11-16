// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "TypingIndicator");

export default {
  title: "Components/AI/Typing indicator",
  component: A.TypingIndicator,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "Shows that the assistant is working on a reply. Show it right after the user sends a message, until the first words of the reply stream in. Three dots pulse inside an AI bubble.\n\n- Pass `text` (\"Searching the web\u2026\") when the wait will be long or the step is meaningful.\n- Respects reduced-motion settings.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Layout | Same as an AI Chat message |\n| Dots | 3 \u00d7 6px, `icon-secondary`, 4px gap |\n| Motion | 1.2s loop, 150ms stagger, 3px lift; off with reduced motion |\n| Role | status, \"Assistant is typing\" |" } },
  },
  argTypes: {"text": {"control": "text"}, "showAvatar": {"control": "boolean"}, "label": {"control": "text"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  args: {"text": "Searching the web…", "showAvatar": true},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
