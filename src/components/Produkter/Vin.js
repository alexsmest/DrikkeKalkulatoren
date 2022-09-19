import React from 'react'

import ProdukterNav from '../ProdukterNav'
import Product from '../Product'
import ProductHeader from '../ProductHeader'

import Rødvin1 from "../../data/Vin/Rødvin1.json"

function Vin() {
  return (
    <>
      <ProdukterNav />
      <div className='container mt-5'>
        <ProductHeader product="Vin" />
        <Product product={Rødvin1} id="rødvin"/>
      </div>
    </>
  )
}

export default Vin