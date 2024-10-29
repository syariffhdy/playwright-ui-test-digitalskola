const { expect } = require('@playwright/test');
export class loginPage{
    
    constructor(page){
        this.page = page;

        this.usernameInput = page.locator(process.env.USERNAMEFORMID);
        this.passwordInput = page.locator(process.env.PASSWORDFORMID);
        this.loginButton = page.locator(process.env.LOGINBUTTON);

    }

    async navigateLoginURL(){
        await this.page.goto(process.env.LOGINURL)
    }

   async inputUsernamePassword(username, password){
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
   }


   async clickLoginButton(){
    await this.loginButton.click()
   }

}

module.exports = { loginPage }