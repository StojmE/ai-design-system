// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "ConversationItem");

export default {
  title: "Components/Composed/Conversation item",
  component: A.ConversationItem,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "A chat in the conversations list. Shows the avatar, title, last-message preview and time. Unread chats get a brand dot and darker preview. 72px tall for touch; wrap in Swipe row for swipe actions.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Height | `size-row-2` 72px; padding `space-md` / `space-lg` |\n| Avatar | 32px |\n| Type | Title 16/22 SemiBold \u00b7 preview 14/20 `text-secondary` \u00b7 time `caption` |\n| Unread | 10px `bg-brand` dot; preview `text-primary`; time `text-brand` SemiBold |\n| Active | `bg-brand-subtle` |" } },
  },
  argTypes: {"title": {"control": "text"}, "preview": {"control": "text"}, "time": {"control": "text"}, "unread": {"control": "boolean"}, "active": {"control": "boolean"}, "ai": {"control": "boolean"}, "initials": {"control": "text"}, "onClick": {"action": "onClick"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  render: (args) => <div style={{ maxWidth: 560 }}><A.ConversationItem {...args} /></div>,
  args: {"title": "Q4 report summary", "preview": "Revenue grew 18% quarter over quarter…", "time": "09:41", "unread": true, "active": false},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
