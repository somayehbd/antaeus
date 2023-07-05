import style from "./Watchlist.module.css"
import { GrFormAdd } from "react-icons/gr";
import React, { useState, useEffect } from 'react';
import { GrFormSubtract } from "react-icons/gr";
import { MdEdit } from "react-icons/md";

function Watchlist() {

    //state to got options of select element in watchList
    const accessToken = localStorage.getItem('Token')
    const [data, setData] = useState([])
    const [selectedWatchListId, setselectedWatchListId] = useState([])
    const[selectedId,setselectedId]=useState(null);

    useEffect(() => {

        fetch('https://ot.api.kub.aghdam.nl/WatchList/WatchList/Lightweight', {
            headers: {
                'Authorization': ` Bearer ${accessToken}`
            }
        })
            .then(response => {
                return response.json()
            })
            .then(data => {

                setData(data.data);
            })
            .then(error => {

            })

    }, [])


    function handleClick(e) {
        const selecteId = e.target.value;
        setselectedId(selecteId)
    }

    // request for WatchList by Id
    useEffect(() => {
        if(selectedId == null) return

        fetch(`https://ot.api.kub.aghdam.nl/WatchList/WatchList/${selectedId}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                setselectedWatchListId(data.data.watchListItems)
            })
            .then(error => {

            })
    }, [selectedId])

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
                            <select className={`form-control form-control-sm ${style.selectbuton}`} onChange={handleClick}>
                                {
                                    data.map((item, index) => {
                                        return <option key={index} value={item.id} >{item.name}</option>
                                    })
                                }

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
                        <tbody>{selectedWatchListId.map((item, index) => {
                            return(
                            <tr key={index}>
                                <td>{item.symbolId}</td>
                                <td>{item.bestBidPrice}</td>
                                <td>{item.bestAskPrice}</td>
                                <td>{item.lastPrice}</td>
                            </tr>)
                            
                        })}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Watchlist;