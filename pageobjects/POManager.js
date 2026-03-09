const {LoginPage} = require('./LoginPage.js');
const {ProductsPage} = require('./ProductsPage.js');
const {CartPage} = require('./CartPage.js');
const {CheckOutInformationPage} = require('./CheckOutInformationPage.js');

class POManager{
    constructor(page)
    {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.productsPage = new ProductsPage(this.page);
        this.cartPage = new CartPage(this.page);
        this.checkOutInformationPage = new CheckOutInformationPage(this.page);
    }
    getLoginPage()
    {
        return this.loginPage;
    }
    getProductsPage()
    {
        return this.productsPage;
    }
    getCartPage()
    {
        return this.cartPage;
    }
    getCheckOutInformationPage()
    {
        return this.checkOutInformationPage;
    }
}
module.exports = {POManager};