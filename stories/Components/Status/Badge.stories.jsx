// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "Badge");

export default {
  title: "Components/Status/Badge",
  component: A.Badge,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "Short status or category label. Short status or category label, one or two words.\n\n- `neutral` is the default. `brand` marks new or AI-related things (\"Beta\", \"New\").\n- `success`, `warning` and `danger` are for status only, never decoration.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Padding | `space-2xs` 2px / `space-sm` 8px |\n| Radius | `radius-md` 4px |\n| Type | `label-small` 12/16 |\n| Tones | Neutral `bg-muted`/`text-secondary` \u00b7 Brand `bg-brand-subtle`/`text-brand` \u00b7 Success, Warning, Danger: `bg-*-subtle` / `text-*` |" } },
  },
  argTypes: {"tone": {"control": "select", "options": ["neutral", "brand", "success", "warning", "danger"]}, "children": {"control": "text"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  args: {"children": "Beta", "tone": "brand"},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
