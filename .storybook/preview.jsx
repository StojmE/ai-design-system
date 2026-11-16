import { withThemeByDataAttribute } from '@storybook/addon-themes';
import '../src/index.js'; // tokens, fonts and component styles
import './preview.css';

export default {
  decorators: [
    withThemeByDataAttribute({ themes: { Light: 'light', Dark: 'dark' }, defaultTheme: 'Light', attributeName: 'data-theme' }),
  ],
  parameters: {
    layout: 'padded',
    backgrounds: { disable: true }, // the theme switch sets the background
    controls: { expanded: true, sort: 'requiredFirst' },
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: true }] } },
    options: {
      storySort: { order: ['Introduction', 'Foundations', 'Components', ['Actions', 'Forms', 'Navigation', 'AI', 'Status', 'Layout', 'Overlays', 'Identity', 'Mobile (touch)', 'Composed'], 'Patterns'] },
    },
  },
};
