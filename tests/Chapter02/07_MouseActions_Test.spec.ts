import {test , expect} from '@playwright/test';

test('Mouse actions test', async ({ page }) => {
await page.goto('https://playwright.dev/');

// left click on the link
//await page.getByRole('link', { name: 'Get started' }).click({button: 'left'}); // left-click on the link

// right click on the link
//await page.getByRole('link', { name: 'Get started' }).click({button: 'right'}); // right-click on the link

// middle click on the link (different browser behavior)
 //await page.getByRole('link', { name: 'Get started' }).click({button: 'middle'}); // middle-click on the link

 //mouse hover on the link
//await page.getByRole('link', { name: 'Get started' }).hover(); // mouse hover on the link

//double click on the link  (same page)
 await page.getByRole('link', { name: 'Get started' }).dblclick(); // double-click on the link

});