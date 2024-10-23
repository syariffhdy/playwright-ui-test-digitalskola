const { test, expect } = require('@playwright/test');
const LoggedInURL = 'https://www.saucedemo.com/';
const successfullyLoggedInURL = 'https://www.saucedemo.com/inventory.html';
const cartPage = 'https://www.saucedemo.com/cart.html'

test.describe('Saucedemo Test', () => {
    test('Successful Login', async ({ page }) => {
        await page.goto(LoggedInURL)
        await page.locator('[id="user-name"]').fill("standard_user")
        await page.locator('[id="password"]').fill("secret_sauce")
        await page.locator('[id="login-button"]').click()

        //wait expect(page.locator('status')).toHaveText('Submitted');
        await expect(page).toHaveURL(successfullyLoggedInURL);
        await expect(page.getByText('Swag Labs', { exact: true })).toBeVisible()
        await expect(page.getByRole('button', { name: 'Open Menu', exact: true })).toBeVisible()

        });
        test('Add to Cart Test', async ({ page }) => {
        await page.goto(LoggedInURL)
        await page.locator('[id="user-name"]').fill("standard_user")
        await page.locator('[id="password"]').fill("secret_sauce")
        await page.locator('[id="login-button"]').click()

        await page.locator('[id="add-to-cart-sauce-labs-backpack"]').click()
        await page.locator('[id="add-to-cart-sauce-labs-bike-light"]').click()
        await page.locator('[id="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        await page.locator('[id="add-to-cart-sauce-labs-fleece-jacket"]').click()
        await page.locator('[id="add-to-cart-sauce-labs-onesie"]').click()
        await page.locator('[id="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
        await page.locator('[id="shopping_cart_container"]').click()

        await expect(page).toHaveURL(cartPage);
        await expect(page.getByText('Sauce Labs Backpack', { exact: true })).toBeVisible()
        await expect(page.getByText('Sauce Labs Bike Light', { exact: true })).toBeVisible()
        await expect(page.getByText('Sauce Labs Fleece Jacket', { exact: true })).toBeVisible()
        await expect(page.getByText('Sauce Labs Bolt T-Shirt', { exact: true })).toBeVisible()
        await expect(page.getByText('Sauce Labs Onesie', { exact: true })).toBeVisible()
        await expect(page.getByText('Test.allTheThings() T-Shirt (Red)', { exact: true })).toBeVisible()
        });
            
           
        
}); 
