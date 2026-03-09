class LoginPage
{
    constructor(page)
    {
        this.page = page;
        this.userName = page.locator("[data-test='username']");
        this.passWord = page.locator("[data-test='password']");
        this.logInButton = page.locator("[data-test='login-button']");
    }
    async validLogin(username,password)
    {
        await this.userName.fill(username);
        await this.passWord.fill(password);
        await this.logInButton.click();
    }
}
module.exports = {LoginPage};