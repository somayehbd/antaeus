import style from "./Price.module.css"


function Price() {
    return (
        <>
            <div class="row">
                <div class="col-6">
                    <h1 className={style.symbol}>BTC-UCDT</h1>
                    <p>
                        <span className={style.middletxt}>16.777</span>
                        <span className={style.greentxt}>0000</span>
                    </p>
                </div>
                <div className="col-6">
                    <div className={style.buttonContainer}> <button className={style.rightbutton}>Buy/Sell</button></div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <table class={`table ${style.priceTable}`}>
                        <tbody>
                            <tr>
                                <td>Value</td>
                                <td>61.010.978,4405201</td>
                            </tr>
                            <tr>
                                <td>Volume</td>
                                <td>3.649,9346624</td>
                            </tr>
                            <tr>
                                <td>High Price</td>
                                <td>16.800</td>
                            </tr>
                            <tr>
                                <td>Low Price</td>
                                <td>16.650</td>
                            </tr>
                            <tr>
                                <td>Close Price</td>
                                <td>16.715,9</td>
                            </tr>
                            <tr>
                                <td>Open Price</td>
                                <td>16.710,3</td>
                            </tr>
                            <tr>
                                <td>Last Trade Time</td>
                                <td>
                                    <span>13:39:10</span>
                                    <span>26-12-2022</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Markets</td>
                                <td>USDS</td>
                            </tr>
                        </tbody>
                    </table></div>
            </div>
        </>
    )
}
export default Price;