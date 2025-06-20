import {test, expect} from '@playwright/test';

test('Assertions', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Assertions
    // Check if the title contains 'Playwright'
    await expect(page).toHaveTitle(/Playwright/);

    // Check if the search button is visible
    const searchButton = page.getByRole('button', { name: /Search/i }).first();
    await expect(searchButton).toBeVisible();

    // Check if the search button has the correct text (case-insensitive)
    await expect(searchButton).toHaveText(/Search/i);   
    
    //Verify the URL, title, text, count, and attribute
    await expect(page).toHaveURL('https://playwright.dev/');
   // await expect(page).toHaveTitle('Playwright');
    await expect(page.getByText('enables reliable end-to-end testing for modern web apps.')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Get started' })).toHaveCount(1);
    await expect(page.getByRole('link', { name: 'Get started' })).toHaveAttribute('href', '/docs/intro');


});