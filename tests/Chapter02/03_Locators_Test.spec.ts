//import playwright module
import { test, expect } from "@playwright/test";

//Write a test case
test('Locators Test', async ({ page }) => {

    //Go to the page
    // await page.goto('https://github.com/BakkappaN');

    //get by role
    // await page.getByRole('link', { name: 'Sign up' }).click();
    //await page.getByRole('link', {name: 'Sign in'}).click();

    //get by label 
    // await page.getByLabel('Homepage', {exact: true}).click();

    //get byAltText
    //await page.getByAltText("View BakkappaN's full-sized avatar").click();

    //     getbyTestId -Custom attribute
    // await page.getByTestId("repositories").first().click();

    // getByText
    //    await page.getByText("Sign up").click();

    //GetByplaceholder, Xpath, CSS selector
   await page.goto('https://www.youtube.com/@testerstalk');
   // await page.getByPlaceholder('Search').fill('Ramesh');

    //GetByXpath
    // await page.getByXPath('//input[@id="search"]').fill('Ramesh');

    //GetByCSS
    // await page.getByCSS('input#search').fill('Ramesh');

 //getbytitle
     await page.getByTitle('Testers Talk - YouTube');


});