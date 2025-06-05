import { test, expect } from "@playwright/test";

test("test automation", async ({ page }) => {
  // Navigation and initial setup
  await page.goto(
    "https://testautomationpractice.blogspot.com/p/playwrightpractice.html"
  );

  // Form interactions
  await page.getByLabel("Username:").fill("ramesh");
  await page.getByLabel("Accept terms").check();

  // Form submission
  await page.getByRole("button", { name: "Submit Form" }).click();

  // Additional form fields
  await page.getByLabel("Email Address:").fill("ram@mail.com");
  await page.getByLabel("Password:").fill("test123");
  await page.getByLabel("Standard").check();

  // Personal information fields
  await page.getByPlaceholder("Enter your full name").fill("ramva");
  await page
    .getByPlaceholder("Phone number (xxx-xxx-xxxx)")
    .fill("613-132-1236");

  // Navigation and verification
  await page.getByTitle("Home page link").click();
  await expect(
    page.getByRole("link", { name: "Automation Testing Practice" })
  ).toBeVisible();

  // Take screenshot of the page
  await page.screenshot({
    path: "./screenshots/Automation_Test.png",
    fullPage: true,
  });
});
