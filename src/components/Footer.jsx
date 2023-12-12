import { Link } from "react-router-dom"
function Footer() {
    return (
        <div className="footer">
            <div className="buttonleft">
                <a href="#">© All rights reserved – Finsweet</a>
            </div>
            <div className="buttonright">
                <Link to={'privacy'}>Privacy Policy</Link>
                <Link to={'terms'}>Terms & Conditions</Link>
            </div>
        </div>
    )
}

export default Footer