// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "ActionSheet");

export default {
  title: "Components/Mobile (touch)/Action sheet",
  component: A.ActionSheet,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "A list of actions for the thing the user just pressed. Use it on touch screens for a long-press or the \u2022\u2022\u2022 button on a chat or message (Rename, Share, Delete). Destructive actions are red; Cancel sits apart at the bottom.\n\n- Rows are 56px tall with 17px text, comfortable for thumbs.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Inset | `space-sm` 8px from the screen edges |\n| Groups | `bg-default`, `radius-xl` 16px; Cancel in its own group |\n| Rows | Min 56px, 16/22 text, `text-brand`; destructive `text-danger`; Cancel SemiBold; pressed `bg-pressed` |\n| Title | `caption` 12/16 `text-secondary`, centered |" } },
  },
  argTypes: {"title": {"control": "text"}, "actions": {"control": "object"}, "cancelLabel": {"control": "text"}, "onCancel": {"action": "onCancel"}, "inline": {"control": "boolean"}},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
