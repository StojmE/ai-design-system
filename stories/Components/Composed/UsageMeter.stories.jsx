// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "UsageMeter");

export default {
  title: "Components/Composed/Usage meter",
  component: A.UsageMeter,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "How much of a plan\u2019s limits have been used. Each row is a Progress bar with used / limit. Rows over 90% turn red so people notice before they hit the limit. Put an upgrade button in `action`.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Container | Card: padding `space-xl`, `radius-md`, 1px `border-default` |\n| Rows | Progress bar + `label-small` row; `space-lg` between |\n| Warning | \u2265 90% fill turns `bg-danger`, numbers `text-danger` |" } },
  },
  argTypes: {"title": {"control": "text"}, "reset": {"control": "text"}, "items": {"control": "object"}, "action": {"control": "object"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  render: (args) => <div style={{ maxWidth: 560 }}><A.UsageMeter {...args} /></div>,
  args: {"title": "This month", "reset": "Resets Dec 1", "items": [{"label": "Messages", "used": 412, "limit": 500}, {"label": "Deep model", "used": 46, "limit": 50}]},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
