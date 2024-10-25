export class loginPage{
    
    constructor(page){
        this.page = page;

        this.usernameInput = page.locator('[id="user-name"]');
        this.passwordInput = page.locator('[id="password"]');
        this.loginButton = page.locator('[id="login-button"]');

    }

    async navigateLoginURL(){
        await this.page.goto('https://www.saucedemo.com/')
    }

   async inputUsernamePassword(username, password){
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
   }

   async inputPassword(){
    await this.passwordInput.fill("secret_sauce");
   }

   async clickLoginButton(){
    await this.loginButton.click()
   }

}

module.exports = { loginPage }