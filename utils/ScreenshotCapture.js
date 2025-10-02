const { allure } = require('allure-playwright');
const {test} = require('@playwright/test')

class ScreenshotCapture {
    constructor(page) {
        this.page = page;
    }

    async captureScreenshot(stepName, options = {}) {
        const screenshotBuffer = await this.page.screenshot({
            fullPage: options.fullPage || true,
            ...options
        });

        allure.step(stepName, () => {
            allure.attachment(stepName, screenshotBuffer, 'image/png');
        });

        return screenshotBuffer;
    }

    async captureElementScreenshot(selector, stepName) {
        const element = await this.page.$(selector);
        const screenshotBuffer = await element.screenshot();

        allure.step(stepName, () => {
            allure.attachment(stepName, screenshotBuffer, 'image/png');
        });

        return screenshotBuffer;
    }

    async captureFailureScreenshot(errorMessage) {
        const screenshotBuffer = await this.page.screenshot({ fullPage: true });
        
        allure.step(`Failure Screenshot: ${errorMessage}`, () => {
            allure.attachment(`Failure - ${errorMessage}`, screenshotBuffer, 'image/png');
        });

        return screenshotBuffer;
    }

    // One-liner helper
async takeScreenshot(page, stepName) {
    const screenshotBuffer = await page.screenshot({ fullPage: true });
    allure.step(stepName, () => {
        allure.attachment(stepName, screenshotBuffer, 'image/png');
    });
}
}

module.exports={ScreenshotCapture}
