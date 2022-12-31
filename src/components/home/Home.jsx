import Overview from "../overview/Overview"
import style from "./Home.module.css"

function Home() {
    return (
        <>
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
        </>
    )
}
export default Home;
