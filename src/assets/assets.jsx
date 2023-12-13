import { Link, NavLink } from "react-router-dom"

export function GlobalBtn({ specialClass, text }) {
    return (
        <button className={specialClass}>{text}</button>
    )
};

export function GlobalLink({ specialClass, text, to }) {
    return (
        <Link className={specialClass} to={to}>{text}</Link>
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
export function Cardone() {
    return (
        <div className="asil">
            <h1 className="xat1">We help more than 1500 <br /> companies from all sectors</h1>
            <h4 className="xat2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros <br /> blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et <br /> pellentesque.</h4>

        </div>
    )
}

export function Cardtwo({rasm1 , matn1 , matn2 ,matn3 , rasm2}) {
    return(
        <div className="qolib">
            <img src={rasm1} alt="hoji"  className="rasm"/>
            <h2 className="m1">{matn1}</h2>
            <h4 className="k1">{matn2}</h4>
            <h3 className="h3">{matn3}</h3>
            <img src={rasm2} alt="as" className="icon999"/>
        </div>
    )
}

