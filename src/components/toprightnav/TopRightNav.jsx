import style from "./TopRightNav.module.css"
import Profile from "../Profile/Profile";
import MarketStatus from "../MarketStatus/MarketStatus";

function TopRightNav() {
    return (
        <div className={style.toprightnav}>
            <MarketStatus />
            <Profile />
        </div>
    )


}
export default TopRightNav;