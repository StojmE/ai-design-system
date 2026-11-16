// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "Spinner");

export default {
  title: "Components/Status/Spinner",
  component: A.Spinner,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "Indeterminate loading indicator. Use it for short waits inside a control or panel (under a few seconds). For AI replies use the Typing indicator; for long tasks with known progress use Progress bar.\n\n- Sizes: `small` 16, medium 24, `large` 32.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Sizes | Small 16 \u00b7 Medium 24 \u00b7 Large 32 |\n| Stroke | 2px; `bg-brand` arc on `bg-brand-subtle` |\n| Motion | 0.8s per turn |" } },
  },
  argTypes: {"size": {"control": "select", "options": ["small", "medium", "large"]}, "label": {"control": "text"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  args: {"size": "medium"},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
