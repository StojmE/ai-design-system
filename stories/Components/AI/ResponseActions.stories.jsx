// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "ResponseActions");

export default {
  title: "Components/AI/Response actions",
  component: A.ResponseActions,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "Copy, regenerate and feedback buttons under an AI reply. Place it directly under the AI message bubble, aligned with the bubble's left edge. Thumbs up and down toggle and are mutually exclusive.\n\n- Show it on the latest reply always, and on older replies on hover.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Buttons | 4 small ghost Icon buttons (32px): copy, refresh, thumbs-up, thumbs-down |\n| Gap | `space-2xs` 2px |\n| Selected feedback | `bg-brand-subtle` + `icon-brand` |\n| Placement | Under the AI bubble, left aligned with it |" } },
  },
  argTypes: {"feedback": {"control": "select", "options": ["up", "down"]}, "onCopy": {"action": "onCopy"}, "onRegenerate": {"action": "onRegenerate"}, "onFeedback": {"action": "onFeedback"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  args: {},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
