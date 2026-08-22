import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          three: ['three'],
          motion: ['framer-motion', 'gsap', 'lenis'],
          ui: ['lucide-react', 'swiper'],
        },
      },
    },
  },
  server: {
    port: 3000,
    host: true,
  },
});