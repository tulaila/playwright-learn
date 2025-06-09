import {test , expect} from '@playwright/test';

test('drag and drop test', async ({ page }) => {
await page.goto('https://jqueryui.com/droppable/');

// wait for the iframe to load
const iframe = page.frameLocator('[class="demo-frame"]') ;

// drag and drop the element
const dragElement = iframe.locator('#draggable');
const dropElement = iframe.locator('#droppable');

await dragElement.dragTo(dropElement);

});