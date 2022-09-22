import React from 'react'

import ProductItem from './Produkter/ProductItem'

function Product(props) {
  return (
    <div className='text-center'>
      <button className='btn btn-warning mt-4 w-75 shadow-sm text-uppercase' data-bs-toggle="collapse" data-bs-target={"#" + props.id}>{props.id}</button>
      <div className='collapse row w-75 mx-auto shadow border' id={props.id}>
      {
          props.product.map((x, i) => {
          return (
              <ProductItem name={props.product[i].name} type={props.product[i].type} icon={props.product[i].icon} price={props.product[i].price} percent={props.product[i].percent} size={props.product[i].size} uid={props.product[i].uid} />
          )
          })
      }
      </div>
    </div>
  )
}

export default Product