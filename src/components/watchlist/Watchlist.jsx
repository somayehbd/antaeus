import style from "./Watchlist.module.css"
import { GrFormAdd } from "react-icons/gr";
import { GrFormSubtract } from "react-icons/gr";
import { MdEdit } from "react-icons/md";

function Watchlist() {
    return (
        <div className={`container-fluid ${style.containerfluid}`}>
            <div className="row">
                <div className="col-12">
                    <p className={style.Text}>Watchlist</p>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className={style.flexcontainer}>
                        <div className={style.item1}>
                            <select className={`form-control form-control-sm ${style.selectbuton}`}>
                                <option>Most profitable symbols</option>
                            </select>
                        </div>
                        <div className={style.item2}>
                            <button><GrFormAdd /></button>
                            <button><GrFormSubtract /></button>
                            <button><MdEdit /></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <table className={`table ${style.watchlisttabel}`} >
                        <thead>
                            <tr>
                                <th>Symbol</th>
                                <th>Buy</th>
                                <th>Sell</th>
                                <th>LastPrice</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>BTC-USDT</td>
                                <td>25000</td>
                                <td>23550</td>
                                <td>23100</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Watchlist;