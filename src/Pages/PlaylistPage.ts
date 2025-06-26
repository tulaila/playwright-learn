import { expect, Locator, Page } from '@playwright/test';

export class PlaylistPage {
      readonly page: Page;
   
    constructor(page:Page) {
        this.page = page;

        // Declare all elements
        }

       //Methos
        async validatepageTitle(title: string) {
            // Validate the page title
            await expect(this.page).toHaveTitle(new RegExp(title, 'i'));
        // Validate the heading on the page 
       await expect(this.page.getByRole('heading', { name: /Playwright enables reliable/i })).toBeVisible();

    }
}
 