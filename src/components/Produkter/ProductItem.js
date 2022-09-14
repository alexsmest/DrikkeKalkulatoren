import React from 'react'

function ProductItem(props) {
  return (
    <div className='col-lg-4 border py-5'>
        <img src={props.icon} alt="" height={200} />
        <p className='fw-bold'>{props.name}</p>
        <p>{props.type}</p>
        <button className='btn btn-warning'>Legg til</button>
        <p className='mb-0 mt-2'>Pris: {props.price + "kr"}</p>
        <p className='mb-0'>Alkoholprosent: {props.percent + "%"}</p>
        <p className='mb-0'>Innhold: {props.size + " liter"}</p>
    </div>
  )
}

export default ProductItem