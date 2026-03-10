const { expect } = require("@playwright/test");

class CheckoutComplete  
{
    constructor(page)
    {
        this.page = page;
        this.completeHeader = page.locator("[data-test='complete-header']");
    }
    async validateCheckoutComplete(completeHeaderText){
        await expect(this.completeHeader).toBeVisible();
        await expect(this.completeHeader).toHaveText(completeHeaderText);
    }
}
module.exports = {CheckoutComplete};