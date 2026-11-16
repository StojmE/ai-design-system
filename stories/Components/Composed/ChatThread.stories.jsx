// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "ChatThread");

export default {
  title: "Components/Composed/Chat thread",
  component: A.ChatThread,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "A full conversation built from the AI components. Pass `messages` and it lays out Chat messages with their Reasoning, Source lists and attachments, adds Response actions under the latest AI reply, and shows the Typing indicator while waiting. `compact` drops avatars and indents for narrow screens.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Message gap | `space-xl` 24px \u00b7 compact `space-lg` 16px |\n| Under-message gap | `space-sm` 8px (Reasoning, Source list, Response actions) |\n| Indent | 44px to align with the bubble (none in compact) |\n| Compact bubble | max 86% width, no avatars |" } },
  },
  argTypes: {"messages": {"control": "object"}, "typing": {"control": "object"}, "compact": {"control": "boolean"}, "actions": {"control": "boolean"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  render: (args) => <div style={{ maxWidth: 560 }}><A.ChatThread {...args} /></div>,
  args: {"messages": [{"sender": "user", "text": "Summarize the Q4 report."}, {"sender": "ai", "text": "Revenue grew 18%, led by the new subscription tier.", "reasoning": "Thought for 8 seconds"}], "typing": false, "compact": false},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
