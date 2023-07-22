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

    it('it should contain first row', () => {
        render(<Price />)
        const table = screen.getByTestId("price")
        const firstRow = table.querySelectorAll("tbody tr")[0]
        const firstRowCells = firstRow.querySelectorAll("td");
        const firstRowText = firstRowCells[0].textContent;
        expect(firstRowText.trim()).toBe('Value');
    })

    it('it should contain second row', () => {
        render(<Price />)
        const table = screen.getByTestId("price")
        const firstRow = table.querySelectorAll("tbody tr")[1]
        const firstRowCells = firstRow.querySelectorAll("td");
        const firstRowText = firstRowCells[0].textContent;
        expect(firstRowText.trim()).toBe('Volume');
    })

    it('it should contain third row', () => {
        render(<Price />)
        const table = screen.getByTestId("price")
        const firstRow = table.querySelectorAll("tbody tr")[2]
        const firstRowCells = firstRow.querySelectorAll("td");
        const firstRowText = firstRowCells[0].textContent;
        expect(firstRowText.trim()).toBe('High Price');
    })

    it('it should contain forth row', () => {
        render(<Price />)
        const table = screen.getByTestId("price")
        const firstRow = table.querySelectorAll("tbody tr")[3]
        const firstRowCells = firstRow.querySelectorAll("td");
        const firstRowText = firstRowCells[0].textContent;
        expect(firstRowText.trim()).toBe('Low Price');
    })

    it('it should contain fifth row', () => {
        render(<Price />)
        const table = screen.getByTestId("price")
        const firstRow = table.querySelectorAll("tbody tr")[4]
        const firstRowCells = firstRow.querySelectorAll("td");
        const firstRowText = firstRowCells[0].textContent;
        expect(firstRowText.trim()).toBe('Close Price');
    })

    it('it should contain sixth row', () => {
        render(<Price />)
        const table = screen.getByTestId("price")
        const firstRow = table.querySelectorAll("tbody tr")[5]
        const firstRowCells = firstRow.querySelectorAll("td");
        const firstRowText = firstRowCells[0].textContent;
        expect(firstRowText.trim()).toBe('Open Price');
    })

    it('it should contain seventh row', () => {
        render(<Price />)
        const table = screen.getByTestId("price")
        const firstRow = table.querySelectorAll("tbody tr")[6]
        const firstRowCells = firstRow.querySelectorAll("td");
        const firstRowText = firstRowCells[0].textContent;
        expect(firstRowText.trim()).toBe('Last Trade Time');
    })

    it('it should contain eigth row', () => {
        render(<Price />)
        const table = screen.getByTestId("price")
        const firstRow = table.querySelectorAll("tbody tr")[7]
        const firstRowCells = firstRow.querySelectorAll("td");
        const firstRowText = firstRowCells[0].textContent;
        expect(firstRowText.trim()).toBe('Markets');
    })
})