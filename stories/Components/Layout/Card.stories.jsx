// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "Card");

export default {
  title: "Components/Layout/Card",
  component: A.Card,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "Container for grouped content. Container for grouped content. **Outlined** (default) for lists and grids, **elevated** (`shadow-md`) for content that should stand out.\n\n- Padding `space-xl`, gap `space-lg`, `radius-md`.\n- Optional badge on top, title (`heading-h4`), description (`body-small`, `text-secondary`), then actions as small buttons.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Padding | `space-xl` 24px |\n| Gap | `space-lg` 16px; title \u2192 description `space-xs` |\n| Radius | `radius-md` 4px |\n| Outlined | `bg-default` + 1px `border-default` |\n| Elevated | `bg-default` + `shadow-md`, no border |\n| Type | Title `heading-h4` 18/26 \u00b7 description `body-small` `text-secondary` |\n| Actions | Small buttons, `space-sm` gap |\n| Interactive | Whole card is a button: hover `border-strong` + `shadow-sm` \u00b7 focus `focus-ring` \u00b7 selected 2px `border-brand` |" } },
  },
  argTypes: {"variant": {"control": "select", "options": ["outlined", "elevated"]}, "title": {"control": "text"}, "description": {"control": "text"}, "badge": {"control": "text"}, "badgeTone": {"control": "object"}, "actions": {"control": "object"}, "children": {"control": "text"}, "style": {"control": "object"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  render: (args) => <div style={{ maxWidth: 560 }}><A.Card {...args} /></div>,
  args: {"title": "Q4 update — email draft", "description": "Revenue is up 18%, led by the new subscription tier.", "badge": "New", "variant": "outlined"},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
