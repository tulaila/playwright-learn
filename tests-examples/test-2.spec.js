import { test, expect } from '@playwright/test';

test('First Playwright Test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

