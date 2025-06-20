import { test, expect } from '@playwright/test';

test('Visual Comparision in PW', async ({ page }) => {
    await page.goto('https://github.com/');
    await expect(page).toHaveScreenshot('githubhomepage.png');

    // Navigate to the Sign In page
    await page.locator('#login_field').fill('ramesh'); // Replace with your username
    await expect(page).toHaveScreenshot('githubhomepage.png');
  
});