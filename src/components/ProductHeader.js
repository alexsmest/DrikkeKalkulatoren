import React from 'react'

import { Link } from "react-router-dom"

function ProductHeader(props) {
  return (
    <div className='text-center my-5'>
        <h1 className='display-4'>Legg til {props.product}</h1>
        <p>Oppdaterte priser og detaljert informasjon. Sortert basert på merke</p>
        <p>Trykk på <Link className='text-decoration-none text-warning' to={"/Kalkulator"}>kalkulator</Link> for å se handlekurv</p>
    </div>
  )
}

export default ProductHeader