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
          <h1 className='display-4'>Legg til cidere</h1>
          <p>Sortert basert på merke</p>
        </div>
        <div className='text-center'>
          <div className='bg-dark py-3' role="button" data-bs-toggle="collapse" data-bs-target="#grevens">
            <h1 className='display-5 text-white'>Grevens</h1>
          </div>
          <div className='container'>
            <div className='row collapse' id='grevens'>
              {
                Cidere.map((x, i) => {
                  return <ProductItem name={Cidere[i].name} type={Cidere[i].type} icon={Cidere[i].icon} uid={Cidere[i].uid} price={Cidere[i].price} percent={Cidere[i].percent} size={Cidere[i].size} />
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cider