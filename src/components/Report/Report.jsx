import style from "./Report.module.css"

function Report() {
    return (
        <>
            <ul className={`nav nav-pills ${style.navpill}`} id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button className="nav-link active"id="pills-Orders-tab" data-toggle="pill" data-target="#pills-Orders" type="button" role="tab" aria-controls="pills-Orders" aria-selected="true">Orders</button>
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
                                <th>......</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Symbol</td>
                                <td>Symbol</td>
                                <td>Symbol</td>
                                <td>Symbol</td>
                                <td>Symbol</td>
                                <td>Symbol</td>
                                <td>Symbol</td>
                                <td>Symbol</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Symbol</td>
                                <td>Symbol</td>
                                <td>Symbol</td>
                                <td>Symbol</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <td>Symbol</td>
                                <td>Symbol</td>
                                <td>Symbol</td>
                                <td>Symbol</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <td>Symbol</td>
                                <td>Symbol</td>
                                <td>Symbol</td>
                                <td>Symbol</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <td>Symbol</td>
                                <td>Symbol</td>
                                <td>Symbol</td>
                                <td>Symbol</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <td>Symbol</td>
                                <td>Symbol</td>
                                <td>Symbol</td>
                                <td>Symbol</td>
                            </tr>
                        </tbody>
                    </table></div>
                <div class="tab-pane fade" id="pills-transactions" role="tabpanel" aria-labelledby="pills-transactions-tab">...</div>
            </div>

        </>
    )
}
export default Report;