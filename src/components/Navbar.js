import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import "../style.css"
import Logo from "../images/logo/logo.png"
import Icon from "../images/logo/icon.png"

import { NavLink } from "react-router-dom"

function navButton (name) {
    return (
        <li className='nav-item'>
            <NavLink className="nav-link" to={"/" + name}>{name}</NavLink>
        </li>
    )
}

function Navbar() {
  return (
    <div className='navbar navbar-expand-lg navbar-dark bg-dark shadow border-bottom border-warning'>
        <div className='container'>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                <img src={Icon} alt="" width={50} />
            </button>
            <div className='collapse navbar-collapse' id="navbarContent">
                <NavLink to="/Hjem" className='navbar-brand d-none d-lg-block'>
                    <img src={Logo} alt="logo" width="300"/>
                </NavLink>
                <ul className='navbar-nav ms-auto'>
                    {navButton("Hjem")}
                    {navButton("Kalkulator")}
                    {navButton("Kontakt")}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar