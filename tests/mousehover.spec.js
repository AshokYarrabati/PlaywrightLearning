const {test, expect} = require('@playwright/test');

test('mouse hover action', async({page})=>{
    await page.goto('https://freelance-learn-automation.vercel.app/login')
    await page.getByPlaceholder('Enter Email').fill('yarrabatiashok411@gmail.com')
    await page.getByPlaceholder('Enter Password').fill('Playwright123@')
    await page.getByRole('button',{name:'Sign in'}).click()
    await page.locator("//span[text()='Manage']").click();
    await page.locator("//a[normalize-space()='Manage Course']").hover();

})