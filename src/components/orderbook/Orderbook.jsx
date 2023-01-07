import style from "./Orderbook.module.css"
function Orderbook() {
    return (
        <>
            <table class={`table ${style.orderbooktable}`} >
                <thead>
                    <tr>
                        <th >Total Quantity</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>355.111</td>
                        <td>355.111</td>
                        <td>355.111</td>
                        <td>355.111</td>
                        <td>355.111</td>
                    </tr>
                    <tr>
                        <td>355.111</td>
                        <td>355.111</td>
                        <td>355.111</td>
                        <td>355.111</td>
                        <td>355.111</td>
                    </tr>
                    <tr>
                        <td>355.111</td>
                        <td>355.111</td>
                        <td>355.111</td>
                        <td>355.111</td>
                        <td>355.111</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default Orderbook;