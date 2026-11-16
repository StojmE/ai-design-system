// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "SegmentedControl");

export default {
  title: "Components/Navigation/Segmented control",
  component: A.SegmentedControl,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "Compact switch between two to four views or modes. Use it for mode switches inside a panel (Chat / Code, Day / Week). The selected segment lifts onto `bg-default` with `shadow-sm`.\n\n- Sizes: medium (32px items) and `small` (24px).\n- For page-level navigation, use Tabs.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Container | `bg-muted`, padding & gap `space-2xs` 2px, `radius-md` 4px |\n| Segment | Medium 32px tall, 0 `space-md` \u00b7 Small 24px, 0 `space-sm` |\n| Type | `label-medium` (Small: 12/16) |\n| Selected | `bg-default` + `shadow-sm`, `text-primary` |\n| Unselected | `text-secondary`, radius `radius-sm` |" } },
  },
  argTypes: {"items": {"control": "object"}, "value": {"control": "text"}, "defaultValue": {"control": "text"}, "onChange": {"action": "onChange"}, "size": {"control": "select", "options": ["small", "medium"]}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  args: {"items": ["Chat", "Code", "Image"], "size": "medium"},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
