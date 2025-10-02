const { expect } = require('@playwright/test')
const { LoginPage } = require('./LoginPage.js')
class HomePage{
    constructor(page){
        this.page = page;
        this.altMenu = "//img[@alt='menu']"
        this.signout = "//button[text()='Sign out']"
    }

    async selectMenu(){
        await this.page.click(this.altMenu)
    }

    async selectSignout(){
        await this.page.click(this.signout)
        // Dynamic import - loads LoginPage only when this method runs
        // const { LoginPage } = require('./LoginPage.js')
        // return new LoginPage(this.page)
    }

    async verifyJavaForTesterText(){
        await expect(this.page.locator("//h2[text()='Java For Tester']")).toBeVisible()
    }
}

module.exports={HomePage}