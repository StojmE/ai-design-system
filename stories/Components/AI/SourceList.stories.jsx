// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "SourceList");

export default {
  title: "Components/AI/Source list",
  component: A.SourceList,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "The sources an AI reply used, as small cards. Show it under a reply that used web search or documents. Each card shows the number, site and title; the numbers match the Citations in the text.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Card | 180px wide \u00b7 padding `space-sm` / `space-md` \u00b7 `radius-md` \u00b7 1px `border-default` |\n| Content | Citation number + site (`caption`) \u00b7 title `label-medium` 14/20, max 2 lines |\n| Gap | `space-sm` 8px; label `label-small` `text-secondary` |" } },
  },
  argTypes: {"label": {"control": "text"}, "sources": {"control": "object"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  render: (args) => <div style={{ maxWidth: 560 }}><A.SourceList {...args} /></div>,
  args: {"sources": [{"source": "Q4_report.pdf", "title": "Q4 2026 Earnings Report"}, {"source": "techreview.com", "title": "Cloud costs climb as AI demand grows"}]},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
