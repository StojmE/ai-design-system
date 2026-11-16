// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "Alert");

export default {
  title: "Components/Status/Alert",
  component: A.Alert,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "Inline message about the state of a page or section. Use it for information people need while they work: a limit reached, a file that couldn't be read, a successful import. It stays until dismissed or resolved.\n\n- Tones: `info` (brand), `success`, `warning`, `danger`.\n- Title says what happened; the second line says what to do.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Padding | `space-md` 12px / `space-lg` 16px; icon gap `space-md` |\n| Radius | `radius-md` 4px |\n| Type | Title `label-medium` \u00b7 body `body-small` `text-secondary` |\n| Tones | Info `bg-brand-subtle` \u00b7 Success, Warning, Danger `bg-*-subtle`; icon in matching `text-*` |" } },
  },
  argTypes: {"tone": {"control": "select", "options": ["info", "success", "warning", "danger"]}, "title": {"control": "text"}, "onClose": {"action": "onClose"}, "children": {"control": "text"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  args: {"tone": "info", "title": "Web search is on", "children": "Answers may include links from the web."},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
