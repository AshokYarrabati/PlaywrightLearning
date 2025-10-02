const { expect } = require("@playwright/test")
const {HomePage} = require('../pages/homepage')

class LoginPage{
    constructor(page){
        this.page = page;
        this.username = "#email1"
        this.password = "#password1"
        this.signinBtn = "//button[@type='submit']"
    }

    async loginToApplication(){
        await this.page.fill(this.username, "yarrabatiashok411@gmail.com")
        await this.page.fill(this.password, "Playwright123@")
        await this.page.click(this.signinBtn)
        //return new HomePage(this.page)
    }

    async verifyEmailIsDisplayed(){
        await expect(this.page.locator(this.username)).toBeVisible();
    }
}

export { LoginPage } 