import {test , expect} from '@playwright/test';

test('Keyboard actions', async ({ page }) => {
await page.goto('https://playwright.dev/');

//keyboard actions // Pressing a key       

await page.getByRole('button', { name: 'Search (Ctrl+K)' }).first().click();
await page.keyboard.press('Control+K'); // Press Ctrl+K to focus the search input
await page.waitForTimeout(1000); // Wait for the search input to appea
await page.keyboard.type('documentation'); // Type 'Playwright' into the search input
await page.keyboard.press('Enter'); // Press Enter to submit the search
 
});