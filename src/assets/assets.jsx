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
<<<<<<< HEAD

=======
export function Link2({na,nam,nam1,nam2,nam3}) {
    return(
        <div className="box2">
            <h2>{na}</h2>
            <NavLink className="i"  to={"about"}>{nam}</NavLink>
            <NavLink className="i" to={"careers"}> {nam1}</NavLink>
            <NavLink className="i" to={"services"}>{nam2}</NavLink>
            <NavLink className="i" to={"blog"}>{nam3}</NavLink>
        </div>
    )
}
>>>>>>> 019c69d8b3892aa44f862506fd5ea0fe56284616
