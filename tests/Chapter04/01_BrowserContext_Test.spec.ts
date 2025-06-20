import { test, expect } from '@playwright/test';

test('MultipleBrowsers/Tabs in PW TS', async ({ page, browser }) => {
    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);

    // Open a new browser context and page
    const context2 = await browser.newContext();
    const page2 = await context2.newPage();

    await page2.goto('https://playwright.dev/');
    await expect(page2).toHaveTitle(/Playwright/);

    //create a new tab in the same context
     const newTab = await context2.newPage();
    
    await newTab.goto('https://playwright.dev/');
    await expect(newTab).toHaveTitle(/Playwright/);
   

});
