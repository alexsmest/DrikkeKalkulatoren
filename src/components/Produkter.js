import React from 'react'
import { Link } from "react-router-dom"

import ØlIcon from "../images/display/øl.png"
import VinIcon from "../images/display/vin.png"
import SterkvinIcon from "../images/display/sterkvin.png"
import BrennevinIcon from "../images/display/brennevin.png"
import CiderIcon from "../images/display/cider.png"

function Produkt(name, icon) {
    return (
      <Link to={"/" + name} className='col-lg border p-3 text-decoration-none'>
        <img src={icon} alt="" className='img-responsive' height={200} />
        <hr className='text-dark' />
        <h1 className='display-6 text-dark'>{name}</h1>
      </Link>
    )
}

function Produkter() {
  return (
    <div className='container'>
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

export default Produkter