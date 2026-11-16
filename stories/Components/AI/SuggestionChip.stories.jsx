// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "SuggestionChip");

export default {
  title: "Components/AI/Suggestion chip",
  component: A.SuggestionChip,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "A tappable example prompt. Show three or four chips on an empty chat to help people start. Clicking a chip sends (or fills in) that prompt.\n\n- Write them as the user would type them, under about 40 characters.\n- The sparkle icon is the default; swap it for a more specific icon when it helps.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Padding | `space-sm` 8px / `space-md` 12px |\n| Radius | `radius-md` 4px |\n| Surface | `bg-default`, 1px `border-default` \u2192 hover `bg-hover` + `border-strong` |\n| Icon | 16px, `icon-brand`, gap `space-sm` |\n| Type | `body-small` 14/20 |" } },
  },
  argTypes: {"icon": {"control": "text"}, "onClick": {"action": "onClick"}, "children": {"control": "text"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  args: {"children": "Summarize a document", "icon": "sparkle"},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
