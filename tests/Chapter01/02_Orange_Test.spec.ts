import { test, expect } from '@playwright/test';

test('Successful login with valid credentials', async ({ page }) => {
  // Go to login page
     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Enter credentials and login
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');

  // Verify successful login
  await expect(page).toHaveURL(/dashboard/);
  await expect(page.locator('.oxd-topbar-header-breadcrumb-module')).toHaveText('Dashboard');
  await expect(page.locator('.oxd-userdropdown-tab')).toBeVisible();

  //Vlaidate with Record at Cursor
   await page.getByRole('link', { name: 'My Info' }).click();
   await page.getByRole('link', { name: 'Personal Details' }).click();
   await expect(page.locator('#app')).toContainText('Personal Details');    

});
