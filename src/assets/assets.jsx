import { Link, NavLink } from "react-router-dom"
import Qizsirkul from "../components/img/qizsirkul.png"
import Qizimg from "../components/img/qizimg.png"
import Qizicon from "../components/img/qizicon.png"
import Kofeimg from "../components/img/kofe.png"
import yilduz from "../components/img/Ribbon.png"
import negir from "../components/img/rasim17.png"
import { FaArrowRightLong } from "react-icons/fa6";

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
<<<<<<< HEAD

=======
export function Link2({na,nam,nam1,nam2,nam3}) {
    return(
        <div className="box2">
            <h2>{na}</h2>
            <NavLink className="i" to={"about"}>{nam}</NavLink>
            <NavLink className="i" to={"careers"}> {nam1}</NavLink>
            <NavLink className="i" to={"services"}>{nam2}</NavLink>
            <NavLink className="i" to={"blog"}>{nam3}</NavLink>
        </div>
    )
}
>>>>>>> 019c69d8b3892aa44f862506fd5ea0fe56284616
