import { render, screen } from '@testing-library/react';
import Orderbook from './Orderbook';

describe('Orderbook', () => {
    it('should contain a table', () => {
        render(<Orderbook />);
        const table = screen.getByTestId('orderbook')
        expect(table).toBeInTheDocument;
    })

    it('should contain 6 table headers (th)', () => {
        render(<Orderbook />);
        const table = screen.getByTestId('orderbook');
        const ths = table.querySelectorAll('thead th').length;
        expect(ths).toBe(6);

    })

    it('first table header should be Total Quantity', () => {
        render(<Orderbook />);
        const table = screen.getByTestId('orderbook');
        const title = table.querySelectorAll('thead th')[0].textContent;
        expect(title).toBe('Total Quantity');
    })

    it('second table header should be Quantity', () => {
        render(<Orderbook />);
        const table = screen.getByTestId('orderbook');
        const title = table.querySelectorAll('thead th')[1].textContent;
        expect(title).toBe('Quantity');
    })
    it('3rd table header should be Price', () => {
        render(<Orderbook />);
        const table = screen.getByTestId('orderbook');
        const title = table.querySelectorAll('thead th')[2].textContent;
        expect(title).toBe('Price');
    })

    it('4th table header should be Price', () => {
        render(<Orderbook />);
        const table = screen.getByTestId('orderbook');
        const title = table.querySelectorAll('thead th')[3].textContent;
        expect(title).toBe('Price');
    })

    it('5th table header should be Quantity', () => {
        render(<Orderbook />);
        const table = screen.getByTestId('orderbook');
        const title = table.querySelectorAll('thead th')[4].textContent;
        expect(title).toBe('Quantity');
    })

    it('6th table header should be Total Quantity', () => {
        render(<Orderbook />);
        const table = screen.getByTestId('orderbook');
        const title = table.querySelectorAll('thead th')[5].textContent;
        expect(title).toBe('Total Quantity');
    })
})

