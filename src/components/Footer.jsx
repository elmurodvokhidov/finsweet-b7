import { Link } from "react-router-dom"

function Footer() {
    return (
        <div>
            <Link to={'privacy'}>Privacy Policy</Link>
            <Link to={'terms'}>Terms & Conditions</Link>
        </div>
    )
}

export default Footer