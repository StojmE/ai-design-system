// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "Tooltip");

export default {
  title: "Components/Overlays/Tooltip",
  component: A.Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "A short label that appears on hover or focus. Use it to name icon-only buttons or add a brief hint. Keep it to a few words, never essential information.\n\n- `bg-inverse` with `text-inverse`, `radius-md`, `caption` size.\n- `placement`: `top` (default) or `bottom`.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Padding | `space-xs` 4px / `space-sm` 8px |\n| Radius | `radius-md` 4px |\n| Surface | `bg-inverse`, `text-inverse` |\n| Type | 12/16 Medium, single line |\n| Offset | 6px from the trigger |\n| Show | Hover or keyboard focus; 120ms fade |" } },
  },
  argTypes: {"text": {"control": "text"}, "placement": {"control": "select", "options": ["top", "bottom"]}, "open": {"control": "boolean"}, "children": {"control": "text"}},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
