const {test, expect} = require('@playwright/test');
const {ScreenshotCapture} = require('../utils/ScreenshotCapture')
 test.use({viewport:{width:1292,height:688}})
test('Login to  the application', async({page})=>{
    const screenshot = new ScreenshotCapture(page);
    await page.goto("https://www.saucedemo.com/")
    await screenshot.captureScreenshot('Login page loaded');
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.locator('#login-button').click();
    await expect(page).toHaveURL(/inventory/)
    await screenshot.captureScreenshot('cart page loaded');
    await page.waitForTimeout(3000)// this is not recommended
    const sauceProduct = page.getByText('Sauce Labs Backpack')
    expect(sauceProduct).toBeVisible();
});