import { Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly searchTextbox: Locator;

  constructor(page: Page) {
    this.page = page;

    // Declare yahoo search button locator
    this.searchTextbox = page.locator('input[name="p"]');
     
  }

  //Methods
  async gotoURL() {
    await this.page.goto(`${process.env.YAHOO_URL}`);
  }

async searchForKeyword(keyword: string) {
  await this.searchTextbox.fill(keyword); // Fast and direct
  await this.page.keyboard.press("Enter");
}

}
