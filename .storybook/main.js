/** Storybook for the AI Design System. Run: npm run storybook · Build a static site: npm run build-storybook */
export default {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y', '@storybook/addon-themes'],
  framework: { name: '@storybook/react-vite', options: {} },
  docs: { defaultName: 'Docs' },
  core: { disableTelemetry: true },
};
