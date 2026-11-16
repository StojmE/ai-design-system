// Generated from the component guidelines and previews. Edit docs/10-components.md, then regenerate, or edit freely.
import React from 'react';
import * as A from '../../src/index.js';
import { previews } from '../../playground/previews.js';

const preview = previews.find((p) => p.id === "Icon");

export default {
  title: "Foundations/Icons",
  component: A.Icon,
  tags: ['autodocs'],
  parameters: {
    layout: "padded",
    docs: { description: { component: "Thirty-six 16px stroke icons including the AI sparkle, drawn with `currentColor`.\n\n- **Actions:** plus, check, close, copy, refresh, trash, more, upload, paperclip, stop, search, settings, edit, archive, share, mic, menu\n- **Direction:** arrow-left, arrow-right, chevron-down, chevron-right, chevron-left, external-link\n- **Objects:** file, folder, message, home, lightbulb, user, bell, image\n- **Feedback:** info, warning, thumbs-up, thumbs-down\n- **AI:** sparkle (the AI mark)\n\n1.5px stroke, round caps and joins; they take the text color of their parent. Pass `label` when an icon stands alone and carries meaning.\n\n### Specs\n\n| Property | Spec |\n|---|---|\n| Grid | 16\u00d716 viewbox |\n| Stroke | 1.5px, round caps and joins |\n| Color | `currentColor` |\n| Sizes used | 12 \u00b7 14 \u00b7 16 (default) \u00b7 18 \u00b7 20 \u00b7 22 \u00b7 24 |" } },
  },
  argTypes: {"name": {"control": "select", "options": ["plus", "check", "search", "chevron-down", "close", "arrow-right", "sparkle", "copy", "refresh", "thumbs-up", "thumbs-down", "info", "warning", "paperclip", "stop", "file", "upload", "chevron-right", "chevron-left", "external-link", "message", "folder", "settings", "trash", "more", "lightbulb", "home", "arrow-left", "menu", "mic", "edit", "archive", "user", "bell", "share", "image"]}, "size": {"control": "number"}, "strokeWidth": {"control": "number"}, "label": {"control": "text"}, "className": {"control": "text"}},
};

/** Every variant and state, as shown in the guide. */
export const AllStates = {
  name: "All states",
  render: () => preview.render(A, React.createElement),
  parameters: { docs: { source: { code: null } } },
};
