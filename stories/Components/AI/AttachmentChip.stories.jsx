// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "AttachmentChip");

export default {
  title: "Components/AI/Attachment chip",
  component: A.AttachmentChip,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "A file attached to a message or project. Shows the file name, type and size, with a remove button. While uploading it shows progress; if the upload fails it turns red and says why.\n\n- Sits above the composer before sending, and inside the message after.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Size | 260px wide \u00b7 padding `space-sm` 8px (right `space-xs`) |\n| Radius | `radius-md` 4px; 1px `border-default` |\n| File icon | 32\u00d732 tile, `radius-sm`, `bg-brand-subtle`, `icon-brand` |\n| Text | Name `label-medium` (truncates) \u00b7 meta `caption` `text-secondary` |\n| Uploading | 3px progress bar, `bg-selected` on `bg-muted` |\n| Error | `border-danger`; icon tile and meta `text-danger` |" } },
  },
  argTypes: {"name": {"control": "text"}, "type": {"control": "text"}, "size": {"control": "text"}, "progress": {"control": "number"}, "error": {"control": "text"}, "onRemove": {"action": "onRemove"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  args: {"name": "Q4_report.pdf", "type": "PDF", "size": "2.4 MB"},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
