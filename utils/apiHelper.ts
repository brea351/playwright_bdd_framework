import { APIRequestContext } from '@playwright/test';

export async function createUser(request: APIRequestContext) {
  const response = await request.post('https://jsonplaceholder.typicode.com/users', {
    data: {
      name: 'Tosin QA',
      email: 'tosin@test.com'
    }
  });

  return await response.json();
}