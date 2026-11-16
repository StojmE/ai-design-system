import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'AI Design System',
    colorPrimary: '#4F46E5',
    colorSecondary: '#4F46E5',
    fontBase: '"Plus Jakarta Sans", system-ui, sans-serif',
    appBorderRadius: 4,
    inputBorderRadius: 4,
  }),
});
