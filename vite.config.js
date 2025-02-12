import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portfolio/react-portfolio/', // The base path for your GitHub Pages project
  plugins: [react()],
});
