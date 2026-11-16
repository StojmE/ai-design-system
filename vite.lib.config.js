// Library build: npm run build → dist/ (ES + CommonJS + one CSS file). React stays a peer dependency.
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: { entry: 'src/index.js', name: 'AIDesign', fileName: (f) => (f === 'es' ? 'ai-design-system.js' : 'ai-design-system.cjs'), formats: ['es', 'cjs'] },
    rollupOptions: { external: ['react', 'react-dom', 'react/jsx-runtime'], output: { assetFileNames: 'ai-design-system.[ext]' } },
    cssCodeSplit: false,
    emptyOutDir: true,
  },
});
