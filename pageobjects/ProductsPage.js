const { expect } = require("@playwright/test");

class ProductsPage
{
    constructor(page)
    {
        this.page = page;
        this.itemList = page.locator("[data-test='inventory-item-description']");
        this.addToCartButton = page.locator("[data-test*=add-to-cart]");
        this.removeButton = page.locator("[data-test*=remove]");
        this.itemName = page.locator("[data-test='inventory-item-name']");
        this.cartButton = page.locator("[data-test='shopping-cart-link']");
    }
    async waitForProducts()
    {
        await this.itemList.first().waitFor();
    }
    async addToCartByName(productName,removeButtonText)
    {
        const products = this.itemList;
        const count = await products.count();
        for(let i=0; i<count; i++)
        {
            if(await this.itemList.nth(i).locator(this.itemName).textContent() === productName)
            {
                await this.itemList.nth(i).locator(this.addToCartButton).click();
                expect(await this.itemList.nth(i).locator(this.removeButton).textContent() === removeButtonText).toBeTruthy();
                break;
            }
        }
        await this.cartButton.click();
    }
}
module.exports = {ProductsPage};