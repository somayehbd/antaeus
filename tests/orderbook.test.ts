import { test, expect } from '@playwright/test';

test('it should contain 5 table rows', async ({ page }) => {
  await page.goto('http://localhost:3000/', { timeout: 60000 });
  await page.waitForLoadState('networkidle');

  const rowLocators = page.getByTestId('orderbook').locator("tbody tr");
  const rowsCount = await rowLocators.count();
  for (let i = 0; i < rowsCount; i++) {
    const rowLocator = rowLocators.nth(i);
    const cellsLocator = rowLocator.locator("td");
    const cellsCount = await cellsLocator.count()

    for (let j = 0; j < 6; j++) {
      const cellContent = await cellsLocator.nth(j).textContent();
      const parsedNumber = Number(cellContent);
      expect(isNaN(parsedNumber)).toBe(false);
    }

    expect(rowsCount).toEqual(5);
    expect(cellsCount).toEqual(6);

  }
});