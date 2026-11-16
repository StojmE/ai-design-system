// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "BottomSheet");

export default {
  title: "Components/Mobile (touch)/Bottom sheet",
  component: A.BottomSheet,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "A panel that slides up from the bottom of a mobile screen. Use it on touch screens instead of a Modal or Drawer: model pickers, chat options, short forms. It has a drag handle, title, scrollable body and full-width actions (48px tall).\n\n- Top corners 16px; sits over a dark scrim.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Width | Full screen width; max 90% height |\n| Radius | `radius-xl` 16px, top corners |\n| Padding | `space-sm` top \u00b7 `space-lg` sides \u00b7 `space-lg` + safe area bottom |\n| Handle | 36\u00d74, `bg-strong`, centered |\n| Title | 18/26 SemiBold; description `body-small` |\n| Actions | Full width, 48px tall, 16px text, `space-sm` gap |\n| Scrim | `bg-overlay` |" } },
  },
  argTypes: {"title": {"control": "text"}, "description": {"control": "text"}, "actions": {"control": "object"}, "inline": {"control": "boolean"}, "children": {"control": "text"}},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
