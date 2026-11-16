// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "Textarea");

export default {
  title: "Components/Forms/Textarea",
  component: A.Textarea,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "Multi-line text field for longer answers, notes and system prompts. Same label, helper and error behavior as Input. It starts at 4 rows and the user can drag it taller.\n\n- For chat input, use **Prompt composer** instead.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Same as Input except | height grows; padding `space-sm` 8px / `space-md` 12px |\n| Min height | 60px text area (4 rows by default) |\n| Resize | vertical only |" } },
  },
  argTypes: {"label": {"control": "text"}, "helper": {"control": "text"}, "error": {"control": "text"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  render: (args) => <div style={{ maxWidth: 560 }}><A.Textarea {...args} /></div>,
  args: {"label": "Instructions", "placeholder": "Describe how the assistant should respond…", "helper": "Applies to every chat in this project.", "disabled": false},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
