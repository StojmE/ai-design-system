// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "Input");

export default {
  title: "Components/Forms/Input",
  component: A.Input,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "Text field with label, helper text and optional icon. Text field with an optional label, helper text and leading icon. Show `error` text (it replaces the helper) when a value is invalid, and say how to fix it.\n\n- Height 40px, `radius-md`, `border-strong`; focus adds `border-focus` and the `focus-ring` shadow.\n- Placeholder text is an example, never a replacement for the label.\n- Use the `search` icon for search fields and `sparkle` for prompt fields.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Anatomy | Label \u00b7 field (optional 16px icon + text) \u00b7 helper or error |\n| Field height | 40px |\n| Field padding | 0 `space-md` 12px; icon gap `space-sm` 8px |\n| Label \u2192 field gap | `space-xs` 4px |\n| Radius | `radius-md` 4px |\n| Type | Label `label-medium` \u00b7 value `body-small` 14/20 \u00b7 helper `caption` 12/16 |\n| Default | `bg-default`, 1px `border-strong`, placeholder `text-placeholder` |\n| Hover / Focus | `border-focus`; focus adds `focus-ring` |\n| Error | `border-danger`; helper text `text-danger` |\n| Disabled | `bg-disabled`, `border-disabled`, all text `text-disabled` |" } },
  },
  argTypes: {"label": {"control": "text"}, "helper": {"control": "text"}, "error": {"control": "text"}, "icon": {"control": "select", "options": ["plus", "check", "search", "chevron-down", "close", "arrow-right", "sparkle", "copy", "refresh", "thumbs-up", "thumbs-down", "info", "warning", "paperclip", "stop", "file", "upload", "chevron-right", "chevron-left", "external-link", "message", "folder", "settings", "trash", "more", "lightbulb", "home", "arrow-left", "menu", "mic", "edit", "archive", "user", "bell", "share", "image"]}, "state": {"control": "select", "options": ["focus"]}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  render: (args) => <div style={{ maxWidth: 560 }}><A.Input {...args} /></div>,
  args: {"label": "Email", "placeholder": "you@example.com", "helper": "We’ll never share it.", "error": "", "disabled": false},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
