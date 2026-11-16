// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "EmptyState");

export default {
  title: "Components/Layout/Empty state",
  component: A.EmptyState,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "What to show when there is nothing here yet. Explain what this place is for and offer the next step. For a new chat, pair it with Suggestion chips.\n\n- Icon in a `bg-brand-subtle` circle, title in `heading-h4`, one-sentence description, one primary action.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Width | max 400px, centered |\n| Padding | `space-2xl` 32px / `space-xl` 24px |\n| Icon | 24px in a 48px `bg-brand-subtle` circle, `icon-brand` |\n| Type | Title `heading-h4` \u00b7 description `body-small` `text-secondary` |\n| Gap | `space-sm` 8px |" } },
  },
  argTypes: {"icon": {"control": "text"}, "title": {"control": "text"}, "description": {"control": "text"}, "action": {"control": "object"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  args: {"title": "No projects yet", "description": "Projects keep related chats, files and instructions together.", "icon": "folder"},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
