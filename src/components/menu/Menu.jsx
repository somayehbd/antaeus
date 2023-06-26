import style from './Menu.module.css'

function Menu() {
    return (
        <nav className={style.topbar}>
            <ul>
                <li>
                    Home
                </li>
                <li>
                    Report
                </li>
                <li>
                    Topup
                </li>
                <li>
                    Management
                </li>
            </ul>
        </nav>
    )
}
export default Menu;