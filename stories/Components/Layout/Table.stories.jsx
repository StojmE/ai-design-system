// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "Table");

export default {
  title: "Components/Layout/Table",
  component: A.Table,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "Rows of structured data. Use it for lists people compare or scan: files, usage, team members. Keep columns few; right-align numbers.\n\n- Header `bg-subtle`, `label-small`, `text-secondary`; rows separated by `border-default`, hover `bg-subtle`.\n- Pass `render` on a column to put components (Badge, Button) in cells.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Container | 1px `border-default`, `radius-md`; scrolls when needed |\n| Header | `bg-subtle`, `label-small` `text-secondary`, padding `space-sm` / `space-lg` |\n| Cell | Padding `space-md` / `space-lg`, `body-small`, tabular numbers |\n| Rows | 1px `border-default` dividers; hover `bg-subtle` |" } },
  },
  argTypes: {"columns": {"control": "object"}, "rows": {"control": "object"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  render: (args) => <div style={{ maxWidth: 560 }}><A.Table {...args} /></div>,
  args: {"columns": [{"key": "name", "label": "File"}, {"key": "type", "label": "Type"}, {"key": "size", "label": "Size", "align": "right"}], "rows": [{"name": "Q4_report.pdf", "type": "PDF", "size": "2.4 MB"}, {"name": "roadmap.xlsx", "type": "XLSX", "size": "1.1 MB"}]},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
