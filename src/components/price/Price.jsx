import usePrice from "../../hooks/usePrice";
import style from "./Price.module.css"

function Price() {
    const [price] = usePrice();

    return (
        <>
            <div className="row">
                <div className="col-6">
                    <h1 className={style.symbol}>{price.symbolId}</h1>
                    <p>
                        <span className={style.middletxt}>{price.changePrice}</span>
                        <span className={`${style.changePercentageText} ${price.changePercentage >= 0 ? style.greentxt : style.redtxt}`}>{price.changePercentage}</span>
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
                                <td>{price.volumeValue}</td>
                            </tr>
                            <tr>
                                <td>Volume</td>
                                <td>{price.volume}</td>
                            </tr>
                            <tr>
                                <td>High Price</td>
                                <td>{price.highPrice}</td>
                            </tr>
                            <tr>
                                <td>Low Price</td>
                                <td>{price.lowPrice}</td>
                            </tr>
                            <tr>
                                <td>Close Price</td>
                                <td>{price.closePrice}</td>
                            </tr>
                            <tr>
                                <td>Open Price</td>
                                <td>{price.openPrice}</td>
                            </tr>
                            <tr>
                                <td>Last Trade Time</td>
                                <td>
                                    <span>{price.timestamp}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Markets</td>
                                <td>{price.markets}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default Price;