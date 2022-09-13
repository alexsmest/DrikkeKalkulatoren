import React from 'react'
import "../bootstrap/css/bootstrap.css"
import Logo from "../images/logo.png"
import SearchIcon from "../images/searchIcon.png"

function Navbar() {
  return (
    <div className='navbar navbar-expand-sm navbar-dark bg-dark shadow'>
        <div className='container'>
            <div className='collapse navbar-collapse'>
                <a href="#." className='navbar-brand'>
                    <img src={Logo} alt="logo" width="300"/>
                </a>
                <ul className='navbar-nav ms-auto'>
                    <li className='nav-item'>
                        <a href="#." className='nav-link'>Brennevin</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#." className='nav-link'>Sterkvin</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#." className='nav-link'>Vin</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#." className='nav-link'>Øl</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#." className='nav-link'>Cider</a>
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