const {LoginPage} = require('./LoginPage.js');
const {ProductsPage} = require('./ProductsPage.js');
const {CartPage} = require('./CartPage.js');

class POManager{
    constructor(page)
    {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.productsPage = new ProductsPage(this.page);
        this.cartPage = new CartPage(this.page);
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
}
module.exports = {POManager};