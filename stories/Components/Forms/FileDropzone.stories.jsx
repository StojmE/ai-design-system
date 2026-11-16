// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "FileDropzone");

export default {
  title: "Components/Forms/File dropzone",
  component: A.FileDropzone,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "Area for uploading files by dragging or browsing. Use it when uploading is the main task (adding knowledge to a project). In a chat, the composer's paperclip button is enough.\n\n- Dashed `border-strong`; turns `bg-brand-subtle` with `border-focus` while a file is dragged over.\n- The hint states allowed types and size limit.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Padding | `space-xl` 24px |\n| Border | 1.5px dashed `border-strong`; `radius-lg` 8px |\n| Background | `bg-subtle` \u2192 drag-over `bg-brand-subtle` + `border-focus` |\n| Icon | 20px upload in a 40px circle, `bg-default`, `icon-brand` |\n| Type | Title `label-medium` \u00b7 hint `caption` |" } },
  },
  argTypes: {"title": {"control": "text"}, "hint": {"control": "text"}, "accept": {"control": "text"}, "multiple": {"control": "boolean"}, "dragging": {"control": "boolean"}, "onFiles": {"action": "onFiles"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  render: (args) => <div style={{ maxWidth: 560 }}><A.FileDropzone {...args} /></div>,
  args: {"hint": "PDF, DOCX, TXT or images, up to 20 MB", "dragging": false},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
