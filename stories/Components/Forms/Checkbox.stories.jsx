// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "Checkbox");

export default {
  title: "Components/Forms/Checkbox",
  component: A.Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "Checkbox for multi-select options and consents. Checkbox for multi-select options and consents. Clicking the label toggles it.\n\n- 16px box, `radius-sm`; checked fills with `bg-brand` and a white check.\n- Use a Toggle instead when the change takes effect immediately.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Box | 16\u00d716, `radius-sm` 2px, 1px `border-strong`, `bg-default` |\n| Checked | `bg-selected` fill, 12px check icon, 2px stroke, `icon-on-brand` |\n| Label | `body-small` 14/20, gap `space-sm` 8px |\n| Hover | Box border `border-focus`; checked box `bg-brand-hover` |\n| Error | Box border `border-danger`; message `caption` in `text-danger`, aligned with the label |\n| Disabled | `bg-disabled`, `border-disabled`, label `text-disabled` |\n| Focus | `focus-ring` on the box |" } },
  },
  argTypes: {"label": {"control": "text"}, "checked": {"control": "boolean"}, "defaultChecked": {"control": "boolean"}, "disabled": {"control": "boolean"}, "onChange": {"action": "onChange"}, "children": {"control": "text"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  args: {"label": "Include sources", "defaultChecked": true, "disabled": false, "error": ""},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
