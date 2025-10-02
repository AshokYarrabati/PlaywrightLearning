const { test, expect } = require('@playwright/test');
const testData = JSON.parse(JSON.stringify(require('../LoginData.json')))

test.describe('Data driven tests', function () {

    for (const data of testData) {

        test.describe(`Login with the user ${data.id}`, function () {
            test('Login to the application', async ({ page }) => {
                await page.goto('https://freelance-learn-automation.vercel.app/login')
                //const jsonFileRead = new JsonReader()
                //const user = await JsonReader.getTestDataByUserName("./testdata.json", "ashok@gmail.com")
                await page.locator("//input[@id='email1']").fill(data.username)
                await page.locator("//input[@id='password1']").fill(data.password)

            });
        })
    }
})