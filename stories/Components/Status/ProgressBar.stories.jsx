// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "ProgressBar");

export default {
  title: "Components/Status/Progress bar",
  component: A.ProgressBar,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "Shows how far along a longer task is. Use it for uploads, imports and long AI jobs. Show a label and percentage when the value is known; use `indeterminate` when it isn't.\n\n- Track `bg-muted`, fill `bg-brand`, 6px tall, fully rounded.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Track | 6px, `bg-muted`, `radius-full` |\n| Fill | `bg-selected`; 200ms width transition |\n| Label row | `label-small` `text-secondary`, gap `space-xs` |\n| Indeterminate | 40% bar sliding, 1.4s |" } },
  },
  argTypes: {"value": {"control": "number"}, "label": {"control": "text"}, "showValue": {"control": "boolean"}, "indeterminate": {"control": "boolean"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  render: (args) => <div style={{ maxWidth: 560 }}><A.ProgressBar {...args} /></div>,
  args: {"label": "Uploading Q4_report.pdf", "value": 64, "showValue": true, "indeterminate": false},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
