const {test} = require('@playwright/test')

test('Handle Auto suggestions', async({page})=>{
    await page.goto("https://google.com")
    await page.locator("textarea[name='q']").fill("Mukesh Otwani!")
    await page.waitForSelector("//li[@role='presentation']")
    // await page.keyboard.press("ArrowDown")
    // await page.keyboard.press("ArrowDown")
    // await page.keyboard.press("Enter")
    const elements = await page.$$("//li[@role='presentation']")
    for(let i=0;i<elements.length;i++){
        const element = await elements[i].textContent()
        if(element.includes('playwright')){
            await elements[i].click()
            break
        }
    }

})