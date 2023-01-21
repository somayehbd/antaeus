import { useState } from "react";
import { useEffect } from "react";
import useOrderReport from "../../hooks/useOrderReport"
import ProgressbarComponent from 'antaeus.components.progressbar'
import style from "./Report.module.css"

function Report() {
    const [orderReportGetApi] = useOrderReport();
    console.log(orderReportGetApi);
     const [orderReport, setOrderReport] = useState([])

    useEffect(() => {
        if (orderReportGetApi == null || orderReportGetApi == undefined)
            return;
         setOrderReport(orderReportGetApi);
    }, [orderReportGetApi]);

    return (
        <>
            <ul className={`nav nav-pills ${style.navpill}`} id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-Orders-tab" data-toggle="pill" data-target="#pills-Orders" type="button" role="tab" aria-controls="pills-Orders" aria-selected="true">Orders</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-transactions-tab" data-toggle="pill" data-target="#pills-transactions" type="button" role="tab" aria-controls="pills-transactions" aria-selected="false">transactions</button>
                </li>
                <li class="nav-item" role="presentation">
                </li>
            </ul>
            <div class={`tab-content ${style.tabContentReport}`} id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-Orders" role="tabpanel" aria-labelledby="pills-Orders-tab">
                    <table className={`table ${style.table}`}>
                        <thead>
                            <tr>
                                <th>Symbol</th>
                                <th >Quantity</th>
                                <th>Price</th>
                                <th>Order Side</th>
                                <th>Created At</th>
                                <th>Updated At</th>
                                <th>Status</th>
                                <th>Progress</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderReport.map(item=>{
                                return(<tr>
                                    <td>{item.symbolId}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price}</td>
                                    <td>{item.orderSide}</td>
                                    <td>{item.createdAt}</td>
                                    <td>{item.updatedAt}</td>
                                    <td>{item.status}</td>
                                    <td className={style.progressbar}><ProgressbarComponent value="100" /></td>
                                </tr>)
                                
                            })}
                            
                            
                        </tbody>
                    </table></div>
                <div class="tab-pane fade" id="pills-transactions" role="tabpanel" aria-labelledby="pills-transactions-tab">...</div>
            </div>

        </>
    )
}
export default Report;