import style from "./Orderbook.module.css"
function Orderbook() {
    return (
        <>
            <table className={`table ${style.orderbooktable}`} >
                <thead>
                    <tr>
                        <th >Total Quantity</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th >Total Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>123</td>
                        <td>100</td>
                        <td>26000</td>
                        <td>26100</td>
                        <td>103</td>
                        <td>125</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default Orderbook;