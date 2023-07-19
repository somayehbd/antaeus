import { test, expect } from '@playwright/test';

test('it should contain 5 table rows', async ({ page }) => {

  await page.goto('http://localhost:3000/', { timeout: 60000 });
  await page.waitForURL('https://ids.kub.aghdam.nl/Account/Login**', { timeout: 70000 });

  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').type('logon');

  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').type('Pass123$');

  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForURL('http://localhost:3000/');
  await page.waitForLoadState('networkidle');

  const elementsLocator = page.locator("[class*='Orderbook_orderbooktable'] tbody tr ");
  const rowsCount = await elementsLocator.count();

  for (let i = 0; i < rowsCount; i++) {
    const row = await elementsLocator.nth(i).innerText();
    console.log( 'Element at index =====>', row);

  }

  expect(rowsCount).toEqual(5);
  
});