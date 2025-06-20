import { test, expect } from "@playwright/test";

const searchKeywords = [  "Playwright by Testers Talk",  "Cypress by testers talk",  "API testing by testers talk",];

for (const keyword of searchKeywords) {
  test(`parametrize Test in Playwright ${keyword}`, async ({ page }) => {
    await page.goto("https://www.youtube.com/");

    // Fill the search input with the keyword and press Enter
    await page.getByPlaceholder("Search").fill(keyword);
    await page.getByPlaceholder("Search").press("Enter");

    // Optionally, you can add assertions or further actions here
    await expect(page).toHaveURL(/search/);
  });
}

