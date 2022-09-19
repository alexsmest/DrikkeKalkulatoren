import React from 'react'

import ProdukterNav from '../ProdukterNav'
import Product from '../Product'
import ProductHeader from '../ProductHeader'

import Grevens from "../../data/Cider/Grevens.json"
import Crush from "../../data/Cider/Crush.json"
import Barecider from "../../data/Cider/Barecider.json"
import Sommersby from "../../data/Cider/Sommersby.json"

function Cider() {
  return (
    <>
      <ProdukterNav />
      <div className='container mt-5'>
        <ProductHeader product="cider" />
        <Product product={Grevens} id="grevens" />
        <Product product={Crush} id="crush" />
        <Product product={Barecider} id="Barecider" />
        <Product product={Sommersby} id="Sommersby" />
      </div>
    </>
  )
}

export default Cider