const { expect } = require('@playwright/test');
export class Cart{
    constructor(page){
        this.page = page;

        this.item1 = page.getByText(process.env.ITEMTEXT1, { exact: true })
        this.item2 = page.getByText(process.env.ITEMTEXT2, { exact: true })
        this.item3 = page.getByText(process.env.ITEMTEXT3, { exact: true })
        this.item4 = page.getByText(process.env.ITEMTEXT4, { exact: true })
        this.item5 = page.getByText(process.env.ITEMTEXT5, { exact: true })
        this.item6 = page.getByText(process.env.ITEMTEXT6, { exact: true })
    }

    async validateCart(){
        await expect(this.page).toHaveURL(process.env.CARTURL)
        
        await expect(this.item1).toBeVisible()
        await expect(this.item2).toBeVisible()
        await expect(this.item3).toBeVisible()
        await expect(this.item4).toBeVisible()
        await expect(this.item5).toBeVisible()
        await expect(this.item6).toBeVisible()
        await expect(this.page).toHaveScreenshot('CartPage.png')
    }
}
module.exports = { Cart }