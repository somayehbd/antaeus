import useWatchListLightweight from "../../hooks/useWatchListLightweight"
import useWatchListById from "../../hooks/useWatchListById"
import style from "./Watchlist.module.css"
import { GrFormAdd } from "react-icons/gr";
import { GrFormSubtract } from "react-icons/gr";
import { MdEdit } from "react-icons/md";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function Watchlist() {
    const [watchlistLightweight] = useWatchListLightweight();
    let [watchList] = useWatchListById(1);
    const [watchListItems, setWatchListItems] = useState([])

    const onWatchlistChange = (event) => { 
        const token = localStorage.getItem("AccessToken");
        axios.get(`https://ot-api.eltak.ir/WatchList/WatchList/${event.target.value}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(
            response => {
            console.log(response)
                if (response.data.status == false) {
                    alert(response.data.errorMessage);
                } else {
                    setWatchListItems(response.data.data.watchListItems)
                }
            },
            reason => {
                if (reason.response.status == 401)
                    window.location.href = "https://ot-api.eltak.ir/bff/login";
            });
    }

    useEffect(() => {
        if (watchList.watchListItems == null || watchList.watchListItems == undefined)
            return;

        setWatchListItems(watchList.watchListItems)
    }, [watchList])

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
                            <select onChange={onWatchlistChange} className={`form-control form-control-sm ${style.selectbuton}`}>
                                {watchlistLightweight.map(item => {
                                    return (<option key={item.id} value={item.id}>{item.name}</option>)
                                })}
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
                            {watchListItems.map(item => {
                                return (
                                    <tr>
                                        <td>{item.symbolId}</td>
                                        <td>{item.bestBidPrice}</td>
                                        <td>{item.bestAskPrice}</td>
                                        <td>{item.lastPrice}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Watchlist;