const { expect } = require("@playwright/test");

class CheckOutInformationPage  
{
    constructor(page)
    {
        this.page = page;
        this.firstName = page.locator("[data-test='firstName']");
        this.lastName = page.locator("[data-test='lastName']");
        this.postalCode = page.locator("[data-test='postalCode']");
        this.continueButton = page.locator("[data-test='continue']");
    }
    async validateCheckoutInformation()
    {
        expect(await this.firstName.isVisible()).toBeTruthy();
        expect(await this.lastName.isVisible()).toBeTruthy();
        expect(await this.postalCode.isVisible()).toBeTruthy();
    }
    async fillCheckoutInformation(firstName,lastName,postalCode)
    {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);
        await this.continueButton.click();
    }
}
module.exports = {CheckOutInformationPage};