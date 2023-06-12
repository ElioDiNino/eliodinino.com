import { defineConfig } from "cypress";
import eyesPlugin from '@applitools/eyes-cypress'

export default eyesPlugin(defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
}));
