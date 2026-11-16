// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "Fab");

export default {
  title: "Components/Mobile (touch)/FAB",
  component: A.Fab,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "Floating button for the main action on a mobile screen. Use one per screen, bottom right, for the most common action (New chat). The extended version adds a label when there's room.\n\n- 56px, `radius-lg`, `bg-brand`, `shadow-lg`.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Size | `size-fab` 56\u00d756; extended: auto width, padding `space-lg` / `space-xl` |\n| Radius | `radius-lg` 8px |\n| Surface | `bg-brand`, `icon-on-brand`, `shadow-lg` |\n| Icon | 22px, 2px stroke |\n| Placement | 16px from bottom-right, above the Bottom nav |" } },
  },
  argTypes: {"icon": {"control": "text"}, "label": {"control": "text"}, "ariaLabel": {"control": "text"}, "onClick": {"action": "onClick"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  args: {"icon": "edit", "label": "New chat"},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
