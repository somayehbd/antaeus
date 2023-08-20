import { test, expect } from '@playwright/test';

test('it should contain symbolId', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.waitForLoadState('networkidle')
    const btcUsdtElement = page.getByTestId('symbolId')
    const btcUsdtText = await btcUsdtElement.textContent();
    expect(btcUsdtText).toBe('BTC-USDT');
});

test(' it should display changePrice', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    const changePriceElement = page.getByTestId('changePrice');
    const changePrice = await changePriceElement.textContent();
    const parsedChangePrice = Number(changePrice);
    expect(isNaN(parsedChangePrice)).toBe(false)
})

test(' it should display changePercentage', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    const changePriceElement = page.getByTestId('changePercentage');
    const changePrice = await changePriceElement.textContent();
    const parsedChangePrice = Number(changePrice);
    expect(isNaN(parsedChangePrice)).toBe(false)
})
test(' it should display table', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    const changePriceElement = page.getByTestId('price');
    const tableRowLocators= changePriceElement.locator('tbody tr')
    const rowCount= await tableRowLocators.count();
    const tableCellLocators=tableRowLocators.locator('td');
    const cellCount=await tableCellLocators.count();
    expect(rowCount).toBe(8)
})