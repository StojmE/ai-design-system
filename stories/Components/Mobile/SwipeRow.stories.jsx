// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "SwipeRow");

export default {
  title: "Components/Mobile (touch)/Swipe row",
  component: A.SwipeRow,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "A row that reveals actions when swiped left. Wrap any row (usually a Conversation item) to let people swipe left for Archive and Delete. Release past halfway to keep it open. Always offer the same actions in an Action sheet too, since swiping isn't discoverable.\n\n- Try it: drag the rows in the preview.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Action width | 80px each |\n| Actions | Neutral `bg-strong` \u00b7 destructive `bg-danger` + `text-on-brand`; 20px icon over 12/16 label |\n| Behavior | Snaps open past half the actions width; 200ms ease-out |\n| Gesture | Horizontal pan only; page still scrolls vertically |" } },
  },
  argTypes: {"actions": {"control": "object"}, "open": {"control": "boolean"}, "children": {"control": "text"}},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
