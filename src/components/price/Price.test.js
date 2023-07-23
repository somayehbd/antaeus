import { render, screen } from '@testing-library/react';
import Price from './Price';

describe('Price Component', () => {
    it(' should renders button', () => {
        render(<Price />)
        const symbol = screen.getByText('Buy/Sell')
        expect(symbol).toBeInTheDocument();

    })

    it(' should contain table', () => {
        render(<Price />)
        const table = screen.getByTestId("price")
        expect(table).toBeInTheDocument();

    })

    it('should be Value on 1st row', () => {
        render(<Price />)
        const table = screen.getByTestId("price")
        const firstRow = table.querySelectorAll("tbody tr")[0]
        const firstRowCells = firstRow.querySelectorAll("td");
        const firstRowText = firstRowCells[0].textContent;
        expect(firstRowText.trim()).toBe('Value');
    })

    it('should be Volume on 2nd row', () => {
        render(<Price />)
        const table = screen.getByTestId("price")
        const firstRow = table.querySelectorAll("tbody tr")[1]
        const firstRowCells = firstRow.querySelectorAll("td");
        const firstRowText = firstRowCells[0].textContent;
        expect(firstRowText.trim()).toBe('Volume');
    })

    it('should be High Price on 3rd row', () => {
        render(<Price />)
        const table = screen.getByTestId("price")
        const firstRow = table.querySelectorAll("tbody tr")[2]
        const firstRowCells = firstRow.querySelectorAll("td");
        const firstRowText = firstRowCells[0].textContent;
        expect(firstRowText.trim()).toBe('High Price');
    })

    it('should be Low Price on 4st row', () => {
        render(<Price />)
        const table = screen.getByTestId("price")
        const firstRow = table.querySelectorAll("tbody tr")[3]
        const firstRowCells = firstRow.querySelectorAll("td");
        const firstRowText = firstRowCells[0].textContent;
        expect(firstRowText.trim()).toBe('Low Price');
    })

    it('should be Close Price on 5st row', () => {
        render(<Price />)
        const table = screen.getByTestId("price")
        const firstRow = table.querySelectorAll("tbody tr")[4]
        const firstRowCells = firstRow.querySelectorAll("td");
        const firstRowText = firstRowCells[0].textContent;
        expect(firstRowText.trim()).toBe('Close Price');
    })

    it('should be Open Price on 6st row', () => {
        render(<Price />)
        const table = screen.getByTestId("price")
        const firstRow = table.querySelectorAll("tbody tr")[5]
        const firstRowCells = firstRow.querySelectorAll("td");
        const firstRowText = firstRowCells[0].textContent;
        expect(firstRowText.trim()).toBe('Open Price');
    })

    it('it should be Last Trade Time on 7st row', () => {
        render(<Price />)
        const table = screen.getByTestId("price")
        const firstRow = table.querySelectorAll("tbody tr")[6]
        const firstRowCells = firstRow.querySelectorAll("td");
        const firstRowText = firstRowCells[0].textContent;
        expect(firstRowText.trim()).toBe('Last Trade Time');
    })

    it('should be Markets on 9st row', () => {
        render(<Price />)
        const table = screen.getByTestId("price")
        const firstRow = table.querySelectorAll("tbody tr")[7]
        const firstRowCells = firstRow.querySelectorAll("td");
        const firstRowText = firstRowCells[0].textContent;
        expect(firstRowText.trim()).toBe('Markets');
    })
})