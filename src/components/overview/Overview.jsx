import PieChartComponent from 'antaeus.components.piechart';
import CONFIG from '../../config';
import style from './Overview.module.css'
import { useEffect, useState } from 'react';

function Overview() {
    const [data, setData] = useState({});

    useEffect(() => {
        
        const accessToken = localStorage.getItem('Token')
        fetch(`${CONFIG.BASE_ADDRESS}/WalletManagement/Wallet`, {
            headers: {
                'Authorization': ` Bearer ${accessToken}`
            }
        })

            .then(response => {
                return response.json()
            })

            .then(data => {
                setData(data.data)
            })

    }, [])


    return (
        <>
            {console.log(data)}
            <div className={style.flexContainer}>
                <div className={style.item1}><PieChartComponent label1="Blocked:" value1={data.blocked} label2="Withdrawable: " value2={data.withdrawable} postfix="€" color="#fff" /> </div>
            </div>
        </>
    )
}
export default Overview;