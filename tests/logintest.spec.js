const {test, expect} = require('@playwright/test');
const testData = JSON.parse(JSON.stringify(require('../testdata.json')))
const { JsonReader } = require('../utils/jsonReader.js')

test('Login to the application', async({page})=>{
    await page.goto('https://freelance-learn-automation.vercel.app/login')
    //const jsonFileRead = new JsonReader()
    const user = await JsonReader.getTestDataByUserName("./testdata.json","ashok@gmail.com")
    await page.locator("//input[@id='email1']").fill(user.username)
    await page.locator("//input[@id='password1']").fill(user.password)
    await page.waitForTimeout(2000)
})