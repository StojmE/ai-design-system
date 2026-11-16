// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "Toast");

export default {
  title: "Components/Status/Toast",
  component: A.Toast,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "Brief confirmation that floats over the page. Use it for quick feedback after an action (\"Copied\", \"Chat deleted\"). It disappears on its own after about 4 seconds; add an `action` such as Undo when the action can be reversed.\n\n- Dark surface (`bg-inverse`) so it stands out in both themes.\n- Stack at the bottom center, one at a time.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Size | 320\u2013420px wide |\n| Padding | `space-md` 12px (left `space-lg`) |\n| Radius | `radius-lg` 8px |\n| Surface | `bg-inverse`, `text-inverse`, `shadow-lg` |\n| Type | Title `label-medium` \u00b7 body 80% opacity |\n| Timing | Dismiss after ~4s; stays while hovered |" } },
  },
  argTypes: {"tone": {"control": "select", "options": ["info", "success", "warning", "danger"]}, "title": {"control": "text"}, "action": {"control": "text"}, "onAction": {"action": "onAction"}, "onClose": {"action": "onClose"}, "children": {"control": "text"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  args: {"tone": "success", "title": "Copied to clipboard", "action": ""},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
