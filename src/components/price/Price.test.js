import { render,screen } from '@testing-library/react';
import Price from './Price';

describe('Price Component', () => {
    it(' should renders button',() => {
        render(<Price />)
        const symbol  = screen.getByText('Buy/Sell')
        expect(symbol).toBeInTheDocument();
       
    })

    it(' should renderssymbol Name',() => {
        render(<Price />)
        const symbolName  = screen.getByText('BTC-USDT')
        expect(symbolName).toBeInTheDocument();
       
    })
})