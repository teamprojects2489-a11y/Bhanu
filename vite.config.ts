import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // in KB
    rollupOptions: {
      external: [],
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // all dependencies in node_modules go into vendor.js
          }
          if (id.includes('src/components')) {
            return 'components'; // all components go into components.js
          }
        },
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'react-router': resolve(__dirname, 'node_modules/react-router'),
      'react-router-dom': resolve(__dirname, 'node_modules/react-router-dom')
    },
    dedupe: ['react', 'react-dom', 'react-router', 'react-router-dom']
  },
  optimizeDeps: {
    include: ['react-router-dom', 'react-router'],
    force: true
  },
  ssr: {
    noExternal: ['react-router-dom', 'react-router']
  }
});
