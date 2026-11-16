// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "Button");

export default {
  title: "Components/Actions/Button",
  component: A.Button,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "Buttons trigger actions in four styles and two sizes. Buttons trigger actions. Use **primary** for the one main action on a view, **secondary** for supporting actions, **ghost** for low-emphasis actions in toolbars and lists, and **destructive** for delete or remove.\n\n- Sizes: `medium` (40px, default) and `small` (32px, inside cards and dense rows).\n- Labels start with a verb, in sentence case: \"Generate with AI\", \"Save\".\n- `icon` adds a 16px leading icon. Use `sparkle` for actions the AI performs.\n- Disabled buttons use `bg-disabled` and `text-disabled`. Prefer explaining why an action is unavailable over disabling silently.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Anatomy | Container \u00b7 optional leading icon (16px) \u00b7 label |\n| Height | Medium 40px \u00b7 Small 32px |\n| Padding (x) | Medium `space-lg` 16px \u00b7 Small `space-md` 12px |\n| Icon gap | Medium `space-sm` 8px \u00b7 Small `space-xs` 4px |\n| Radius | `radius-md` 4px |\n| Type | `label-medium` 14/20 SemiBold |\n| Primary | `bg-brand` \u2192 hover `bg-brand-hover`; text `text-on-brand` |\n| Secondary | `bg-default` + 1px `border-strong` \u2192 hover `bg-hover`; text `text-primary` |\n| Ghost | transparent \u2192 hover `bg-hover`; text `text-primary` |\n| Destructive | `bg-danger` \u2192 hover `bg-danger-hover`; text `text-on-brand` |\n| Disabled | `bg-disabled`, text `text-disabled` (Ghost stays transparent) |\n| Pressed | Primary `indigo-800` \u00b7 Secondary and Ghost `bg-pressed` |\n| Focus | `focus-ring`: 2px gap + 2px indigo ring |\n| Min width | none; label never wraps |" } },
  },
  argTypes: {"variant": {"control": "select", "options": ["primary", "secondary", "ghost", "destructive"]}, "size": {"control": "select", "options": ["small", "medium"]}, "icon": {"control": "select", "options": ["plus", "check", "search", "chevron-down", "close", "arrow-right", "sparkle", "copy", "refresh", "thumbs-up", "thumbs-down", "info", "warning", "paperclip", "stop", "file", "upload", "chevron-right", "chevron-left", "external-link", "message", "folder", "settings", "trash", "more", "lightbulb", "home", "arrow-left", "menu", "mic", "edit", "archive", "user", "bell", "share", "image"]}, "block": {"control": "boolean"}, "state": {"control": "select", "options": ["hover"]}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  args: {"children": "Generate with AI", "variant": "primary", "size": "medium", "icon": "sparkle", "disabled": false},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
