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

export function KofeQiz() {
    return (
        <div className="kofeqiz">
            <div className="koferight">
                <img src={Kofeimg} alt="kofe" />
            </div>
            <div className="kofeleft">
                <h1>Energy of a start-up <br /> combined with 30 <br /> years of experience.</h1>
                <GlobalBtn specialClass={"kofebtn"} text={"See Job Vacancies"} />
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
export function Cardone() {
    return (
        <div className="asil">
            <h1 className="xat1">We help more than 1500 <br /> companies from all sectors</h1>
            <h4 className="xat2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros <br /> blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et <br /> pellentesque.</h4>

        </div>
    )
}

export function Cardtwo({ rasm1, matn1, matn2, matn3, rasm2 }) {
    return (
        <div className="qolib">
            <img src={rasm1} alt="hoji" className="rasm" />
            <h2 className="m1">{matn1}</h2>
            <h4 className="k1">{matn2}</h4>
            <h3 className="h3">{matn3}</h3>
            <img src={rasm2} alt="as" className="icon999" />
        </div>
    )
}

export function  Cardthere({wer ,wer1}){
    return(
        <div className="ota">
            <h1 className="wer">{wer}</h1>
            <h4 className="wer1">{wer1}</h4>
        </div>
    )
}

export function Cardfour({say , say2 ,say3 }){
    return(
        <div className="ona">
            <img src={say} alt="asa" className="qiz" />
            <h2 className="xat8">{say2}</h2>
            <h4 className="xat9">{say3}</h4>
        </div>
    )
}


