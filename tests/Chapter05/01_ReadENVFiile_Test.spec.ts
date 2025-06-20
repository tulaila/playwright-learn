import { test, expect } from '@playwright/test';

test('Read ENV file config in PW', async ({ page }) => {
  await page.goto(`${process.env.PW_URL}`); 
   await expect(page).toHaveTitle(/Playwright/);
    

});
