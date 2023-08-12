import { render, screen } from '@testing-library/react'
import Report from './Report'

describe('Report component', () => {
    it('should return "Order" button', () => {
        render(<Report />)
        const ordersButton = screen.getByText('Orders')
        expect(ordersButton).toBeInTheDocument();
    })

})
