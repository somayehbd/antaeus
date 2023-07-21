import { test, expect } from '@playwright/test';

test('it should contain 5 table rows', async ({ page }) => {

  await page.goto('http://localhost:3000/', { timeout: 60000 });
  await page.waitForURL('https://ids.kub.aghdam.nl/Account/Login**', { timeout: 120000 });

  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').type('logon');

  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').type('Pass123$');

  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForURL('http://localhost:3000/');
  await page.waitForLoadState('networkidle');

  const rowsLocator = page.locator("[class*='Orderbook_orderbooktable'] tbody tr ");
  const rowsCount = await rowsLocator.count();

  for (let i = 0; i < rowsCount; i++) {
    console.log(`Row number: ${i + 1}`);
    const rowLocator = rowsLocator.nth(i);

    const cellsLocator = rowLocator.locator("td");
    const sum = await cellsLocator.count()

    for (let j = 0; j < 6; j++) {
      const cellContent = await cellsLocator.nth(j).textContent();
      const parsedNumber = Number(cellContent);
      expect(isNaN(parsedNumber)).toBe(false);
    }
  }

  expect(rowsCount).toEqual(5);

});