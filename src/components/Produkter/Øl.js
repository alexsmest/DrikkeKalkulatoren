import React from 'react'

import ProdukterNav from '../ProdukterNav'
import Product from '../Product'
import ProductHeader from '../ProductHeader'

import Carlsberg from "../../data/Øl/Calsberg.json"
import Aass from "../../data/Øl/Aass.json"
import Bareøl from "../../data/Øl/Bareøl.json"
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
        <Product product={Bareøl} id="Bareøl"/>
        <Product product={Hansa} id="Hansa"/>
        <Product product={Ringnes} id="Ringnes"/>
        <Product product={Tuborg} id="Tuborg"/>
      </div>
    </>
  )
}

export default Øl