// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "ChatMessage");

export default {
  title: "Components/Identity/Chat message",
  component: A.ChatMessage,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "A single message in an AI conversation. A single message in an AI conversation. **AI** messages sit on the left in a neutral bubble (`bg-subtle`, `border-default`); **user** messages sit on the right on `bg-brand`.\n\n- Bubbles fit their text up to 480px wide, then wrap.\n- `attachment` puts a Card under the bubble (drafts, files, generated results).\n- Keep the sender name on by default; hide it for consecutive messages from the same sender.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Anatomy | Avatar (32px) \u00b7 name \u00b7 bubble \u00b7 optional attachment |\n| Avatar gap | `space-md` 12px |\n| Name \u2192 bubble | `space-xs` 4px; name `label-small` `text-secondary` |\n| Bubble | Padding `space-md` 12px / `space-lg` 16px \u00b7 `radius-lg` 8px \u00b7 max width 480px |\n| Type | `body-small` 14/20 |\n| AI | `bg-subtle` + 1px `border-default`, `text-primary`, left aligned |\n| User | `bg-brand`, `text-on-brand`, right aligned |" } },
  },
  argTypes: {"sender": {"control": "select", "options": ["ai", "user"]}, "name": {"control": "text"}, "initials": {"control": "text"}, "showName": {"control": "boolean"}, "showAvatar": {"control": "boolean"}, "attachment": {"control": "object"}, "children": {"control": "text"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  args: {"sender": "ai", "children": "Revenue grew 18% quarter over quarter, driven mostly by the new subscription tier.", "showName": true, "showAvatar": true},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
