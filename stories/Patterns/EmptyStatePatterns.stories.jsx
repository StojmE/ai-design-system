// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../src/index.js';
import { previews } from '../../playground/previews.js';

const preview = previews.find((p) => p.id === "EmptyStatePatterns");

export default {
  title: "Patterns/Empty state patterns",
  parameters: {
    layout: "padded",
    docs: { description: { component: "The four kinds of empty state from *Patterns: Empty states*: first use, no results, new chat and all done. Each keeps to one sentence and at most one action.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Kinds | First use \u00b7 No results \u00b7 New chat \u00b7 All done |\n| Component | Empty state (icon, `heading-h4`, one sentence, \u2264 1 action) |" } },
  },
};

/** Every variant and state, as shown in the guide. */
export const Example = {
  name: "Live example",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
