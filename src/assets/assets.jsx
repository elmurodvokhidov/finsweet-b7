import { Link } from "react-router-dom"

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