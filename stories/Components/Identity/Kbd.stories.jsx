// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "Kbd");

export default {
  title: "Components/Identity/Kbd",
  component: A.Kbd,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "A keyboard key or shortcut. Use it in tooltips, menus and help text to teach shortcuts. Pass `keys` for a combination.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Size | 20px tall, min 20px wide, padding 0 5px |\n| Border | 1px `border-strong` (2px bottom), `radius-sm` |\n| Type | `label-xsmall` 11/14, `text-secondary` |\n| Combination gap | 3px |" } },
  },
  argTypes: {"keys": {"control": "object"}, "children": {"control": "text"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  args: {"keys": ["⌘", "K"]},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
