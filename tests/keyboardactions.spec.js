const {test} = require('@playwright/test')

test('keyboard actions', async({page})=>{

   await page.goto('https://google.com')
   await page.locator("textarea[name='q']").focus()
   await page.keyboard.type('Mukesh Otwani!')
   await page.keyboard.press('ArrowLeft')
   await page.keyboard.down("Shift")
   for(let i=0;i<6;i++){
    await page.keyboard.press('ArrowLeft')
   }
   await page.keyboard.up("Shift")
   await page.keyboard.press("Backspace")

  /* //await page.keyboard.press('Enter')
   await page.keyboard.press('Control+A')
   //await page.waitForTimeout('2000')
   await page.keyboard.press('Control+C')
   await page.keyboard.press('Backspace')
   await page.keyboard.press('Control+V')*/
})