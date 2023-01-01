import { Link } from "react-router-dom";
import style from './Menu.module.css'

function Menu() {
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
export default Menu;