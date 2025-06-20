import { test, expect } from "@playwright/test";

    test("Checkbox Radio Button Test", async ({ page }) => {
       await page.goto("https://jqueryui.com/checkboxradio/");
   
       const iframe = page.frameLocator('[class="demo-frame"]');
       
       // Click the label associated with the radio button instead of the hidden input
       await expect(iframe.locator('[for="radio-1"]')).not.toBeChecked();
       await iframe.locator('[for="radio-1"]').check();
       await expect(iframe.locator('[for="radio-1"]')).toBeChecked();       
    });