import { test, expect } from '@playwright/test';

test('Alerts&Popups Test', async ({ page }) => {
  await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

  page.once('dialog', dialog  => {
    dialog.accept(); // Accept the dialog
    console.log(`Alert message is: ${dialog.message()}`); // Log the dialog message
    console.log(`Alert type is: ${dialog.type()}`);
  })
    
  await page.getByText('See an example alert', { exact: true }).click(); 
   
});