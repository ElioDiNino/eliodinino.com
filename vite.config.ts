import { sentryVitePlugin } from '@sentry/vite-plugin';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    svgrPlugin(),
    sentryVitePlugin({
      org: 'elio-org',
      project: 'eliodinino-com',
      sourcemaps: {
        filesToDeleteAfterUpload: ['build/assets/*.js.map'],
      },
    }),
  ],
  build: {
    outDir: 'build',
    sourcemap: true,
  },
  server: {
    open: true,
    port: 3000,
  },
});
