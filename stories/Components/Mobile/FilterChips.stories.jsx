// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "FilterChips");

export default {
  title: "Components/Mobile (touch)/Filter chips",
  component: A.FilterChips,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "A row of chips for filtering a list. Use them above lists and search results. Single-select by default; `multiple` lets several be on, each showing a check. The row scrolls sideways on small screens.\n\n- 36px tall with a 44px tap area; fully rounded so they read as filters, not buttons.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Chip | 36px tall (44px tap area), 0 `space-lg`, `radius-full` |\n| Type | `label-medium` 14/20 |\n| Off | `bg-default`, 1px `border-strong` |\n| On | `bg-brand-subtle`, `border-brand`, `text-brand`; check icon when multi-select |\n| Row | `space-sm` gap, scrolls sideways, no scrollbar |" } },
  },
  argTypes: {"items": {"control": "object"}, "multiple": {"control": "boolean"}, "value": {"control": "object"}, "defaultValue": {"control": "object"}, "onChange": {"action": "onChange"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  args: {"items": ["All", "Chats", "Projects", "Files"], "multiple": false},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
