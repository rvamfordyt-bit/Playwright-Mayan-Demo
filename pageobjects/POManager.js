const {LoginPage} = require('./LoginPage.js');
const {ProductsPage} = require('./ProductsPage.js');

class POManager{
    constructor(page)
    {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.productsPage = new ProductsPage(this.page);
    }
    getLoginPage()
    {
        return this.loginPage;
    }
    getProductsPage()
    {
        return this.productsPage;
    }
}
module.exports = {POManager};