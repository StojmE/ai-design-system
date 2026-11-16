// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "Stepper");

export default {
  title: "Components/Navigation/Stepper",
  component: A.Stepper,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "Progress through a multi-step flow. Use it for setup and onboarding flows with three to five steps. Completed steps show a check; the current step is filled with `bg-brand`.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Dot | 24\u00d724 circle, 12px Bold number |\n| Todo | 1px `border-strong`, `text-secondary` |\n| Current | `bg-brand`, `text-on-brand`; label SemiBold `text-primary` |\n| Done | `bg-brand-subtle` with 12px check; connector `border-brand` |\n| Connector | 1px `border-default`, min 16px |" } },
  },
  argTypes: {"steps": {"control": "object"}, "current": {"control": "number"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  render: (args) => <div style={{ maxWidth: 560 }}><A.Stepper {...args} /></div>,
  args: {"steps": ["Upload files", "Choose model", "Set instructions", "Review"], "current": 1},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
