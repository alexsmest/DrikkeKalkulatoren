import React from 'react'
import "../bootstrap/css/bootstrap.css"
import Logo from "../images/logo/logo.png"
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
    <div className='navbar navbar-expand-sm navbar-dark bg-dark shadow border-bottom border-primary'>
        <div className='container'>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className='collapse navbar-collapse' id="navbarContent">
                <Link to="/" className='navbar-brand'>
                    <img src={Logo} alt="logo" width="300"/>
                </Link>
                <ul className='navbar-nav ms-auto'>
                <li className='nav-item'>
                    <Link className='nav-link' to="/">Hjem</Link>
                </li>
                    {navButton("Promillekalkulator")}
                    {navButton("Priskalkulator")}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar