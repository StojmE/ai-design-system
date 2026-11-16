// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../src/index.js';
import { previews } from '../../playground/previews.js';

const preview = previews.find((p) => p.id === "ErrorPatterns");

export default {
  title: "Patterns/Error patterns",
  parameters: {
    layout: "padded",
    docs: { description: { component: "Where each kind of error goes, from *Patterns: Error messaging*: inline field errors, a form summary, a failed AI reply with Regenerate, a toast for background actions, a full-area error with Try again, and warnings for limits and offline.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Placement | Field \u2192 inline \u00b7 Form \u2192 summary Alert \u00b7 AI reply \u2192 inline Alert + Regenerate \u00b7 Background \u2192 Toast \u00b7 Page \u2192 Empty state + Try again |\n| Severity | `danger` stops the task \u00b7 `warning` lets it continue |" } },
  },
};

/** Every variant and state, as shown in the guide. */
export const Example = {
  name: "Live example",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
