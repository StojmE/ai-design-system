// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../src/index.js';
import { previews } from '../../playground/previews.js';

const preview = previews.find((p) => p.id === "FormPattern");

export default {
  title: "Patterns/Form pattern",
  parameters: {
    layout: "padded",
    docs: { description: { component: "A complete, working form that follows *Patterns: Forms*: labels above fields, the optional field marked, validation on submit with inline errors and an error summary for two or more, a saving state, and a success Alert. Press **Create project** with the fields empty to see the errors.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Width | max 560px (preview 520px) |\n| Field gap | `space-lg` 16px; groups `space-2xl` 32px |\n| Validation | On submit, then on blur; inline errors + Alert summary for 2+ |\n| Buttons | Right aligned: Secondary then Primary; saving shows Spinner + \"Creating\u2026\" |" } },
  },
};

/** Every variant and state, as shown in the guide. */
export const Example = {
  name: "Live example",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
