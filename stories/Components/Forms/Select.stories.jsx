// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "Select");

export default {
  title: "Components/Forms/Select",
  component: A.Select,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "Dropdown trigger for choosing one option. Dropdown trigger for choosing one option from a list. Pair it with **Menu** for the open list.\n\n- Shows the placeholder in `text-placeholder` until a value is chosen.\n- When open, the chevron flips and the field takes the focus style.\n- For fewer than four options, consider radio-style choices or Tabs instead.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Anatomy | Label \u00b7 trigger (value + chevron-down 16px) \u00b7 helper |\n| Size, radius, type, states | Same as Input |\n| Open | `border-focus` + `focus-ring`; chevron rotates 180\u00b0 |\n| Placeholder | `text-placeholder` until a value is set |\n| List | Use Menu, 4px below the trigger, same width |" } },
  },
  argTypes: {"label": {"control": "text"}, "value": {"control": "text"}, "placeholder": {"control": "text"}, "helper": {"control": "text"}, "open": {"control": "boolean"}, "disabled": {"control": "boolean"}, "onClick": {"action": "onClick"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  render: (args) => <div style={{ maxWidth: 560 }}><A.Select {...args} /></div>,
  args: {"label": "Model", "value": "Fast", "helper": "You can switch models in any chat.", "open": false, "disabled": false},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
