// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "ListItem");

export default {
  title: "Components/Mobile (touch)/List item",
  component: A.ListItem,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "A full-width row for touch lists and settings. Rows are 56px tall (72px with a subtitle) so they're easy to tap. Lead with an icon or avatar; end with a value, a chevron, a Toggle, or any element via `trailing`. Wrap rows in a `.ai-list` container to group them with dividers.\n\n- Body text is 16px on touch screens.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Height | `size-row` 56px \u00b7 with subtitle `size-row-2` 72px |\n| Padding | `space-sm` / `space-lg`; gap `space-md` 12px |\n| Leading icon | 36\u00d736 tile, `radius-md`, `bg-muted` (brand / danger tones) |\n| Type | Title 16/22 \u00b7 subtitle 14/20 `text-secondary` \u00b7 value 16/22 `text-secondary` |\n| Pressed | `bg-pressed` |\n| Group | `.ai-list`: `radius-lg`, 1px `border-default`, dividers between rows |" } },
  },
  argTypes: {"title": {"control": "text"}, "subtitle": {"control": "text"}, "icon": {"control": "text"}, "iconTone": {"control": "select", "options": ["brand", "danger"]}, "avatar": {"control": "object"}, "value": {"control": "text"}, "trailing": {"control": "object"}, "chevron": {"control": "boolean"}, "destructive": {"control": "boolean"}, "onClick": {"action": "onClick"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  render: (args) => <div style={{ maxWidth: 560 }}><A.ListItem {...args} /></div>,
  args: {"title": "Default model", "subtitle": "", "value": "Fast", "icon": "sparkle", "chevron": true, "destructive": false},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
