const {test, expect} = require('@playwright/test');

test('Select value from a dropdown', async({page})=>{
    /*
       visible text: priority1
       value: priority2
       index: Priority 3
    */
    await page.goto('https://freelance-learn-automation.vercel.app/signup')
    await page.locator('#state').selectOption({label:"Goa"})
    await page.waitForTimeout(1000)
    await page.locator('#state').selectOption({value:"Andhra Pradesh"})
    await page.waitForTimeout(2000)
    await page.locator('#state').selectOption({index:4})
    await page.waitForTimeout(3000)
});

test('Validate Kerala present in dropdwon', async({page})=>{
    /*
       visible text: priority1
       value: priority2
       index: Priority 3
    */
    await page.goto('https://freelance-learn-automation.vercel.app/signup')
    await page.locator('#state').selectOption({label:"Goa"})
    const allStates = await page.locator('#state').textContent()
    console.log("All states: " + allStates)
    await expect(allStates.includes('Kerala')).toBeTruthy();
    //await expect(page.locator('#state')).toHaveText(/JUU/)
    let state = await page.$('#state')
    let allStateValues = await state.$$('option')
    let ddStatus = false
    for(let i=0;i<allStateValues.length;i++){
        let element = allStateValues[i]
        let stateName = await element.textContent()
        console.log("State name is: " + stateName)
        if(stateName.includes("Kerala")){
            ddStatus=true
            break
        }
    }
    expect(ddStatus).toBeTruthy(); 

    await page.locator('#hobbies').selectOption(['Playing','Swimming'])
    await page.waitForTimeout(2000)

    // Notes: we can also run test file in below way
    // npx playwright test dropdown (we need not to specify the complete file name with folder structure, hence just passed partial file name)
    // npx playwright test -g "testName" --headed (this way, if there are multiple tests are found in spec file, if u want to execute specific test then we should use this command)
    
})