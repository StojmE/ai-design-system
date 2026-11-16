// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "Pagination");

export default {
  title: "Components/Navigation/Pagination",
  component: A.Pagination,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "Move between pages of a long list. Use it under tables and lists that don't scroll forever. It shows the first, last and neighbouring pages, with an ellipsis for the rest.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Page button | 32\u00d732 min, `radius-md`, `label-medium` |\n| Prev / next | Small Icon button (32px) |\n| Current | `bg-brand-subtle`, `text-brand` |\n| Gap | `space-2xs` 2px; ellipsis 24px |" } },
  },
  argTypes: {"total": {"control": "number"}, "page": {"control": "number"}, "defaultPage": {"control": "number"}, "onChange": {"action": "onChange"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  args: {"total": 12, "defaultPage": 5},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
