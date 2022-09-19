import React from 'react'

import ProdukterNav from '../ProdukterNav'
import Product from '../Product'
import ProductHeader from '../ProductHeader'

import Brennevin1 from "../../data/Brennevin/Brennevin1.json"

function Brennevin() {
  return (
    <>
      <ProdukterNav />
      <div className='container mt-5'>
        <ProductHeader product="Brennevin" />
        <Product product={Brennevin1} id="Brennevin"/>
      </div>
    </>
  )
}

export default Brennevin