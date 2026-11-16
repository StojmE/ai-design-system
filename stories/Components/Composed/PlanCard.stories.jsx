// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "PlanCard");

export default {
  title: "Components/Composed/Plan card",
  component: A.PlanCard,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "A pricing plan with features and a call to action. Show two or three side by side; mark one as `featured` (brand border and a \"Most popular\" flag). Features start with a check icon. `current` disables the button and labels it \"Current plan\".\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Padding | `space-xl` 24px; gap `space-lg` |\n| Radius | `radius-lg` 8px |\n| Featured | 2px `border-brand` + `shadow-md`; flag 12/18 SemiBold on `bg-brand` |\n| Price | 36/44 Bold; period `body-small` `text-secondary` |\n| Button | Full width, 44px |\n| Features | 14/20 with 14px `icon-brand` checks |" } },
  },
  argTypes: {"name": {"control": "text"}, "price": {"control": "text"}, "period": {"control": "text"}, "description": {"control": "text"}, "features": {"control": "object"}, "featured": {"control": "boolean"}, "flag": {"control": "text"}, "current": {"control": "boolean"}, "cta": {"control": "text"}, "onSelect": {"action": "onSelect"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  render: (args) => <div style={{ maxWidth: 560 }}><A.PlanCard {...args} /></div>,
  args: {"name": "Pro", "price": "$18", "period": "/ month", "description": "For everyday work", "features": ["Unlimited messages", "All models", "Projects and file library"], "featured": true, "current": false},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
