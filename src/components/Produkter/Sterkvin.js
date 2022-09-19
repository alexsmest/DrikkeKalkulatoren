import React from 'react'

import ProdukterNav from '../ProdukterNav'
import Product from '../Product'
import ProductHeader from '../ProductHeader'

import Sterkvin1 from "../../data/Sterkvin/Sterkvin1.json"

function Sterkvin() {
  return (
    <>
      <ProdukterNav />
      <div className='container mt-5'>
        <ProductHeader product="Sterkvin" />
        <Product product={Sterkvin1} id="Sterkvin"/>
      </div>
    </>
  )
}

export default Sterkvin