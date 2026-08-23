import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Points at `npm run server` (server/index.js) for local dev — production serves both from the
// same Express process, so this proxy only matters when running the Vite dev server separately.
const API_PROXY_TARGET = 'http://localhost:8787';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': API_PROXY_TARGET,
      '/uploads': API_PROXY_TARGET,
      '/music': API_PROXY_TARGET,
    },
  },
});
