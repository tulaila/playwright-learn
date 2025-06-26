import { test, expect } from "@playwright/test";
import testData from "../../test-data/qa/testdata.json"; // Assuming you have a JSON file with test data

type TestData = {
  TestDataSet1: {
    Skill1: string;
    Skill2: string;
  };

  TestDataSet2: {
    Skill1: string;
    Skill2: string;
  };
};

const typedTestData: TestData = testData as TestData;

for (const dataSetName in typedTestData)
{
  const skill = typedTestData[dataSetName as keyof TestData];

  test(`DataDrivenTest JSON : ${skill.Skill1}`, async ({ page }) => {

     await page.goto('https://www.google.com/');
    
     //search with keywords
     await page.getByLabel("Search", {exact : true}).fill(skill.Skill1);
     await page.getByLabel("Search", {exact : true}).press("Enter");

     //click on the playlist
      await page.getByRole("link", { name: skill.Skill1}).first().click();

      //validate the title
      await expect(page).toHaveTitle(skill.Skill1);
    
  }); 
}
