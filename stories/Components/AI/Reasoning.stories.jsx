// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "Reasoning");

export default {
  title: "Components/AI/Reasoning",
  component: A.Reasoning,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "Collapsible view of how the AI worked through a question. Shows \"Thinking\u2026\" with a spinner while the model reasons, then collapses to a one-line summary (\"Thought for 12s\") the user can expand.\n\n- Collapsed by default once done; the answer is what matters.\n- Body text is `text-secondary` so it reads as secondary to the reply.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Rule | 2px `border-default` on the left; content inset `space-md` 12px |\n| Header | `label-medium` `text-secondary`; lightbulb in `icon-brand` (spinner while active); chevron rotates when open |\n| Body | `body-small` `text-secondary`, padding-top `space-sm` |" } },
  },
  argTypes: {"title": {"control": "text"}, "active": {"control": "boolean"}, "activeTitle": {"control": "text"}, "open": {"control": "boolean"}, "defaultOpen": {"control": "boolean"}, "children": {"control": "text"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  render: (args) => <div style={{ maxWidth: 560 }}><A.Reasoning {...args} /></div>,
  args: {"title": "Thought for 12 seconds", "children": "Compare the report’s revenue table with last quarter, then check news for cost trends.", "defaultOpen": true, "active": false},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
