import React from 'react'

import ProdukterNav from '../ProdukterNav'
import Product from '../Product'

import Carlsberg from "../../data/Øl/Calsberg.json"
import Aass from "../../data/Øl/Aass.json"

function Øl() {
  return (
    <>
      <ProdukterNav />
      <div className='container mt-5'>
        <div className='text-center mb-5'>
          <h1 className='display-4'>Legg til øl</h1>
          <p>Sortert basert på merke</p>
        </div>
        <div className='row'>
          <Product product={Carlsberg} id="carlsberg"/>
          <Product product={Aass} id="aass"/>
        </div>
      </div>
    </>
  )
}

export default Øl