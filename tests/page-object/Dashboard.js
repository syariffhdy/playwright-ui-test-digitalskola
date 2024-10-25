const { expect } = require('@playwright/test');


export class Dashboard{
    constructor (page){
        this.page = page;
         
        this.titlePage = page.getByText('Swag Labs', { exact: true });
        this.buttonMenu = page.getByRole('button', { name: 'Open Menu', exact: true });

        this.itemclick1 = page.locator('[id="add-to-cart-sauce-labs-backpack"]')
        this.itemclick2 = page.locator('[id="add-to-cart-sauce-labs-bike-light"]')
        this.itemclick3 = page.locator('[id="add-to-cart-sauce-labs-bolt-t-shirt"]')
        this.itemclick4 = page.locator('[id="add-to-cart-sauce-labs-fleece-jacket"]')
        this.itemclick5 = page.locator('[id="add-to-cart-sauce-labs-onesie"]')
        this.itemclick6 = page.locator('[id="add-to-cart-test.allthethings()-t-shirt-(red)"]')

        this.buttonCart = page.locator('[id="shopping_cart_container"]')
    }

    async validateLogin(){
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html')
        await expect(this.titlePage).toBeVisible()
        await expect(this.buttonMenu).toBeVisible()
    }

    async itemAddtoCart1(){
       await this.itemclick1.click()
    }
    async itemAddtoCart2(){
       await this.itemclick2.click()
    }
    async itemAddtoCart3(){
      await this.itemclick3.click()
    }
    async itemAddtoCart4(){
      await this.itemclick4.click()
    }
    async itemAddtoCart5(){
      await this.itemclick5.click()
    }
    async itemAddtoCart6(){
     await this.itemclick6.click()
    }
    async cartButton(){
      await this.buttonCart.click()
    }
}
module.exports = { Dashboard }