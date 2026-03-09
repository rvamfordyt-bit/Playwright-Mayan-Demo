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
        expect(await this.itemName.first().textContent()).toBe(productName)
    }
    async clickCheckout()
    {
        await this.checkoutButton.click();
    }   
}
module.exports = {CartPage};