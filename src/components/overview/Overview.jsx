import PieChartComponent from 'antaeus.components.piechart';
import style from './Overview.module.css'

function Overview() {
    return (

        <div className={style.flexContainer}>
            <div className={style.item1}><PieChartComponent label1="Blocked: " value1={100} label2="Withdrawable: " value2={200} postfix="€" color="#fff" /> </div>
        </div>

    )
}
export default Overview;