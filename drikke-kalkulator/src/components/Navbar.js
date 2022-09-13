import React from 'react'
import "../bootstrap/css/bootstrap.css"
import Logo from "../images/logo.png"
import SearchIcon from "../images/searchIcon.png"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className='navbar navbar-expand-sm navbar-dark bg-dark shadow'>
        <div className='container'>
            <div className='collapse navbar-collapse'>
                <Link to="/" className='navbar-brand'>
                    <img src={Logo} alt="logo" width="300"/>
                </Link>
                <ul className='navbar-nav ms-auto'>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/Brennevin">Brennevin</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/Sterkvin">Sterkvin</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/Vin">Vin</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/Øl">Øl</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/Cider">Cider</Link>
                    </li>
                    <li className='nav-item'>
                        <a href="#." className='nav-link'>
                            <img src={SearchIcon} alt="søk" width={25} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar