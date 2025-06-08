import {test,expect } from "@playwright/test";
 
test.beforeAll(async () => {
  console.log('This runs once BEFORE ALL tests');
});

test.beforeEach(async ({page}) => {
  console.log('This runs once BeforeEACH tests');
  await page.goto('https://playwright.dev/');
});

test.afterEach(async () => {
  console.log('This runs once AfterEach tests');
});


test.afterAll(async () => {
  console.log('This runs once AFTER ALL tests');
});


test('TEST 01', async ({ page }) => {
  console.log('First Test 01 Execuation Started');
  //await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/); // Expect the title to contain "Playwright"
});

test('TEST 02', async ({ page }) => {
  console.log('Second Test 02 Execuation Started');
 // await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
