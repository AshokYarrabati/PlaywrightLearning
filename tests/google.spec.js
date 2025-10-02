const {test, expect} = require('@playwright/test');

test('Verify application title', async ({page})=>{
    await page.goto("https://google.com");
    const url = page.url();
    //expect(url).toBe()
    console.log("the url is:"+ url);
    const title = await page.title();
     console.log("the title is:"+ title);
     await expect(page).toHaveTitle("Google");
});