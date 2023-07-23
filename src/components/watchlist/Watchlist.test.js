import { render, screen } from '@testing-library/react';
import Watchlist from './Watchlist';

describe('whatchlist', () => {

    it('should have a select element', () => {
        render(<Watchlist />)
        const select = screen.getByTestId('select');
        expect(select).toBeInTheDocument();
    })

    it('hould have an "Add" button ', () => {
        render(<Watchlist />)
        const addButton = screen.getByTestId('addbutton')
        expect(addButton).toBeInTheDocument();
    })

    it('should have a "Delete" button ', () => {
        render(<Watchlist />)
        const deleteButton = screen.getByTestId('deletebutton')
        expect(deleteButton).toBeInTheDocument();
    })

    it('should have an "Edit" button ', () => {
        render(<Watchlist />)
        const editButton = screen.getByTestId('editbutton')
        expect(editButton).toBeInTheDocument();
    })

    it('should have a "Symbol" table header (th)', () => {
        render(<Watchlist />)
        const table = screen.getByTestId('table')
        const th = table.querySelectorAll('thead tr th')[0].textContent
        expect(th).toBe('Symbol');
    })

    it('should have a "Buy" table header (th)', () => {
        render(<Watchlist />)
        const table = screen.getByTestId('table')
        const th = table.querySelectorAll('thead tr th')[1].textContent
        expect(th).toBe('Buy');
    })

    it('should have a "Sell" table header (th)', () => {
        render(<Watchlist />)
        const table = screen.getByTestId('table')
        const th = table.querySelectorAll('thead tr th')[2].textContent
        expect(th).toBe('Sell');
    })

    it('should have a "LastPrice" table header (th)', () => {
        render(<Watchlist />)
        const table = screen.getByTestId('table')
        const th = table.querySelectorAll('thead tr th')[3].textContent
        expect(th).toBe('LastPrice');
    })
})