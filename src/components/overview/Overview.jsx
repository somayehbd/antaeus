import PieChartComponent from 'antaeus.components.piechart';
import style from './Overview.module.css'
import useOverview from '../../hooks/useOverview';

function Overview() {
    const [overview] = useOverview();
    console.log(overview)
    return (

        <div className={style.flexContainer}>
            <div className={style.item1}><PieChartComponent label1="Blocked: " value1={overview.blocked} label2="Withdrawable: " value2={overview.withdrawable} postfix="€" color="#fff" /> </div>
        </div>

    )
}
export default Overview;