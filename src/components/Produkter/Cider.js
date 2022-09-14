import React from 'react'

import ProdukterNav from '../ProdukterNav'
import ProductItem from './ProductItem'

import Grevens from "../../data/Cider/Grevens.json"
import Crush from "../../data/Cider/Crush.json"

function Product(product, id) {
  return(
  <div className='text-center'>
    <h1 className='container display-6 bg-dark text-white py-3 mt-2' data-bs-toggle="collapse" data-bs-target={"#" + id}>{id.toUpperCase()}</h1>
    <div className='container collapse row' id={id}>
      {
        product.map((x, i) => {
          return (
            <ProductItem name={product[i].name} type={product[i].type} icon={product[i].icon} price={product[i].price} percent={product[i].percent} size={product[i].size} />
          )
        })
      }
    </div>
  </div>
  )
}

function Cider() {
  return (
    <>
      <ProdukterNav />
      <div className='container mt-5'>
        <div className='text-center mb-5'>
          <h1 className='display-4'>Legg til cidere</h1>
          <p>Sortert basert på merke</p>
        </div>
        {Product(Grevens, "grevens")}
        {Product(Crush, "crush")}
      </div>
    </>
  )
}

export default Cider