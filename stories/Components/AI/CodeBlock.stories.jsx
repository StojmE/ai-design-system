// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../../src/index.js';
import { previews } from '../../../playground/previews.js';

const preview = previews.find((p) => p.id === "CodeBlock");

export default {
  title: "Components/AI/Code block",
  component: A.CodeBlock,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "Formatted code with a language label and a Copy button. Use it in AI replies whenever the answer contains code, commands or config. It follows the theme (`bg-subtle`, `border-default`) and uses the `mono` font.\n\n- Copy confirms with \"Copied\" for 1.5 seconds.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Surface | `bg-subtle`, 1px `border-default`, `radius-lg` 8px |\n| Header | `caption` SemiBold `text-secondary`; bottom rule `border-default`; Copy button 28px |\n| Code | `code` style 13/20 mono; padding `space-md` / `space-lg`; scrolls sideways |" } },
  },
  argTypes: {"code": {"control": "text"}, "language": {"control": "text"}},
};

/** Change the props in the Controls panel; the code snippet updates with them. */
export const Playground = {
  render: (args) => <div style={{ maxWidth: 560 }}><A.CodeBlock {...args} /></div>,
  args: {"language": "javascript", "code": "const reply = await ai.chat({\n  model: 'fast',\n  messages: [{ role: 'user', content: 'Hello' }],\n});"},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
