const { expect } = require("@playwright/test");

class CartPage  
{
    constructor(page)
    {
        this.page = page;
        this.itemName = page.locator("[data-test='inventory-item-name']");
        this.checkoutButton = page.locator("[data-test='checkout']");
    }
    async validateProductInCart(productName)
    {
        await expect(this.checkoutButton).toBeVisible();
        await expect(this.itemName.first()).toHaveText(productName);
    }
    async clickCheckout()
    {
        await this.checkoutButton.click();
    }   
}
module.exports = {CartPage};