import React from 'react'

function ProductItem(props) {
  return (
    <div className='col-sm-4 border text-center py-5'>
        <img src={props.icon} alt="" height={200} />
        <p>{props.name}</p>
        <div className='form-group'>
        <button className='btn btn-primary' data-bs-toggle="collapse" data-bs-target={"#" + props.id}>Se detaljer</button>
        <div className='collapse' id={props.id}>
            <p className='mb-0 mt-2'>Pris: {props.price + "kr"}</p>
            <p className='mb-0'>Alkoholprosent: {props.percent + "%"}</p>
        </div>
        </div>
        <br />
        <button className='btn btn-primary'>Legg til i handlekurv</button>
    </div>
  )
}

export default ProductItem