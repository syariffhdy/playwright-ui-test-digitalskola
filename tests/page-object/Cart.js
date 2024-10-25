const { expect } = require('@playwright/test');
export class Cart{
    constructor(page){
        this.page = page;

        this.item1 = page.getByText('Sauce Labs Backpack', { exact: true })
        this.item2 = page.getByText('Sauce Labs Bike Light', { exact: true })
        this.item3 = page.getByText('Sauce Labs Fleece Jacket', { exact: true })
        this.item4 = page.getByText('Sauce Labs Bolt T-Shirt', { exact: true })
        this.item5 = page.getByText('Sauce Labs Onesie', { exact: true })
        this.item6 = page.getByText('Test.allTheThings() T-Shirt (Red)', { exact: true })
    }

    async validateCart(){
        await expect(this.page).toHaveURL('https://www.saucedemo.com/cart.html')
        
        await expect(this.item1).toBeVisible()
        await expect(this.item2).toBeVisible()
        await expect(this.item3).toBeVisible()
        await expect(this.item4).toBeVisible()
        await expect(this.item5).toBeVisible()
        await expect(this.item6).toBeVisible()
    }
}
module.exports = { Cart }