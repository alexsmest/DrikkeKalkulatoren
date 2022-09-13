import React from 'react'
import { Link } from "react-router-dom"
import ØlIcon from "../images/carlsberg.png"
import VinIcon from "../images/vinm.png"
import SterkvinIcon from "../images/cockburn.png"
import BrennevinIcon from "../images/brennevin.png"
import CiderIcon from "../images/cider.png"

function Produkt(name, icon) {
  return (
    <Link to={"/" + name} className='col-lg border p-3 text-decoration-none'>
      <img src={icon} alt="" className='img-responsive' height={200} />
      <h1 className='display-6 text-dark'>{name}</h1>
    </Link>
  )
}

function Header() {
  return (
    <div className='container'>
      <h1 className='display-4 text-center mt-5 container bg-dark text-white pt-3 pb-4 shadow'>Utvalg</h1>
      <div className='row text-center mt-5'>
        {Produkt("Cider", CiderIcon)}
        {Produkt("Øl", ØlIcon)}
        {Produkt("Vin", VinIcon)}
        {Produkt("Brennevin", BrennevinIcon)}
        {Produkt("Sterkvin", SterkvinIcon)}
      </div>
    </div>
  )
}

export default Header