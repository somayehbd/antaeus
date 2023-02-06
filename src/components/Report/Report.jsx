import useOrderReport from "../../hooks/useOrderReport"
import ProgressbarComponent from 'antaeus.components.progressbar'
import Progressbarf from '../progressbarf/Progressbarf'
import style from "./Report.module.css"

function Report() {
    const [orderReportGetApi] = useOrderReport();

    return (
        <>
            <ul className={`nav nav-pills ${style.navpill}`} id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-Orders-tab" data-toggle="pill" data-target="#pills-Orders" type="button" role="tab" aria-controls="pills-Orders" aria-selected="true">Orders</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-transactions-tab" data-toggle="pill" data-target="#pills-transactions" type="button" role="tab" aria-controls="pills-transactions" aria-selected="false">transactions</button>
                </li>
                <li className="nav-item" role="presentation">
                </li>
            </ul>
            <div className={`tab-content ${style.tabContentReport}`} id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-Orders" role="tabpanel" aria-labelledby="pills-Orders-tab">
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
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderReportGetApi.map(item => {
                                return (<tr key={item.id}>
                                    <td>{item.symbolId}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price}</td>
                                    <td>{item.orderSide}</td>
                                    <td>{item.createdAt}</td>
                                    <td>{item.updatedAt}</td>
                                    <td>{item.status}</td>
                                    <td className={style.progressbar}><Progressbarf/></td>
                                </tr>)

                            })}


                        </tbody>
                    </table></div>
                <div className="tab-pane fade" id="pills-transactions" role="tabpanel" aria-labelledby="pills-transactions-tab">...</div>
            </div>
        </>
    )
}
export default Report;