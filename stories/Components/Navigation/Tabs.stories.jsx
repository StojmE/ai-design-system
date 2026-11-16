// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "Tabs");

export default {
  title: "Components/Navigation/Tabs",
  component: A.Tabs,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "Switches between views of the same thing. Switches between views of the same thing (Chat, Files, Prompts). One row of tabs per area.\n\n- `label-medium`; selected tab uses `text-primary` with a 2px `border-brand` underline, others `text-secondary`.\n- Keep labels to one word where you can.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Tab padding | `space-sm` 8px / `space-md` 12px |\n| Type | `label-medium` 14/20 |\n| Unselected | `text-secondary` \u2192 hover `text-primary` |\n| Selected | `text-primary` + 2px `border-brand` underline |\n| Focus | `focus-ring`, `radius-sm` |\n| Disabled | `text-disabled`, not clickable |\n| Row | 1px `border-default` bottom rule |" } },
  },
  argTypes: {"items": {"control": "object"}, "value": {"control": "text"}, "defaultValue": {"control": "text"}, "onChange": {"action": "onChange"}, "style": {"control": "object"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  args: {"items": ["Chat", "Files", "Prompts", "Settings"]},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
