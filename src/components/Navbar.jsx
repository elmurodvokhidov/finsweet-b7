import { NavLink } from "react-router-dom"
import { GlobalBtn } from "../assets/assets"

function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/"><img src="./img/Logo.svg" alt="logo" /></NavLink>

      <ul>
        <li><NavLink to="about">About Us</NavLink></li>
        <li><NavLink to="careers">Careers</NavLink></li>
        <li><NavLink to="services">Services</NavLink></li>
        <li><NavLink to="blog">Blog</NavLink></li>
        <li><NavLink to="contact">Contact us</NavLink></li>
      </ul>

      <GlobalBtn text={'Clone project'} specialClass={'buttonOne'} />
    </div>
  )
}

export default Navbar