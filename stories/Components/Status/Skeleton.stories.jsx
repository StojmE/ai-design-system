// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "Skeleton");

export default {
  title: "Components/Status/Skeleton",
  component: A.Skeleton,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "Placeholder shapes while content loads. Match the layout of the content that's coming so the page doesn't jump. Prefer it over a spinner when loading a list or a card.\n\n- `lines` makes a paragraph; `circle` makes an avatar.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Fill | `bg-muted`, `radius-sm` (circle: `radius-full`) |\n| Text lines | 12px tall, `space-sm` gap, last line 60% |\n| Motion | Pulse 1.4s |" } },
  },
  argTypes: {"width": {"control": "object"}, "height": {"control": "object"}, "circle": {"control": "boolean"}, "lines": {"control": "number"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  render: (args) => <div style={{ maxWidth: 560 }}><A.Skeleton {...args} /></div>,
  args: {"lines": 3},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
