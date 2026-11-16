// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "IconButton");

export default {
  title: "Components/Actions/Icon button",
  component: A.IconButton,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "Icon-only button for toolbars and message actions. Use it where space is tight and the icon is well known (copy, attach, close). Always pass `label`: it becomes the accessible name and the hover title.\n\n- Variants: `ghost` (default), `secondary`, `primary` (the composer's Send button).\n- Sizes: 40px (medium) and 32px (`small`). `active` marks a toggled state, like a selected thumbs-up.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Size | Medium 40\u00d740 \u00b7 Small 32\u00d732 |\n| Icon | 16px |\n| Radius | `radius-md` 4px |\n| Ghost | `icon-secondary` \u2192 hover `bg-hover` + `icon-primary`; active `bg-brand-subtle` + `icon-brand` |\n| Secondary | `bg-default` + 1px `border-strong`, `icon-primary` |\n| Primary | `bg-brand`, `icon-on-brand` |\n| Disabled | `bg-disabled`, `text-disabled` |\n| Focus | `focus-ring` |\n| Accessibility | `label` is required: sets aria-label and title |" } },
  },
  argTypes: {"icon": {"control": "select", "options": ["plus", "check", "search", "chevron-down", "close", "arrow-right", "sparkle", "copy", "refresh", "thumbs-up", "thumbs-down", "info", "warning", "paperclip", "stop", "file", "upload", "chevron-right", "chevron-left", "external-link", "message", "folder", "settings", "trash", "more", "lightbulb", "home", "arrow-left", "menu", "mic", "edit", "archive", "user", "bell", "share", "image"]}, "label": {"control": "text"}, "variant": {"control": "select", "options": ["ghost", "secondary", "primary"]}, "size": {"control": "select", "options": ["small", "medium"]}, "active": {"control": "boolean"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  args: {"icon": "copy", "label": "Copy", "variant": "ghost", "size": "medium", "active": false, "disabled": false},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
