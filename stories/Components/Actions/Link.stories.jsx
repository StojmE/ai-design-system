// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "Link");

export default {
  title: "Components/Actions/Link",
  component: A.Link,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "Inline text link. Use it inside text to go somewhere; use a Button to do something. `external` adds an arrow and opens in a new tab.\n\n- `text-brand`, semibold, underlined. `subtle` uses `text-primary` for dense footers.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Type | inherits size; SemiBold |\n| Color | `text-brand` (Subtle: `text-primary`, regular weight) |\n| Underline | 35% opacity, 3px offset \u2192 100% on hover |\n| Focus | `focus-ring`, `radius-sm` |\n| External | 12px external-link icon, 3px gap, opens new tab |" } },
  },
  argTypes: {"href": {"control": "text"}, "external": {"control": "boolean"}, "subtle": {"control": "boolean"}, "children": {"control": "text"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  args: {"children": "Usage guide", "href": "#", "external": false, "subtle": false},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
