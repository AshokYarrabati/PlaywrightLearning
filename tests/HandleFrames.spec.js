const {test, expect} = require('@playwright/test')

test('Handle Iframes', async({page})=>{
    await page.goto("https://docs.oracle.com/javase/8/docs/api")
    const frame = page.frameLocator("//frame[@name='packageListFrame']")
    await frame.locator("//a[text()='java.applet']").click()
    await page.waitForTimeout(1000)
})