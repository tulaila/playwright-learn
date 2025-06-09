import {test, expect } from "@playwright/test";
test('Date Picker Test', async ({ page }) => {
  await page.goto('https://jqueryui.com/datepicker/');

  // Click on the date picker input
   const iframe = page.frameLocator('[class="demo-frame"]');
  //  await iframe.locator('#datepicker').fill('12/25/2023'); // Fill the date input with a specific date
 
       // selecting dynamic date    
 await iframe.locator('#datepicker').click(); // Click on the date picker input
 await iframe.locator('.ui-datepicker-today').click(); // todays date


    
});
