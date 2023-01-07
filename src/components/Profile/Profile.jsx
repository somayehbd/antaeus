import { useEffect, useState } from "react";
import style from "./Profile.module.css"

function Profile() {
    const [name, setName] = useState("");
    const [show, setShow] = useState(false);

    function onclick() {
        setShow(!show)
    }

    useEffect(() => {
        const customerInfo = localStorage.getItem('CustomerInfo');
        const customerInfoObj = JSON.parse(customerInfo);
        setName(`${customerInfoObj.name} ${customerInfoObj.family}`);
    }, []);

    return (
        <>
            <span className={style.dot} onClick={() => { onclick() }}></span>
            {
            show == true ? <div className={style.ProfileMenu}>
                <div className={style.picture}> </div>
                <ul className={style.Profilecontent}>
                    <li>{name}</li>
                    <li><a href="https://sso.eltak.ir/account/logout">Log out</a></li>
                </ul>
            </div> : null
            }
        </>
    )
}
export default Profile;