// The guide: npm run dev (or npm run guide) → the full design system guide with live components.
// npm run build:guide → a static copy in dist-guide/ you can host anywhere.
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'playground',
  plugins: [react()],
  server: { open: true },
  build: { outDir: '../dist-guide', emptyOutDir: true },
});
