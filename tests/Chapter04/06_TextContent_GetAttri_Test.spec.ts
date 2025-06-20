import { test, expect } from "@playwright/test";

    test("TextContent Test", async ({ page }) => {
        await page.goto("https://github.com/BakkappaN");
       const name = await page.locator('[itemprop="name"]').textContent();
       const finalname = name ?.trim();
       console.log(`Name:  ${finalname}`);

    });
 
   test("InnerText Test", async ({ page }) => {
        await page.goto("https://github.com/BakkappaN");
       const name = await page.locator('[itemprop="name"]').innerText();
       const finalname = name ?.trim();
       console.log(`Name:  ${finalname}`);
       expect(finalname).toBe("Testers Talk");

      const attributevalue = await page.getByTestId('repositories').first().getAttribute('data-selected-links');
      console.log(`Attribute Value: ${attributevalue}`);

    });
 