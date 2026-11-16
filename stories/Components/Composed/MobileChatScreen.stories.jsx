// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "MobileChatScreen");

export default {
  title: "Components/Composed/Mobile chat screen",
  component: A.MobileChatScreen,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "A complete mobile chat screen in a phone frame. Shows how the touch components fit together: Top app bar, a compact Chat thread with Reasoning, and the Mobile composer. Pass your own `messages` or `children` to mock up other states.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Frame | 375 \u00d7 760 viewport, 10px bezel, 44px corner radius |\n| Status bar | 44px |\n| Stack | Top app bar \u00b7 thread (padding `space-lg`, scrolls) \u00b7 Mobile composer |\n| Home indicator | 120\u00d75, 8px from bottom |" } },
  },
  argTypes: {"title": {"control": "text"}, "subtitle": {"control": "text"}, "messages": {"control": "object"}, "typing": {"control": "object"}, "children": {"control": "text"}},
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
