import React from 'react'

import ProdukterNav from '../ProdukterNav'
import ProductItem from './ProductItem'

import Cidere from "../../data/Cider.json"

function Cider() {
  return (
    <>
      <ProdukterNav />
      <div className='container mt-5'>
        <div className='text-center mb-5'>
          <h1 className='display-4'>Utvalg av cider</h1>
          <p>Sortert basert på merke</p>
        </div>
        <div className='row'>
          {
            Cidere.map((x, i) => {
              return <ProductItem name={Cidere[i].name} icon={Cidere[i].icon} id={Cidere[i].id} price={Cidere[i].price} percent={Cidere[i].percent} />
            })
          }
        </div>
      </div>
    </>
  )
}

export default Cider