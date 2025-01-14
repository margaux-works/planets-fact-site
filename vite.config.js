import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/planets-fact-site/', // Required for GitHub Pages deployment
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Ensures routing works correctly for dynamic paths
        entryFileNames: `[name].[hash].js`,
        chunkFileNames: `[name].[hash].js`,
        assetFileNames: `[name].[hash].[ext]`,
      },
    },
  },
});
