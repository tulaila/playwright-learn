import { defineConfig, devices } from '@playwright/test';
import { on } from 'events';

// Importing dotenv to load environment variables from .env file
// Importing path to resolve the path to the .env file
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });


export default defineConfig({
 testDir: './tests', 
 timeout: 1 * 60 * 1000, /* Maximum time one test can run for. */
  fullyParallel: true,                   /* Run tests in files in parallel */
  forbidOnly: !!process.env.CI,         /* Fail the build on CI if you accidentally left test.only in the source code. */
  retries: process.env.CI ? 2 : 0,     /* Retry on CI only */
  workers:1,                          /* Number of workers used to run tests. Set to 1 to run tests sequentially. */
  reporter: 
  [
     ['html'],
    ['allure-playwright'],
  ],
  
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: 
  {
  testIdAttribute: 'data-tab-item',
  video : 'on', // 'on' | 'off' | 'retain-on-failure' | 'on-first-retry'
  headless: false,
  screenshot: 'on',
  trace: 'on', // /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
  },


  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] },
    // },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
    
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
