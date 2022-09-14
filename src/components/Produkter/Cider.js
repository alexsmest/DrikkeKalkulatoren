import React from 'react'

import ProdukterNav from '../ProdukterNav'
import Product from '../Product'

import Grevens from "../../data/Cider/Grevens.json"
import Crush from "../../data/Cider/Crush.json"

function Cider() {
  return (
    <>
      <ProdukterNav />
      <div className='container mt-5'>
        <div className='text-center mb-5'>
          <h1 className='display-4'>Legg til cidere</h1>
          <p>Sortert basert på merke</p>
        </div>
        <Product product={Grevens} id="grevens" />
        <Product product={Crush} id="crush" />
      </div>
    </>
  )
}

export default Cider