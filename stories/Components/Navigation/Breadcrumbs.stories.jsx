// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "Breadcrumbs");

export default {
  title: "Components/Navigation/Breadcrumbs",
  component: A.Breadcrumbs,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "Shows where a page sits in the hierarchy. Use it on pages two or more levels deep (Projects \u203a Q4 planning \u203a Files). The last item is the current page and isn't a link.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Type | `body-small` 14/20 |\n| Separator | 12px chevron-right, `icon-secondary`, gap `space-xs` |\n| Links | `text-secondary` \u2192 hover underline `text-primary` |\n| Current | `text-primary` SemiBold, not a link |" } },
  },
  argTypes: {"items": {"control": "object"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  args: {"items": ["Projects", "Q4 planning", "Files"]},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
