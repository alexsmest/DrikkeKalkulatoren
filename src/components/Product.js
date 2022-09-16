import React from 'react'

import ProductItem from './Produkter/ProductItem'

function Product(props) {
  return (
    <div className='text-center'>
        <h1 className='container display-6 bg-dark text-white py-3 mt-2' role="button" data-bs-toggle="collapse" data-bs-target={"#" + props.id}>&darr; {props.id.toUpperCase()} &darr;</h1>
        <div className='container collapse row' id={props.id}>
        {
            props.product.map((x, i) => {
            return (
                <ProductItem name={props.product[i].name} type={props.product[i].type} icon={props.product[i].icon} price={props.product[i].price} percent={props.product[i].percent} size={props.product[i].size} />
            )
            })
        }
        </div>
    </div>
  )
}

export default Product