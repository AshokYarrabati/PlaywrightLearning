import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="inventory-sidebar-link"]').click();
  await page.locator('[data-test="logout-sidebar-link"]').click();

  // notes: npx playwright codegen --help to list down all the supported commands
  // in order to executed the test on specific browser that can be defined as
  // npx playwright codegen {url} -o (where spec file is created) .tests/codegen.spec.js, so that generated file will be pasted in this dir
  // to execute the test on the specified browser then use below command:
  // npx playwright codegen {url} -o {output file} --channel=chrome
  // using --retries keyword, we can execute the tests multiple times based on the count in pw.config.js
  // same keyword is given at the time of running the test as npx playwright test --headed --retries=2
});