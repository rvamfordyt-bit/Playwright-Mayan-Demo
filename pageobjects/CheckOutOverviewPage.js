const { expect } = require("@playwright/test");

class CheckOutOverviewPage  
{
    constructor(page)
    {
        this.page = page;
        this.itemName = page.locator("[data-test='inventory-item-name']");
        this.itemPrice = page.locator("[data-test='inventory-item-price']");
        this.itemTotalPrice = page.locator("[data-test='subtotal-label']");
        this.itemTaxPrice = page.locator("[data-test='tax-label']");
        this.itemGrandTotalPrice = page.locator("[data-test='total-label']");
        this.finishButton = page.locator("[data-test='finish']");

    }
    async validateProductInCheckoutOverview(productName)
    {
        await expect(this.itemName.first()).toHaveText(productName);
    }
    async validateTotalPrice()
    {
        const itemPriceText = await this.itemPrice.first().textContent();
        const itemPriceFloat = parseFloat(itemPriceText.replace("$",""));
        const itemTotalPriceText = await this.itemTotalPrice.first().textContent();
        const itemTotalPriceFloat = parseFloat(itemTotalPriceText.replace("Item total: $",""));
        expect(itemTotalPriceFloat).toBe(itemPriceFloat);
        const itemTaxPriceText = await this.itemTaxPrice.first().textContent();
        const itemTaxPriceFloat = parseFloat(itemTaxPriceText.replace("Tax: $",""));
        console.log(itemPriceFloat, itemTotalPriceFloat, itemTaxPriceFloat);
        const itemTotalWithTax = itemPriceFloat + itemTaxPriceFloat;
        const itemGrandTotalPriceText = await this.itemGrandTotalPrice.first().textContent();
        const itemGrandTotalPriceFloat = parseFloat(itemGrandTotalPriceText.replace("Total: $",""));
        expect(itemGrandTotalPriceFloat).toBe(itemTotalWithTax);
    }
    async clickFinish()
    {
        await this.finishButton.click();
    }     
}
module.exports = {CheckOutOverviewPage};