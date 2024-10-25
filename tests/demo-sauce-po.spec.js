const { test, expect } = require('@playwright/test');
import { loginPage } from "./page-object/loginPage"
import { Dashboard } from "./page-object/dashboard"
import { Cart } from "./page-object/Cart"

test.describe('Saucedemo Page-Object Test', () => {
    test('Successful Login', async ({ page }) => {

        const loginpage = new loginPage(page)
        const dashboard = new Dashboard(page)
        await loginpage.navigateLoginURL()
        await loginpage.inputUsernamePassword("standard_user", "secret_sauce")
        await loginpage.clickLoginButton()

        await dashboard.validateLogin()

        });
        
        test('Add to Cart Test', async ({ page }) => {
        const loginpage = new loginPage(page)
        const dashboard = new Dashboard(page)
        const cart = new Cart(page)
        await loginpage.navigateLoginURL()
        await loginpage.inputUsernamePassword("standard_user", "secret_sauce")
        await loginpage.clickLoginButton()
        
        await dashboard.itemAddtoCart1()
        await dashboard.itemAddtoCart2()
        await dashboard.itemAddtoCart3()
        await dashboard.itemAddtoCart4()
        await dashboard.itemAddtoCart5()
        await dashboard.itemAddtoCart6()
        await dashboard.cartButton()

        await cart.validateCart()
        });
            
           
        
}); 
