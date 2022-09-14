import React from 'react'

import { NavLink } from "react-router-dom"

function navButton(name) {
    return (
        <li className='nav-item'>
            <NavLink className='nav-link' to={"/" + name}>{name}</NavLink>
        </li>
    )
}

function ProdukterNav() {
  return (
    <div className='navbar navbar-expand-sm navbar-dark bg-dark shadow border-primary'>
        <div className='container'>
            <div className='collapse navbar-collapse' id="navbarContent">
                <ul className='navbar-nav m-auto'>
                    {navButton("Cider")}
                    {navButton("Øl")}
                    {navButton("Vin")}
                    {navButton("Brennevin")}
                    {navButton("Sterkvin")}
                </ul>
            </div>
        </div>
    </div>
  )
}


export default ProdukterNav