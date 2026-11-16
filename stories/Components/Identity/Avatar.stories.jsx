// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "Avatar");

export default {
  title: "Components/Identity/Avatar",
  component: A.Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "AI or user avatar. Shows who is speaking. The **AI** avatar is the sparkle on `bg-brand`; the **user** avatar shows initials on `bg-brand-subtle`.\n\n- Sizes: `medium` (32px, chat) and `small` (24px, dense lists).\n- Always round (`radius-full`).\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Sizes | Medium 32 \u00b7 Small 24 |\n| Shape | `radius-full` |\n| AI | `bg-brand` with sparkle (18px / 14px), `icon-on-brand` |\n| User | `bg-brand-subtle`, initials `text-brand` SemiBold (14px / 12px) |" } },
  },
  argTypes: {"type": {"control": "select", "options": ["ai", "user"]}, "initials": {"control": "text"}, "size": {"control": "select", "options": ["small", "medium"]}, "label": {"control": "text"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  args: {"type": "ai", "size": "medium", "initials": "ES"},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
