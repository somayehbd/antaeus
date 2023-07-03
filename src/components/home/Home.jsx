import Orderbook from "../orderbook/Orderbook";
import Overview from "../overview/Overview"
import Price from "../price/Price";
import Report from "../Report/Report";
import Watchlist from "../watchlist/Watchlist";
import style from "./Home.module.css"

function Home() {

    const accessToken = localStorage.getItem('Token')

    fetch('https://ot.api.kub.aghdam.nl/MarketData/Symbol',{
        headers:{
            'Authorization': `Bearer ${accessToken}`
        }
    })
        .then(response => {
            if (response.status === 401)
                window.location.href = 'https://ot.api.kub.aghdam.nl/bff/login';

            return response.json()
        })
        .then(data => {
        })
        .catch(error => {
            console.error(error);
        })

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
                    <div className="h-100 color3"><Report /></div>
                </div>
            </div>
        </>
    )
}
export default Home;
