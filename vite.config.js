import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteSvgr from 'vite-plugin-svgr';
import vitePluginRequire from 'vite-plugin-require';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteSvgr({
      svgrOptions: {
        // svgr options
      },
    }),
    vitePluginRequire(),
  ],
});
