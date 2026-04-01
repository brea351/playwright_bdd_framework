import { test, expect } from '@playwright/test';

test('API + UI flow', async ({ request, page }) => {

  // ✅ Step 1: Create user via API
  const apiResponse = await request.post('https://jsonplaceholder.typicode.com/users', {
    data: {
      name: 'Tosin QA',
      email: 'tosin@test.com'
    }
  });

  expect(apiResponse.status()).toBe(201);

  const user = await apiResponse.json();

  // ✅ Step 2: Open UI
  await page.goto('https://www.saucedemo.com/');

  // ✅ Step 3: Validate UI loads
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();

  // ✅ Step 4: Use API data (simulate validation)
  expect(user.name).toBe('Tosin QA');

});