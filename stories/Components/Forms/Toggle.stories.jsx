// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "Toggle");

export default {
  title: "Components/Forms/Toggle",
  component: A.Toggle,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "Switch for settings that apply immediately. Switch for settings that take effect immediately, like \"Web search\" or \"Dark mode\".\n\n- Track `bg-strong` when off, `bg-brand` when on; the knob is white with `shadow-sm`.\n- The label names the setting, not the state (\"Web search\", not \"Turn on web search\").\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Track | 36\u00d720, `radius-full`, padding `space-2xs` 2px |\n| Knob | 16\u00d716 white, `shadow-sm`; moves 16px |\n| Off / On | Track `bg-strong` / `bg-selected` (both 3:1 against the page) |\n| Label | `body-small` 14/20, gap `space-sm` 8px |\n| Hover | Track `gray-450` (off) \u00b7 `bg-brand-hover` (on) |\n| Focus | `focus-ring` on the track |\n| Disabled | Track `bg-disabled`; knob gets 1px `border-strong`, no shadow |\n| Motion | 150ms |" } },
  },
  argTypes: {"label": {"control": "text"}, "on": {"action": "on"}, "defaultOn": {"control": "boolean"}, "disabled": {"control": "boolean"}, "onChange": {"action": "onChange"}, "children": {"control": "text"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  args: {"label": "Web search", "defaultOn": true, "disabled": false},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
