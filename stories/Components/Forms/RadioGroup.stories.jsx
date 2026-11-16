// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "RadioGroup");

export default {
  title: "Components/Forms/Radio group",
  component: A.RadioGroup,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "Choose exactly one option from a short list. Use it when all options should be visible at once (2 to 5 options). For longer lists use Select; for switching views use Segmented control.\n\n- `horizontal` lays options in a row.\n- The checked dot is a 5px `bg-brand` ring.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Dot | 16\u00d716 circle, 1px `border-strong` |\n| Checked | 5px `bg-selected` ring |\n| Option gap | Vertical `space-sm` 8px \u00b7 Horizontal `space-lg` 16px |\n| Label | `body-small` 14/20; group label `label-medium` |\n| Hover | Dot border `border-focus` |\n| Focus | `focus-ring` on the dot |\n| Error | Dots `border-danger`; message `caption` `text-danger` under the group |\n| Disabled | `bg-disabled`, `border-disabled`, `text-disabled` |" } },
  },
  argTypes: {"label": {"control": "text"}, "options": {"control": "object"}, "value": {"control": "text"}, "defaultValue": {"control": "text"}, "onChange": {"action": "onChange"}, "horizontal": {"control": "boolean"}, "disabled": {"control": "boolean"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  args: {"label": "Response length", "options": ["Short", "Balanced", "Detailed"], "defaultValue": "Balanced", "horizontal": false, "disabled": false, "error": ""},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
