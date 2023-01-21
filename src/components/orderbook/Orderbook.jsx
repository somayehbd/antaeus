import { useEffect, useState } from "react";
import useOrderbook from "../../hooks/useOrderbook";
import style from "./Orderbook.module.css"
function Orderbook() {
    const [orderbookApiResponse] = useOrderbook()
    const [orderbook, setOrderbook] = useState([])

    function CombineBidAsk(asks, bids) {
        const result = [];

        if (asks == null || asks == undefined)
            return result;

        for (let i = 0; i < asks.length; i++) {
            const item = { ask: asks[i], bid: bids[i] }
            result.push(item)
        }

        return result;

    }

    useEffect(() => {
        const newOrderbook = CombineBidAsk(orderbookApiResponse.asks, orderbookApiResponse.bids);
        setOrderbook(newOrderbook)
    }, [orderbookApiResponse]);

    return (
        <>
            <table class={`table ${style.orderbooktable}`} >
                <thead>
                    <tr>
                        <th >Total Quantity</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th >Total Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orderbook.map(item => {
                            return (<tr key={item.ask.price}>
                                <td>{item.ask.totalQuantity}</td>
                                <td>{item.ask.quantity}</td>
                                <td>{item.ask.price}</td>
                                <td>{item.bid.price}</td>
                                <td>{item.bid.quantity}</td>
                                <td>{item.bid.totalQuantity}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
export default Orderbook;