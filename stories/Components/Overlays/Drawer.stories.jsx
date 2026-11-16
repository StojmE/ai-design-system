// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "Drawer");

export default {
  title: "Components/Overlays/Drawer",
  component: A.Drawer,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "A panel that slides in from the edge of the screen. Use it for detail and settings that relate to the current page (chat settings, a source preview) without leaving it. Prefer a Modal for short confirmations.\n\n- 400px wide by default, full height, `shadow-lg`. Header with title and close; optional footer actions.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Width | 400px default, full height |\n| Header / footer | Padding `space-lg` / `space-xl`, `border-default` rules |\n| Body | Padding `space-xl` 24px, gap `space-xl`, scrolls |\n| Surface | `bg-default`, `shadow-lg`, 1px edge border |" } },
  },
  argTypes: {"title": {"control": "text"}, "side": {"control": "select", "options": ["right", "left"]}, "width": {"control": "number"}, "inline": {"control": "boolean"}, "footer": {"control": "object"}, "onClose": {"action": "onClose"}, "children": {"control": "text"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  args: {"title": "Chat settings", "children": "Settings go here.", "inline": true, "width": 400},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
