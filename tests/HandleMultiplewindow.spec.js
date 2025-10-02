const { test, expect } = require('@playwright/test')

test('Handle multiple windows', async ({ browser }) => {

    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://freelance-learn-automation.vercel.app/login')
    const [newPage] = await Promise.all(
        [
            context.waitForEvent("page"),
            page.locator("(//a[contains(@href,'facebook')])[1]").click()
        ]// these promises need to be fulfilled to create a new promise
    )

    await newPage.locator("(//input[@name='email'])[2]").clear()
    await newPage.locator("(//input[@name='email'])[2]").fill("tester@gmail.com")
    await newPage.close()
    await page.locator("//input[@type='email']").fill("admin@gmail.com")
})