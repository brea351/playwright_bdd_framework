import { Given, When, Then } from '@cucumber/cucumber';
import { page } from '../hooks/hooks';
import { LoginPage } from '../pages/loginPage';
import assert from 'assert';

Given('I open the login page', async function () {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
});

// ✅ dynamic login (FIXED)
When('I login with {string} and {string}', async function (username, password) {

  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await page.waitForLoadState('load');

  await loginPage.login(username, password);

});

// ✅ restore invalid step
When('I login with invalid credentials', async function () {

  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await page.waitForLoadState('load');

  await loginPage.login('invalid_user', 'wrong_password');

});

Then('I should see an error message', async function () {

  const errorMessage = await page.locator('[data-test="error"]').textContent();

  assert(errorMessage?.includes('Username and password do not match'));

});