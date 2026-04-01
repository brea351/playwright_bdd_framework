import { Given, When, Then } from '@cucumber/cucumber';
import { page } from '../hooks/hooks';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';
import { users } from '../utils/testData';
import { createUser } from '../utils/apiHelper';
import { request } from '@playwright/test';
import assert from 'assert';

// API Step (UPDATED)
Given('I create a user via API', async function () {

  const apiContext = await request.newContext();

  const user = await createUser(apiContext);

  // store user for later use
  this.user = user;

  console.log('Created user:', user);

});

// Login Step (no change)
Given('I am logged into the application', async function () {

  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await page.waitForLoadState('load');

  await loginPage.login(users.standard.username, users.standard.password);

  await page.waitForURL(/inventory/);

});

//  Action Step (no change)
When('I add a backpack to the cart', async function () {

  const inventoryPage = new InventoryPage(page);

  await inventoryPage.addBackpackToCart();
  await page.waitForSelector('.shopping_cart_badge');

});

//  Assertion Step (UPDATED)
Then('the cart should contain the item', async function () {

  // access stored API user
  console.log('Using API user:', this.user);

  const inventoryPage = new InventoryPage(page);
  const count = await inventoryPage.getCartCount();

  assert.strictEqual(count, '1');

});