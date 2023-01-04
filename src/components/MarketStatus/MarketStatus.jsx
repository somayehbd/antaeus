import { RiComputerFill } from 'react-icons/ri';
import style from "./MarketStatus.module.css"

function MarketStatus() {
    return (
    <>
        <div className={style.status}><span className={style.time}>10:20 AM</span> <RiComputerFill className={`${style.icon} ${style.online}` }/></div>
    </>
    )



}
export default MarketStatus;