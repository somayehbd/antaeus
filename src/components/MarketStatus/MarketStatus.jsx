import { RiComputerFill } from 'react-icons/ri';
import { useState, useEffect } from 'react';
import style from "./MarketStatus.module.css"

function MarketStatus() {
        const [date, setDate] = useState(new Date);

        setInterval(() => {
            setDate(new Date);
        }, 1000);

        return (
            <>
                <div className={style.status}><div className={style.icon}><RiComputerFill className={`${style.online}`} /></div> <div className={style.time}>{date.toLocaleTimeString()}</div></div>
            </>
        )



   
}
    export default MarketStatus;