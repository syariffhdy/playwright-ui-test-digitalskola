const { expect } = require('@playwright/test');


export class Dashboard{
    constructor (page){
        this.page = page;
         
        this.titlePage = page.getByText(process.env.TITLE, { exact: true });
        this.buttonMenu = page.getByRole('button', { name: process.env.BUTTONMENU, exact: true });

        this.itemclick1 = page.locator(process.env.IDITEM1)
        this.itemclick2 = page.locator(process.env.IDITEM2)
        this.itemclick3 = page.locator(process.env.IDITEM3)
        this.itemclick4 = page.locator(process.env.IDITEM4)
        this.itemclick5 = page.locator(process.env.IDITEM5)
        this.itemclick6 = page.locator(process.env.IDITEM6)

        this.buttonCart = page.locator(process.env.BUTTONCART)
    }

    async validateLogin(){
        await expect(this.page).toHaveURL(process.env.DASHBOARDURL)
        await expect(this.page).toHaveScreenshot('DashboardPage.png')
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
    async AddAllItem(){
      await this.itemAddtoCart1()
      await this.itemAddtoCart2()
      await this.itemAddtoCart3()
      await this.itemAddtoCart4()
      await this.itemAddtoCart5()
      await this.itemAddtoCart6()
      await this.cartButton()
    }
}
module.exports = { Dashboard }