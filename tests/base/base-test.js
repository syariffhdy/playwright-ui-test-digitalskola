const { test } = require('@playwright/test');
const { loginPage } = require("../page-object/loginPage");
const { Dashboard } = require('../page-object/Dashboard');
const { Cart } = require('../page-object/Cart');

export const testCostum = test.extend({
    loginpage: async ({ page }, use) => {
        await use(new loginPage(page))
    },
    dashboard: async ({ page }, use) => {
        await use(new Dashboard(page))
    },
    cart: async ({ page }, use) => {
        await use(new Cart(page))
    },
})