import Topbar from '../navbar/Topbar';
import Home from '../home/Home';
import style from './Layout.module.css'

function Layout() {
    return (
        <div className="container-fluid color1">
            <div className={`row ${style.topnav} color2`}>
                <div className="col"><Topbar /></div>
                <div className="col">C2</div>
                <div className="col">C3</div>
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