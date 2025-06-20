import { test, expect } from "@playwright/test";

    test("Iterating Matching elements Test", async ({ page }) => {
       await page.goto("https://github.com/tulaila");
       const replink = await page.$$('.repo');
         for (const rlink of replink) {
              const text = await rlink.textContent();
              console.log(`Repository Name: ${text}`);
         }
         const count = await page.locator('.repo').count();

    });
 
    