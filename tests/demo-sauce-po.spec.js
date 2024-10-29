const { test, expect } = require('@playwright/test');
import { loginPage } from "./page-object/loginPage"
import { Dashboard } from "./page-object/Dashboard"
import { Cart } from "./page-object/Cart"
const { testCostum } = require('./base/base-test');

testCostum.describe('Saucedemo Page-Object Test', () => {
    testCostum('Successful Login', async ({ loginpage, dashboard }) => {
        await loginpage.navigateLoginURL()
        await expect(loginpage.page).toHaveScreenshot('LoginPage.png')
        await loginpage.inputUsernamePassword(process.env.STANDART_USER, process.env.PASSWORD)
        await loginpage.clickLoginButton()
        
        await dashboard.validateLogin()
        
        });
        
        testCostum('Add to Cart Test', async ({ loginpage, dashboard, cart }) => {
        
        await loginpage.navigateLoginURL()
        await loginpage.inputUsernamePassword(process.env.STANDART_USER, process.env.PASSWORD)
        await loginpage.clickLoginButton()
        
        await dashboard.AddAllItem()
        

        await cart.validateCart()
        });
            
           
        
}); 
