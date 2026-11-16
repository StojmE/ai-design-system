// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "Slider");

export default {
  title: "Components/Forms/Slider",
  component: A.Slider,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "Pick a value from a range by dragging. Use it for settings where the exact number matters less than the feel, like creativity (temperature) or response length. Show the current value, and label the ends when they mean something.\n\n- Track `bg-muted`, filled part `bg-brand`, white thumb with a brand ring.\n- For precise numbers, pair it with an Input.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Track | 6px tall, `radius-full`; filled `bg-selected`, rest `bg-muted` |\n| Thumb | 18\u00d718 white, 2px `bg-selected` ring, `shadow-sm` |\n| Header | Label `label-medium` + value `label-medium` in `text-brand` |\n| End labels | `caption` 12/16, `text-secondary` |\n| Disabled | 50% opacity |" } },
  },
  argTypes: {"label": {"control": "text"}, "min": {"control": "number"}, "max": {"control": "number"}, "step": {"control": "number"}, "value": {"control": "number"}, "defaultValue": {"control": "number"}, "showValue": {"control": "boolean"}, "format": {"control": "object"}, "minLabel": {"control": "text"}, "maxLabel": {"control": "text"}, "disabled": {"control": "boolean"}, "onChange": {"action": "onChange"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  render: (args) => <div style={{ maxWidth: 560 }}><A.Slider {...args} /></div>,
  args: {"label": "Creativity", "min": 0, "max": 1, "step": 0.1, "defaultValue": 0.7, "minLabel": "Precise", "maxLabel": "Creative"},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
