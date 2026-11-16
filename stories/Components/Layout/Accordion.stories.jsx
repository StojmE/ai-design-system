// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "Accordion");

export default {
  title: "Components/Layout/Accordion",
  component: A.Accordion,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "Stacked sections that expand one at a time. Use it for FAQs and long settings pages where people need only one part at a time. Set `multiple` to let several stay open.\n\n- Titles in `label-large`; body in `body-small`, `text-secondary`.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Header | `label-large` 16/24, padding `space-lg` 16px vertical; chevron `icon-secondary` |\n| Body | `body-small` `text-secondary`, padding-bottom `space-lg` |\n| Dividers | 1px `border-default` top and between |" } },
  },
  argTypes: {"items": {"control": "object"}, "multiple": {"control": "boolean"}, "defaultOpen": {"control": "object"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  render: (args) => <div style={{ maxWidth: 560 }}><A.Accordion {...args} /></div>,
  args: {"items": [{"title": "What can the assistant do?", "content": "Answer questions, summarize documents, draft emails and write code."}, {"title": "Is my data used for training?", "content": "No. Your chats and files stay private."}], "defaultOpen": 0, "multiple": false},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
