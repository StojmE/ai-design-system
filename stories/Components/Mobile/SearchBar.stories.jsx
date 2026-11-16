// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "SearchBar");

export default {
  title: "Components/Mobile (touch)/Search bar",
  component: A.SearchBar,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "Search field for mobile screens. A 44px rounded field on `bg-muted`. When focused it shows a Cancel button; a clear button appears once there's text.\n\n- 16px text so phones don't zoom in on focus.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Field | `size-touch` 44px, `radius-lg` 8px, `bg-subtle` + 1px `border-strong`, 0 `space-md` |\n| Text | 16/22 (no zoom on iOS) |\n| Focused | `bg-default`, `border-focus`, `focus-ring`; Cancel appears (16px `text-brand`) |\n| Clear | 20px circle, `bg-strong`; 44px tap area |" } },
  },
  argTypes: {"placeholder": {"control": "text"}, "value": {"control": "text"}, "defaultValue": {"control": "text"}, "focused": {"control": "boolean"}, "onChange": {"action": "onChange"}, "onCancel": {"action": "onCancel"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  render: (args) => <div style={{ maxWidth: 560 }}><A.SearchBar {...args} /></div>,
  args: {"placeholder": "Search chats", "focused": false},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
