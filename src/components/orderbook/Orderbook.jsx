
import React, { useState, useEffect } from 'react';
import CONFIG from '../../config';
import style from "./Orderbook.module.css"

function Orderbook() {

    const [data, setData] = useState({});


    useEffect(() => {
        const accessToken = localStorage.getItem('Token')
        fetch(`${CONFIG.BASE_ADDRESS}/MarketData/Bestlimit/BTC-USDT`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
            .then(response => {
                if (response.status === 401)
                    window.location.href = `${CONFIG.BASE_ADDRESS}/bff/login`;

                return response.json();
            })
            .then(data => {
                setData(data.data)

            })
            .catch(error => {
                console.error(error);
            })

    }, [])


    return (
        <table data-testid="orderbook" className={`table ${style.orderbooktable}`} >
            <thead>
                <tr>
                    <th>Total Quantity</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total Quantity</th>
                </tr>
            </thead>
            <tbody>
                {data.asks && data.bids &&
                    data.asks.map((item, index) => {
                        return <tr key={index}>
                            <td>{item.totalQuantity}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                            <td>{data.bids[index] === undefined ? 0 : data.bids[index].price}</td>
                            <td>{data.bids[index] === undefined ? 0 : data.bids[index].quantity}</td>
                            <td>{data.bids[index] === undefined ? 0 : data.bids[index].totalQuantity}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}
export default Orderbook;
