import React from 'react'

function ProductHeader(props) {
  return (
    <div className='text-center mb-5'>
        <h1 className='display-4'>Legg til {props.product}</h1>
        <p>Oppdaterte priser og detaljert informasjon. Sortert basert på merke</p>
    </div>
  )
}

export default ProductHeader