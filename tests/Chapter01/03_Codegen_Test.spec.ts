import { test, expect } from '@playwright/test';

test('Codegen TestCase', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('playwright testers');
  await page.getByPlaceholder('Search').press('Enter');
  await page.getByRole('link', { name: 'Playwright by Testers Talk' }).click();
  await expect(page.getByRole('link', { name: 'Playwright by Testers Talk' })).toBeVisible();
 
});