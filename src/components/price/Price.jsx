import style from "./Price.module.css"

function Price() {
    return (
        <>
            <div className="row">
                <div className="col-6">
                    <h1 className={style.symbol}>BTC-USDT</h1>
                    <p>
                        <span className={style.middletxt}>2300</span>
                        <span className={`${style.changePercentageText} ${style.redtxt}`}>2</span>
                    </p>
                </div>
                <div className="col-6">
                    <div className={style.buttonContainer}> <button className={style.rightbutton}>Buy/Sell</button></div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <table className={`table ${style.priceTable}`}>
                        <tbody>
                            <tr>
                                <td>Value</td>
                                <td>123</td>
                            </tr>
                            <tr>
                                <td>Volume</td>
                                <td>111</td>
                            </tr>
                            <tr>
                                <td>High Price</td>
                                <td>299</td>
                            </tr>
                            <tr>
                                <td>Low Price</td>
                                <td>304</td>
                            </tr>
                            <tr>
                                <td>Close Price</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>Open Price</td>
                                <td>299</td>
                            </tr>
                            <tr>
                                <td>Last Trade Time</td>
                                <td>
                                    <span>12:22:08</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Markets</td>
                                <td>BTC</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default Price;