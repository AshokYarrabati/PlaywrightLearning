const { test, expect } = require('@playwright/test')
const {LoginPage } = require('../pages/LoginPage.js')
const { HomePage } = require('../pages/homepage.js')

test('Login with POM', async({page})=>{
   await page.goto('https://freelance-learn-automation.vercel.app/login')
   const loginPages = new LoginPage(page)
   await loginPages.loginToApplication()
   const homePage = new HomePage(page)
   await homePage.verifyJavaForTesterText()
   await homePage.selectMenu()
   await homePage.selectSignout()
   await loginPages.verifyEmailIsDisplayed()
})