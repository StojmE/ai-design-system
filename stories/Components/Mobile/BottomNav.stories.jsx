// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "BottomNav");

export default {
  title: "Components/Mobile (touch)/Bottom nav",
  component: A.BottomNav,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "Tab bar for the main sections of a mobile app. Use three to five destinations, each with an icon and a one-word label. The active tab gets a `bg-brand-subtle` pill and `text-brand`. A red count badge shows new items.\n\n- 64px tall plus the device's safe-area inset.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Height | `size-bottom-nav` 64px + bottom safe area |\n| Items | 3\u20135, equal width, min 44px tall |\n| Icon | 22px in a 56\u00d730 pill; active pill `bg-brand-subtle` |\n| Label | `label-xsmall` 11/14 |\n| Colors | Inactive `text-secondary` \u00b7 active `text-brand` |\n| Badge | 16px `bg-danger`, `label-xsmall`, 2px `bg-default` ring |" } },
  },
  argTypes: {"items": {"control": "object"}, "value": {"control": "text"}, "defaultValue": {"control": "text"}, "onChange": {"action": "onChange"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  render: (args) => <div style={{ maxWidth: 560 }}><A.BottomNav {...args} /></div>,
  args: {"items": [{"icon": "message", "label": "Chats", "badge": 2}, {"icon": "folder", "label": "Projects"}, {"icon": "sparkle", "label": "Explore"}, {"icon": "user", "label": "Profile"}]},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
