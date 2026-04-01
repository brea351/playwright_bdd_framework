import { test } from '../fixtures/loginFixture';
import { expect } from '@playwright/test';
import { InventoryPage } from '../pages/inventoryPage';

test('user can add item to cart', async ({ loggedInPage }) => {

  const inventoryPage = new InventoryPage(loggedInPage);

  await expect(loggedInPage).toHaveURL(/inventory/);

  await inventoryPage.addBackpackToCart();

});