import { defineConfig } from 'cypress';
import { configureVisualRegression } from 'cypress-visual-regression';

export default defineConfig({
  viewportWidth: 1200,
  viewportHeight: 800,
  e2e: {
    baseUrl: 'http://localhost:4173',
    env: {
      visualRegressionType: 'regression', // Use 'base' to update reference images
      visualRegressionBaseDirectory: 'cypress/snapshots/base',
      visualRegressionDiffDirectory: 'cypress/snapshots/diff',
      visualRegressionGenerateDiff: 'fail',
      visualRegressionFailSilently: false,
    },
    screenshotsFolder: './cypress/snapshots/actual',
    setupNodeEvents(on, config) {
      configureVisualRegression(on);
    },
  },
});
