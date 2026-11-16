// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "WelcomeScreen");

export default {
  title: "Components/Composed/Welcome screen",
  component: A.WelcomeScreen,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "The empty state of a new chat. A greeting, four Suggestion chips in a grid and the composer. Pass `mobile` to use the Mobile composer.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Padding | `space-2xl` 32px / `space-lg` 16px; section gap `space-xl` |\n| Title | 28/36 SemiBold |\n| Suggestions | 2-column grid, max 560px, `space-sm` gap, chips min 44px |\n| Composer | max 640px |" } },
  },
  argTypes: {"title": {"control": "text"}, "description": {"control": "text"}, "suggestions": {"control": "object"}, "model": {"control": "text"}, "mobile": {"control": "boolean"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  args: {"description": "Ask a question, paste a document, or start with one of these.", "mobile": false},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
