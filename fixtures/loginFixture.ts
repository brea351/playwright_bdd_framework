import { test as base } from '@playwright/test';
import { Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

type MyFixtures = {
  loggedInPage: Page;
};

export const test = base.extend<MyFixtures>({
  loggedInPage: async ({ page }, use) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');

    await use(page);
  }
});