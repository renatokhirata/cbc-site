// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/domains/cbc-landing-page/e2e',
  use: {
    baseURL: 'http://localhost:5173',
    headless: false,
    viewport: { width: 1280, height: 720 },
    launchOptions: {
      slowMo: 500,
    },
    trace: 'retain-on-failure',
    video: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  outputDir: './src/domains/cbc-landing-page/e2e/output',
});
