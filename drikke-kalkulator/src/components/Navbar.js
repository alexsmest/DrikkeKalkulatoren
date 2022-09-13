import React from 'react'
import "../bootstrap/css/bootstrap.css"
import Logo from "../images/logo.png"
import SearchIcon from "../images/searchIcon.png"
import { Link } from "react-router-dom"

function navButton (name) {
    return (
        <li className='nav-item'>
            <Link className='nav-link' to={"/" + name}>{name}</Link>
        </li>
    )
}

function Navbar() {
  return (
    <div className='navbar navbar-expand-sm navbar-dark bg-dark shadow'>
        <div className='container'>
            <div className='collapse navbar-collapse'>
                <Link to="/Hjem" className='navbar-brand'>
                    <img src={Logo} alt="logo" width="300"/>
                </Link>
                <ul className='navbar-nav ms-auto'>
                    {navButton("Hjem")}
                    {navButton("Promillekalkulator")}
                    {navButton("Priskalkulator")}
                    <li className='nav-item'>
                        <Link to="/Hjem" className='nav-link'>
                            <img src={SearchIcon} alt="søk" width={25} />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar