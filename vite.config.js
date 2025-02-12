import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portfolio/', // The base path for your GitHub Pages project
  plugins: [react()],
});
