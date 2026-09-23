import { defineConfig } from 'cypress';
import { configureVisualRegression } from 'cypress-visual-regression';

export default defineConfig({
  defaultBrowser: 'chrome-for-testing',
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
    baseUrl: 'http://localhost:4173',
    expose: {
      visualRegressionType: 'regression', // Use 'base' to update reference images
      visualRegressionBaseDirectory: 'cypress/snapshots/base',
      visualRegressionDiffDirectory: 'cypress/snapshots/diff',
      visualRegressionGenerateDiff: 'fail',
      visualRegressionFailSilently: false,
    },
    screenshotsFolder: './cypress/snapshots/actual',
    setupNodeEvents(on, config) {
      configureVisualRegression(on);
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.family === 'chromium') {
          // Give the browser window enough room for the viewport plus Cypress'
          // runner header, otherwise `100vh` elements render short of the
          // screenshot height and leave a gap along the bottom
          launchOptions.args.push(
            `--window-size=${config.viewportWidth},${config.viewportHeight + 200}`,
          );
        }
        return launchOptions;
      });
    },
  },
});
