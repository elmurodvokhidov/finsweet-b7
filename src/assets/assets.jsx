import { Link, NavLink } from "react-router-dom"
import Qizsirkul from "../components/img/qizsirkul.png"
import Qizimg from "../components/img/qizimg.png"
import Qizicon from "../components/img/qizicon.png"
import Kofeimg from "../components/img/kofe.png"

export function GlobalBtn({ specialClass, text }) {
    return (
        <button className={specialClass}>{text}</button>
    )
};

export function GlobalLink({ specialClass, text, to, arrow }) {
    return (
        <Link className={specialClass} to={to}>{text} <span id="arrow">{arrow}</span></Link>
    )
};
export function Link2({ na, nam, nam1, nam2, nam3 }) {
    return (
        <div className="box2">
            <h2>{na}</h2>
            <NavLink className="i" to={"about"}>{nam}</NavLink>
            <NavLink className="i" to={"careers"}> {nam1}</NavLink>
            <NavLink className="i" to={"services"}>{nam2}</NavLink>
            <NavLink className="i" to={"blog"}>{nam3}</NavLink>
        </div>
    )
}
export function KofeQiz() {
    return(
        <div className="kofeqiz">
            <div className="koferight">
                <img src={Kofeimg} alt="kofe" />
            </div>
            <div className="kofeleft">
                <h1>Energy of a start-up <br /> combined with 30 <br /> years of experience.</h1>
                <GlobalBtn specialClass={"kofebtn"}  text={"See Job Vacancies"}/>
            </div>
        </div>
    )
}
export function GlobalQiz() {
    return (
        <div className="GlobalQizone">
            <div className="qizright">
                <h1>Finsweet was a dream <br /> To work with</h1>
                <p>Maecenas efficitur scelerisque lorem, et varius lacus tincidunt vel. Pellentesque a arcu vitae diam dapibus mattis vel vel orci. Vivamus eleifend nec felis vel auctor.</p>
                <div className="qizoneone">
                    <img src={Qizsirkul} alt="qiz" />
                    <div className="qizname">
                        <h2>Chikelu Neo</h2>
                        <h4>CEO at MazeAI</h4>
                    </div>
                </div>
            </div>
            <div className="qizleft">
                <figure><img className="qizimg1" src={Qizimg} alt="qiz img" /></figure>
                <img className="qizimg2" src={Qizicon} alt="qiz icon" />

            </div>
        </div>
    )
}
