// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "Citation");

export default {
  title: "Components/AI/Citation",
  component: A.Citation,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "A numbered link to the source behind a claim. Place it right after the sentence it supports. Hovering shows the source title and site; clicking opens it.\n\n- Numbers match the order in the Source list below the reply.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Marker | 18px tall, min 18px wide, `radius-sm`, `label-xsmall` numbers |\n| Colors | `bg-brand-subtle` + `text-brand` \u2192 hover `bg-brand` + `text-on-brand` |\n| Tooltip | 220px wide, title SemiBold + source at 75% opacity |" } },
  },
  argTypes: {"index": {"control": "number"}, "title": {"control": "text"}, "source": {"control": "text"}, "href": {"control": "text"}, "open": {"control": "boolean"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  args: {"index": 1, "title": "Q4 2026 Earnings Report", "source": "Q4_report.pdf", "open": true},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
