import {test, expect} from '@playwright/test';

test('Dropdown List Test', async ({ page }) => {
  // Navigate to the practice page
  await page.goto('https://www.facebook.com/');
  await page.getByRole('button', { name: 'Create new account' }).click();
  
  // select he dropdown list for month selection
  await page.getByLabel('Month').selectOption('2'); // February
  // Verify the selected value
  await expect(page.getByLabel('Month')).toHaveValue('2'); // Verify the selected value

  //select the dropdown with visible text
  await page.getByLabel('month').selectOption('Mar'); // March

   

})