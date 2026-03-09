class ProductsPage
{
    constructor(page)
    {
        this.page = page;
        this.userName = page.locator("[data-test='username']");
        this.passWord = page.locator("[data-test='password']");
        this.logInButton = page.locator("[data-test='login-button']");
    }
    async waitForProducts()
    {
        await this.page.waitForSelector("[data-test='inventory-item-description']").first().waitFor()
    }
}
module.exports = {ProductsPage};