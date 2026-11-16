// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "Divider");

export default {
  title: "Components/Layout/Divider",
  component: A.Divider,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "A thin line that separates content. Use it between groups in menus, sidebars and long forms. A labeled divider (\"Today\", \"or\") separates chat history by date or alternative actions.\n\n- `border-default`, 1px. `vertical` for toolbars.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Line | 1px `border-default`; margin `space-sm` 8px |\n| Labeled | `label-small` `text-secondary`, gap `space-md` |\n| Vertical | 1px wide, min 20px tall |" } },
  },
  argTypes: {"label": {"control": "text"}, "vertical": {"control": "boolean"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  render: (args) => <div style={{ maxWidth: 560 }}><A.Divider {...args} /></div>,
  args: {"label": "Today", "vertical": false},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
