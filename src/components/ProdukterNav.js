import React from 'react'

import { Link } from "react-router-dom"

function navButton(name) {
    return (
        <li className='nav-item'>
            <Link className='nav-link' to={"/" + name}>{name}</Link>
        </li>
    )
}

function ProdukterNav() {
  return (
    <div className='navbar navbar-expand-sm navbar-dark bg-dark shadow border-primary'>
        <div className='container'>
            <div className='collapse navbar-collapse'>
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