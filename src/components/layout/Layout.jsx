import Menu from '../menu/Menu';
import Home from '../home/Home';
import style from './Layout.module.css'
import Search from '../Search/Search';
import MarketStatus from '../MarketStatus/MarketStatus';

function Layout() {
    return (
        <div className="container-fluid color1">
            <div className={`row ${style.topnav} color2`}>
                <div className="col"><Menu /></div>
                <div className="col search"><Search/></div>
                <div className="col"><MarketStatus/></div>
            </div>
            <div className="row">
                <div className={`col ${style.outlet}`}>
                    <Home/>
                </div>
            </div>
        </div>
    )
}
export default Layout;