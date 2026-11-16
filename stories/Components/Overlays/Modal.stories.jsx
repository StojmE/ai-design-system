// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "Modal");

export default {
  title: "Components/Overlays/Modal",
  component: A.Modal,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "Dialog for focused tasks and confirmations. Dialog for focused tasks and confirmations. Use `destructive` for irreversible actions; its confirm button turns red and says exactly what happens (\"Delete\").\n\n- 480px wide, `radius-lg`, `shadow-lg`, over a dark scrim.\n- Title says the task or question; body explains consequences in one or two sentences.\n- Cancel on the left, confirm on the right.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Width | 480px (max 100%) |\n| Padding | `space-xl` 24px; section gap `space-lg` 16px |\n| Surface | `bg-default`, 1px `border-default`, `radius-lg` 8px, `shadow-lg` |\n| Scrim | `bg-overlay` |\n| Title | `heading-h4` + 16px close button |\n| Footer | Right aligned, `space-sm` gap; Cancel then confirm |" } },
  },
  argTypes: {"title": {"control": "text"}, "children": {"control": "text"}, "destructive": {"control": "boolean"}, "confirmLabel": {"control": "text"}, "cancelLabel": {"control": "text"}, "footer": {"control": "object"}, "inline": {"control": "boolean"}, "onClose": {"action": "onClose"}, "onConfirm": {"action": "onConfirm"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  args: {"title": "Rename conversation", "children": "Give this conversation a name so it’s easy to find later.", "inline": true, "destructive": false, "confirmLabel": "Save"},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
