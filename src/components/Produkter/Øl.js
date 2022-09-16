import React from 'react'

import ProdukterNav from '../ProdukterNav'
import Product from '../Product'
import ProductHeader from '../ProductHeader'

import Carlsberg from "../../data/Øl/Calsberg.json"
import Aass from "../../data/Øl/Aass.json"
import AnnetØl from "../../data/Øl/AnnetØl.json"
import Hansa from "../../data/Øl/Hansa.json"
import Ringnes from "../../data/Øl/Ringnes.json"
import Tuborg from "../../data/Øl/Tuborg.json"

function Øl() {
  return (
    <>
      <ProdukterNav />
      <div className='container mt-5'>
        <ProductHeader product="Øl" />
        <Product product={Carlsberg} id="carlsberg"/>
        <Product product={Aass} id="aass"/>
        <Product product={Hansa} id="Hansa"/>
        <Product product={Ringnes} id="Ringnes"/>
        <Product product={Tuborg} id="Tuborg"/>
        <Product product={AnnetØl} id="AnnetØl"/>
      </div>
    </>
  )
}

export default Øl