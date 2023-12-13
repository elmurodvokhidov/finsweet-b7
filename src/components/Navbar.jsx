import { NavLink } from "react-router-dom"
import { GlobalBtn } from "../assets/assets"
import logo from "../img/Logo.svg"

function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/"><img src={logo} alt="logo" /></NavLink>

      <ul>
        <li><NavLink to="about">About Us</NavLink></li>
        <li><NavLink to="careers">Careers</NavLink></li>
        <li><NavLink to="services">Services</NavLink></li>
        <li><NavLink to="blog">Blog</NavLink></li>
        <li><NavLink to="contact">Contact us</NavLink></li>

        <GlobalBtn text={'Clone project'} specialClass={'buttonOne'} />
      </ul>
    </div>
  )
}

export default Navbar