import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await test.step('Navigating to URL', async () => {
    await page.goto('https://github.com/');
    await page.getByRole('link', { name: 'Sign in' }).click();
  });

  await test.step('Enter Username & pwd', async () => {
    await page.getByLabel('Username or email address').click();
    await page.getByLabel('Username or email address').fill('rameshkumar');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('test1234');
  });

  await test.step('Click on SignIn button', async () => {
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  });

  await test.step('Validate Error message', async () => {
    await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
    await page.close();
  });

});
