// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "OptionCards");

export default {
  title: "Components/Composed/Option cards",
  component: A.OptionCards,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "Large selectable cards for choosing one option. Use them when each option needs a description: model choice, plan, tone. Each card is a big tap target with an icon, title, optional badge and description, and a radio. `horizontal` lays them side by side on wide screens.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Card | Padding `space-lg` 16px, `radius-lg`, 1px `border-strong`, min 56px tall |\n| Selected | `bg-brand-subtle` + 2px `border-brand` (border + inset); radio `bg-selected` |\n| Icon tile | 36\u00d736, `radius-md`, `bg-muted` |\n| Type | Title 16/22 SemiBold \u00b7 description `body-small` |\n| Gap | `space-sm` 8px between cards |" } },
  },
  argTypes: {"label": {"control": "text"}, "options": {"control": "object"}, "value": {"control": "text"}, "defaultValue": {"control": "text"}, "horizontal": {"control": "boolean"}, "onChange": {"action": "onChange"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  render: (args) => <div style={{ maxWidth: 560 }}><A.OptionCards {...args} /></div>,
  args: {"options": [{"value": "fast", "title": "Fast", "description": "Quick answers for everyday tasks", "icon": "sparkle"}, {"value": "deep", "title": "Deep", "description": "Thinks longer on hard problems", "icon": "lightbulb", "badge": "New"}], "defaultValue": "fast", "horizontal": false},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
