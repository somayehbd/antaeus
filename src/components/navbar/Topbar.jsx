import { Link } from "react-router-dom";
import style from './Topbar.module.css'

function Topbar() {
    return (
        <nav className={style.topbar}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/report">Report</Link>
                </li>
                <li>
                    <Link to="/topup">Topup</Link>
                </li>
                <li>
                    <Link to="/management">Management</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Topbar;