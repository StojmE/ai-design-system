// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "SignInCard");

export default {
  title: "Components/Composed/Sign in card",
  component: A.SignInCard,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "A sign-in form: provider button, email, legal note. Built from Avatar, Button, Divider, Input and Link. Controls are 44px tall and the email field uses 16px text, so it works on phones as is.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Width | max 380px |\n| Padding | `space-2xl` 32px / `space-xl` 24px; gap `space-lg` |\n| Surface | `radius-lg`, 1px `border-default`, `shadow-md` |\n| Controls | 44px tall; email text 16px |\n| Title | 22/30 SemiBold; legal note `caption` centered |" } },
  },
  argTypes: {"title": {"control": "text"}, "description": {"control": "text"}, "providerLabel": {"control": "text"}, "submitLabel": {"control": "text"}, "onProvider": {"action": "onProvider"}, "onSubmit": {"action": "onSubmit"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  args: {},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
