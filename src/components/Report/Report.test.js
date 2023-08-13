import { render, screen } from '@testing-library/react'
import Report from './Report'

describe('Report component', () => {
    it('should return "Order" button', () => {
        render(<Report />)
        const ordersButton = screen.getByRole("tab", { name: "orders" });
        expect(ordersButton).not.toBeNull();
    });

    it('should return "Order" button', () => {
        render(<Report />)
        const transactionsButton = screen.getByRole('tab',{name:"transactions"})
        expect(transactionsButton).not.toBeNull();
    })

    it('should return first th of table', () => {
        render(<Report />)
        const table = screen.getByTestId('table')
        const th = table.querySelectorAll('thead tr th')[0]
        expect(th).toHaveTextContent('Symbol');
    })
    it('should return second th of table', () => {
        render(<Report />)
        const table = screen.getByTestId('table')
        const th = table.querySelectorAll('thead tr th')[1]
        expect(th).toHaveTextContent('Quantity');
    })
    it('should return third th of table', () => {
        render(<Report />)
        const table = screen.getByTestId('table')
        const th = table.querySelectorAll('thead tr th')[2]
        expect(th).toHaveTextContent('Price');
    })
    it('should return fourth th of table', () => {
        render(<Report />)
        const table = screen.getByTestId('table')
        const th = table.querySelectorAll('thead tr th')[3]
        expect(th).toHaveTextContent('Order Side');
    })
    it('should return fifth th of table', () => {
        render(<Report />)
        const table = screen.getByTestId('table')
        const th = table.querySelectorAll('thead tr th')[4]
        expect(th).toHaveTextContent('Created At');
    })
    it('should return sixth th of table', () => {
        render(<Report />)
        const table = screen.getByTestId('table')
        const th = table.querySelectorAll('thead tr th')[5]
        expect(th).toHaveTextContent('Updated At');
    })
    it('should return seventh th of table', () => {
        render(<Report />)
        const table = screen.getByTestId('table')
        const th = table.querySelectorAll('thead tr th')[6]
        expect(th).toHaveTextContent('Status');
    })
})
