const {test, expect} = require('@playwright/test');
const {POManager} = require('../pageobjects/POManager');
const dataset = JSON.parse(JSON.stringify(require('../utils/E2EMayanpageobjectpatternTestData.json')));

test('E2E Mayan', async ({browser}) =>
{
    // Setup
    const context = await browser.newContext();
    const page = await context.newPage();
    // Open page and verify title
    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");
});