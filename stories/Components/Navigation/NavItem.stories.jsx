// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "NavItem");

export default {
  title: "Components/Navigation/Nav item",
  component: A.NavItem,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "A row in the app sidebar. Use it for top-level destinations (Chats, Projects, Files, Settings). The active item uses `bg-brand-subtle` and `text-brand`. An optional count shows unread or new items.\n\n- For lists of individual chats, use Menu item.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Height | 36px |\n| Padding | 0 `space-sm` 8px; icon gap `space-sm` |\n| Radius | `radius-md` 4px |\n| Type | 14/20 Medium (active: SemiBold) |\n| Default | `text-secondary`, `icon-secondary` \u2192 hover `bg-hover` |\n| Active | `bg-brand-subtle`, `text-brand`, `icon-brand`; count pill `bg-brand` |\n| Focus | `focus-ring` |\n| Count | 12/16 SemiBold, `bg-muted`, `radius-full`, 0 6px |" } },
  },
  argTypes: {"icon": {"control": "text"}, "active": {"control": "boolean"}, "count": {"control": "number"}, "href": {"control": "text"}, "onClick": {"action": "onClick"}, "children": {"control": "text"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  args: {"children": "Chats", "icon": "message", "count": 3, "active": true},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
