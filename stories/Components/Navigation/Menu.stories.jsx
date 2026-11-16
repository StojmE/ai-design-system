// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "Menu");

export default {
  title: "Components/Navigation/Menu",
  component: A.Menu,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "Floating list of options. Floating list of options, opened from a Select, a button, or a right-click. Fill it with **MenuItem**.\n\n- `radius-lg`, `shadow-lg`, `border-default`, `space-xs` padding.\n- A selected item gets `bg-brand-subtle`, `text-brand` and a trailing check.\n- MenuItem also works as a sidebar row (see the recent chats list).\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Container | Width 256px default \u00b7 padding `space-xs` 4px \u00b7 item gap `space-2xs` 2px |\n| Surface | `bg-default`, 1px `border-default`, `radius-lg` 8px, `shadow-lg` |\n| Item | 36px tall, 0 `space-sm` padding, `radius-sm` 2px, `body-small` |\n| Item states | Hover `bg-hover` \u00b7 Focus `focus-ring` \u00b7 Selected `bg-brand-subtle` + `text-brand` + trailing check \u00b7 Disabled `text-disabled` |" } },
  },
  argTypes: {"width": {"control": "number"}, "children": {"control": "text"}, "style": {"control": "object"}},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
