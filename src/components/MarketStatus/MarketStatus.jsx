import { RiComputerFill } from 'react-icons/ri';
import style from "./MarketStatus.module.css"

function MarketStatus() {
    return (
    <>
        <div className={style.status}><div className={ style.icon }><RiComputerFill className={`${style.online}` }/></div> <div className={style.time}>10:20 AM</div></div>
    </>
    )



}
export default MarketStatus;