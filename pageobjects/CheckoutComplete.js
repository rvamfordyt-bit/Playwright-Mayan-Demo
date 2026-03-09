const { expect } = require("@playwright/test");

class CheckoutComplete  
{
    constructor(page)
    {
        this.page = page;
        this.completeHeader = page.locator("[data-test='complete-header']");
    }
    async validateCheckoutComplete(completeHeaderText){
        expect(await this.completeHeader.textContent()).toBe(completeHeaderText);
    }
}
module.exports = {CheckoutComplete};