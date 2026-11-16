// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "MobileComposer");

export default {
  title: "Components/Mobile (touch)/Mobile composer",
  component: A.MobileComposer,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "The message box for mobile chat. A plus button for attachments, a rounded text field that grows with the message, and one trailing button: the mic when empty, Send once there's text, Stop while the AI is replying. All buttons are 44px.\n\n- 16px text so phones don't zoom in on focus.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Padding | `space-sm` 8px |\n| Plus | 40px circle, `bg-muted` |\n| Field | Min 44px, `radius-full`, 1px `border-strong`, padding 10px / `space-lg`; 16/22 text, grows to 120px |\n| Trailing | 44px: mic (empty) \u00b7 Send `bg-brand` (text) \u00b7 Stop `bg-inverse` (generating) |" } },
  },
  argTypes: {"value": {"control": "text"}, "defaultValue": {"control": "text"}, "placeholder": {"control": "text"}, "generating": {"control": "boolean"}, "onChange": {"action": "onChange"}, "onSend": {"action": "onSend"}, "onStop": {"action": "onStop"}, "onAttach": {"action": "onAttach"}, "onVoice": {"action": "onVoice"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  render: (args) => <div style={{ maxWidth: 560 }}><A.MobileComposer {...args} /></div>,
  args: {"placeholder": "Message", "generating": false},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
