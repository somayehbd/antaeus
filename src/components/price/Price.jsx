import React, { useState, useEffect } from 'react'
import CONFIG from '../../config';
import style from "./Price.module.css"

function Price() {

    const [data, setData] = useState({})

    useEffect(() => {
        const accessToken = localStorage.getItem('Token')
        fetch(`${CONFIG.BASE_ADDRESS}/MarketData/Symbol/Price/BTC-USDT`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
            .then(response => {
                if (response.status === 401)
                    window.location.href = `${CONFIG.BASE_ADDRESS}/bff/login`;
                return response.json()
            })
            .then(data => {
                setData(data.data)
            })
            .then(error => {
                console.error()
            })
    }, [])

    return (

        <>
            <div className="row">
                <div className="col-6">
                    <h1 className={style.symbol} data-testid="symbolId">{data.symbolId}</h1>
                    <p>
                        <span className={style.middletxt} data-testid="changePrice">{data.changePrice}</span>
                        <span className={`${style.changePercentageText} ${style.redtxt}`} data-testid="changePercentage">{data.changePercentage}</span>
                    </p>
                </div>
                <div className="col-6">
                    <div className={style.buttonContainer}> <button className={style.rightbutton}>Buy/Sell</button></div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <table data-testid="price" className={`table ${style.priceTable}`}>
                        <tbody>
                            <tr>
                                <td>Value</td>
                                <td>{data.volumeValue}</td>
                            </tr>
                            <tr>
                                <td>Volume</td>
                                <td>{data.volume}</td>
                            </tr>
                            <tr>
                                <td>High Price</td>
                                <td>{data.highPrice}</td>
                            </tr>
                            <tr>
                                <td>Low Price</td>
                                <td>{data.lowPrice}</td>
                            </tr>
                            <tr>
                                <td>Close Price</td>
                                <td>{data.closePrice}</td>
                            </tr>
                            <tr>
                                <td>Open Price</td>
                                <td>{data.closePrice}</td>
                            </tr>
                            <tr>
                                <td>Last Trade Time</td>
                                <td>
                                    <span>{data.timestamp}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Markets</td>
                                <td>{data.markets}</td>
                            </tr>


                        </tbody>
                    </table>
                </div >
            </div >
        </>
    )
}
export default Price;