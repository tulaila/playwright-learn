import {test , expect} from '@playwright/test';
test('Screenshots Test', async ({ page }) => {
    
  // Navigate to the URL
  await page.goto('https://playwright.dev/docs/intro');


  // Take a screenshot of the viewport
  await page.screenshot({ path: './screenshots/Viewport.png' });

  // Take a screenshot of the full scrollable page
  await page.screenshot({ path:'./screenshots/Scrollable.png', fullPage: true });

  // Take a screenshot of a specific element
  const element = page.getByRole('heading', { name: 'Installation0' });
  await element.screenshot({ path:'./screenshots/Element.png' });

  // Take a screenshot of a specific PART of the page
  await page.locator('ul.table-of-contents.table-of-contents__left-border').screenshot({ path: './screenshots/Part of page.png'});

  // Verify the heading is visible
  await expect(element).toBeVisible();
});
