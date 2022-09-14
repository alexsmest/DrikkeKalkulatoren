import React from 'react'

import ProdukterNav from '../ProdukterNav'
import ProductItem from './ProductItem'

import Øl_ from "../../data/Øl.json"

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
          {
            Øl_.map((x, i) => {
              return <ProductItem name={Øl_[i].name} icon={Øl_[i].icon} id={Øl_[i].id} price={Øl_[i].price} percent={Øl_[i].percent} size={Øl_[i].size} />
            })
          }
        </div>
      </div>
    </>
  )
}

export default Øl