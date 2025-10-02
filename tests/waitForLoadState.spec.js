const { test, expect } = require('@playwright/test')

test('Wait for load state', async({page})=>{
    await page.goto('https://freelance-learn-automation.vercel.app/login')
    await page.getByText('New user? Signup').click()
    await page.waitForLoadState('networkidle')
    const checkboxCount = await page.locator("//input[@type='checkbox']").count()
    expect(checkboxCount).toBe(7)
})