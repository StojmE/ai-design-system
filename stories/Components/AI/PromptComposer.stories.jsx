// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "PromptComposer");

export default {
  title: "Components/AI/Prompt composer",
  component: A.PromptComposer,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "The message box at the bottom of a chat. Holds the text area, an attach button, an optional model picker and the Send button. While a reply streams, Send becomes **Stop**.\n\n- Send stays disabled until there is text.\n- Keep the disclaimer line under it; pass `disclaimer={false}` only where it already appears elsewhere.\n- Max width 760px, centered in the conversation column.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Container | Padding `space-md` 12px (bottom `space-sm`) \u00b7 `radius-lg` 8px \u00b7 1px `border-strong` \u00b7 `shadow-sm` |\n| Focus | `border-focus` + `focus-ring` |\n| Text | `body-small` 14/20, 2 rows, no resize |\n| Bar | Attach (32px ghost) \u00b7 model button (32px, `label-small`) \u00b7 spacer \u00b7 Send (40px primary Icon button) |\n| Send | Disabled until text; becomes Stop (secondary) while generating |\n| Disclaimer | `caption` `text-secondary`, centered, `space-sm` below |\n| Max width | 760px in a chat column |" } },
  },
  argTypes: {"value": {"control": "text"}, "defaultValue": {"control": "text"}, "placeholder": {"control": "text"}, "rows": {"control": "number"}, "model": {"control": "text"}, "generating": {"control": "boolean"}, "disclaimer": {"control": "text"}, "onChange": {"action": "onChange"}, "onSend": {"action": "onSend"}, "onStop": {"action": "onStop"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  render: (args) => <div style={{ maxWidth: 560 }}><A.PromptComposer {...args} /></div>,
  args: {"placeholder": "Ask anything…", "model": "Fast", "generating": false},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
