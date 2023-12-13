import { Link } from "react-router-dom"
import { FaFacebookF } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import logo1 from "../img/Logo 2.svg"
import right from "../img/right.png"
import { Link2 } from "../assets/assets";

function Footer() {
    return (
        <div className="footer">
            <div className="top">
                <div className="box1">
                    <a https="/"><img src={logo1} alt="logoo" /></a>
                    <h1>Bespoke software <br /> solutions</h1>
                    <div className="icon">
                        <FaFacebookF />
                        <CiYoutube />
                        <FaInstagram />
                        <CiTwitter />
                    </div>
                </div>
                <div className="box2">
                    <Link2 na={"Company"} nam={"About Us"} nam1={"Careers"} nam2={"Services"} nam3={"Blog"} />
                </div>
                <div className="box3">
                    <Link2 na={"Connect"} nam={"hi@finsweet.com"} nam1={"+(123) 456-7890"} />
                </div>
                <div className="box4">
                    <h2>Join Newsletter</h2>
                    <input className="inputone" type="email" placeholder="Enter your email" />
                    <button>Submit</button>
                </div>
            </div>
            <div className="buttom">
                <div className="buttonleft">
                    <a href="#">© All rights reserved – Finsweet</a>
                </div>
                <div className="buttonright">
                    <Link className="i" to={'privacy'}>Privacy Policy</Link>
                    <Link className="i" to={'terms'}>Terms & Conditions</Link>
                </div>
            </div>
            <img className="right" src={right} alt="rasim" />
        </div>
    )
}


export default Footer