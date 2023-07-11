import { test, expect } from '@playwright/test';

test('Verify Orderbook', async ({ page }) => {

  await page.goto('http://localhost:3000/', { timeout: 60000 });
  await page.waitForURL('https://ids.kub.aghdam.nl/Account/Login**', { timeout: 70000 });

  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').type('logon');

  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').type('Pass123$');

  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForURL('http://localhost:3000/');
  await page.waitForLoadState('networkidle');

  const element = page.locator("[class*='Orderbook_orderbooktable'] tr");
  const rows= await element.count()
  expect(rows).toEqual(6);
});