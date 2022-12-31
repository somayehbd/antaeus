import style from './Layout.module.css'
import Overview from '../overview/Overview';
import Topbar from '../navbar/Topbar';

function Layout() {
    return (
        <div className={`container-fluid ${style.content}`}>
            <div className={`row ${style.topnav} ${style.color1}`}>
                <div className="col"><Topbar /></div>
                <div className="col">C2</div>
                <div className="col">C3</div>
            </div>
            <div className={`row ${style.middlebar}`}>
                <div className={`col-4 ${style.boxContainer}`}>
                    <div className={`h-100  ${style.color1}`}>3</div>
                </div>
                <div className={`col-3 ${style.boxContainer}`}>
                    <div className={`h-100  ${style.color1}`}>3</div>
                </div>
                <div className={`col-5 ${style.boxContainer}`}>
                    <div className={`h-100  ${style.color1}`}>3</div>
                </div>
            </div>
            <div className={`row ${style.bottombar}`}>
                <div className={`col-4 ${style.boxContainer}`}>
                    <div className={`h-100  ${style.color2}`}>
                        <Overview />
                    </div>
                </div>
                <div className={`col-8 ${style.boxContainer}`}>
                    <div className={`h-100  ${style.color2}`}>3</div>
                </div>
            </div>

        </div>
    )
}
export default Layout;