import { sentryVitePlugin } from '@sentry/vite-plugin';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgrPlugin(),
    sentryVitePlugin({
      org: 'elio-org',
      project: 'eliodinino-com',
      sourcemaps: {
        filesToDeleteAfterUpload: ['build/assets/*.js.map'],
      },
    }),
  ],
  resolve: {
    tsconfigPaths: true,
  },
  build: {
    outDir: 'build',
    sourcemap: true,
    rollupOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'react-vendor',
              test: /node_modules[\\/]react/,
              priority: 20,
            },
            {
              name: 'mui-vendor',
              test: /node_modules[\\/]@mui/,
              priority: 15,
            },
            {
              name: 'sentry-vendor',
              test: /node_modules[\\/]@sentry/,
              priority: 10,
            },
            {
              name: 'vendor',
              test: /node_modules/,
              priority: 10,
            },
            {
              name: 'common',
              minShareCount: 2,
              minSize: 10000,
              priority: 5,
            },
          ],
        },
      },
    },
  },
  server: {
    open: true,
    port: 3000,
  },
});
