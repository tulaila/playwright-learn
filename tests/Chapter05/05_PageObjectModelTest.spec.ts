import { test, expect } from "@playwright/test";
import { HomePage } from "../../src/Pages/HomePage";
import { ResultPage } from "../../src/Pages/ResultPage";
import { PlaylistPage } from "../../src/Pages/PlaylistPage";

test("Page Object Model Test", async ({ page }) => {
  // Create instances of the page objects
  const homePage = new HomePage(page);
  await homePage.gotoURL();
  await homePage.searchForKeyword(`${process.env.SEARCH_KEYWORD}`);

  const resultPage = new ResultPage(page);
  await resultPage.clickOnPlaylist(`${process.env.SEARCH_KEYWORD}`);

  const playlistPage = new PlaylistPage(page);
  await playlistPage.validatepageTitle(`${process.env.SEARCH_KEYWORD}`);
});
