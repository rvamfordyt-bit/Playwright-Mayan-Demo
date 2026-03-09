const {test, expect} = require('@playwright/test');
const {POManager} = require('../pageobjects/POManager.js');
const dataset = JSON.parse(JSON.stringify(require('../utils/E2EMayanPageObjectPatternTestData.json')));

test('E2E Mayan', async ({browser}) =>
{
    // Setup
    const context = await browser.newContext();
    const page = await context.newPage();
    // Open page and verify title
    await page.goto(dataset.url);
    await expect(page).toHaveTitle(dataset.PageTitle);
    // Create PO Manager instance
    const poManager = new POManager(page);
    // Log in
    const loginPage = poManager.getLoginPage();
    await loginPage.validLogin(dataset.username, dataset.password)
    // Wait for products and Add to cart
    const productsPage = poManager.getProductsPage();
    await productsPage.waitForProducts();
    await productsPage.addToCartByName(dataset.productName,dataset.removeButtonText);
    // Verify product in cart and checkout
    const cartPage = poManager.getCartPage();
    await cartPage.validateProductInCart(dataset.productName);
    await cartPage.clickCheckout();
    await page.pause();
});