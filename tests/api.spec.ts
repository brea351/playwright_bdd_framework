import { test, expect } from '@playwright/test';

test('GET users API', async ({ request }) => {

  const response = await request.get('https://jsonplaceholder.typicode.com/users');

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.length).toBeGreaterThan(0);
  expect(body[0]).toHaveProperty('email');

});

test('POST create user API', async ({ request }) => {

  const response = await request.post('https://jsonplaceholder.typicode.com/users', {
    data: {
      name: 'Tosin QA',
      email: 'tosin@test.com'
    }
  });

  //  Status check
  expect(response.status()).toBe(201);

  const body = await response.json();

  //  Validate response
  expect(body.name).toBe('Tosin QA');
  expect(body.email).toBe('tosin@test.com');

});