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
        <img src={icon} alt="" className='img-responsive my-5' height={200} />
      </Link>
    )
}

function Produkter() {
  return (
    <>
        <div className='container text-center mt-5 text-dark' id='produkter'>
            <h1 className='display-6 fw-bold text-warning'>Hva skal du drikke?</h1>
            <p>Velg først dine produkter, deretter kan du finne ut promillen du får av disse produktene og prisen for disse produktene.</p>
        </div>
        <div className='container mx-auto row text-center mt-5'>
          {Produkt("Cider", CiderIcon)}
          {Produkt("Øl", ØlIcon)}
          {Produkt("Vin", VinIcon)}
          {Produkt("Brennevin", BrennevinIcon)}
          {Produkt("Sterkvin", SterkvinIcon)}
        </div>
    </>
  )
}

export default Produkter