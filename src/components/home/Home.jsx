import Orderbook from "../orderbook/Orderbook";
import Overview from "../overview/Overview"
import Price from "../price/Price";
import Watchlist from "../watchlist/Watchlist";
import style from "./Home.module.css"

function Home() {
    return (
        <>
            <div className={`row ${style.middlebar}`}>
                <div className={`col-4 ${style.boxContainer}`}>
                    <div className="h-100 color2"> <Watchlist /></div>
                </div>
                <div className={`col-3 ${style.boxContainer}`}>
                    <div className={`h-100 color2 ${style.pricePlaceOrder}`}>
                        <Price />
                        <div className={style.verticalbutton}></div>
                    </div>
                </div>
                <div className={`col-5 ${style.boxContainer}`}>
                    <div className="h-100 color2"><Orderbook /></div>
                </div>
            </div>
            <div className={`row ${style.bottombar}`}>
                <div className={`col-4 ${style.boxContainer}`}>
                    <div className="h-100 color3">
                        <Overview />
                    </div>
                </div>
                <div className={`col-8 ${style.boxContainer}`}>
                    <div className="h-100 color3">3</div>
                </div>
            </div>
        </>
    )
}
export default Home;
