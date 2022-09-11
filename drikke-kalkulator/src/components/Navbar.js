import React from 'react'
import "../bootstrap/css/bootstrap.css"

function Navbar() {
  return (
    <div className='navbar navbar-expand-sm navbar-dark bg-dark shadow'>
        <div className='container'>
            <div className='collapse navbar-collapse'>
                <a href="#." className='navbar-brand'>Logo</a>
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
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar