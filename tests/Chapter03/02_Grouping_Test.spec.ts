import { test, expect } from "@playwright/test";

test.describe("SmokeTesting", () => {
    test("Test01", async ({ page }) => {
        await page.goto("https://playwright.dev/");
        await expect(page).toHaveTitle(/Playwright/);
    });
});

test.describe("RegressionTesting", () => {
    test("Test02", async ({ page }) => {
        await page.goto("https://playwright.dev/");
        await page.getByRole("link", { name: "Get started" }).click();
        await expect(
            page.getByRole("heading", { name: "Installation" })).toBeVisible();
    });

    test("Test03", async ({ page }) => {
        await page.goto("https://playwright.dev/");
        await expect(page.getByRole("link", { name: "Get started" })).toHaveCount(1);
    });
});
