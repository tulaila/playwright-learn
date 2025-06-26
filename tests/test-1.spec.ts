import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ca.yahoo.com/?p=us');
  await page.getByRole('combobox', { name: 'Search query' }).click();
  await page.getByRole('combobox', { name: 'Search query' }).fill('playwright');
  await page.getByRole('combobox', { name: 'Search query' }).press('Enter');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Playwright enables reliable' }).click();
  const page1 = await page1Promise;
  await expect(page1.getByRole('heading', { name: 'Playwright enables reliable' })).toBeVisible();
});