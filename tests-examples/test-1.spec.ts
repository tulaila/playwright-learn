import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/intro');
  await page.getByRole('heading', { name: 'Installation' }).click();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});