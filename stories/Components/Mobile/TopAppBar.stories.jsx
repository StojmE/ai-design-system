// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "TopAppBar");

export default {
  title: "Components/Mobile (touch)/Top app bar",
  component: A.TopAppBar,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "The bar at the top of a mobile screen. Holds a back or menu button, the screen title (centered, with an optional subtitle such as the model name) and up to two action icons. Every button is a 44px (`size-touch`) tap target.\n\n- `large` puts a big title under the bar for top-level screens (Chats, Settings).\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Height | `size-bar` 56px; side padding `space-xs` 4px |\n| Buttons | 44\u00d744 (`size-touch`), 20px icons, round |\n| Title | 16/22 SemiBold centered; subtitle `caption` `text-secondary` |\n| Large title | 28/36 Bold below the bar, padding `space-md` |\n| Surface | `bg-default` + 1px `border-default` bottom |" } },
  },
  argTypes: {"title": {"control": "text"}, "subtitle": {"control": "text"}, "back": {"control": "boolean"}, "onBack": {"action": "onBack"}, "menu": {"control": "boolean"}, "onMenu": {"action": "onMenu"}, "large": {"control": "boolean"}, "actions": {"control": "object"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  render: (args) => <div style={{ maxWidth: 560 }}><A.TopAppBar {...args} /></div>,
  args: {"title": "Q4 report summary", "subtitle": "Fast", "back": true, "large": false, "actions": [{"icon": "more", "label": "More"}]},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
