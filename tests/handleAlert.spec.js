const {test, expect} = require('@playwright/test')

test('handle alert', async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    page.on("dialog", async(d)=>{
        expect(d.type()).toContain('alert')
        expect(d.message()).toContain('I am a JS Alert')
        await d.accept()
    })
    await page.locator("//button[text()='Click for JS Alert']").click()
})