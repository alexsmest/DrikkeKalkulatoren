import React from 'react'

import { Link } from "react-router-dom"

function ProductHeader(props) {
  return (
    <div className='text-center mt-5'>
        <h1 className='display-4 fw-bold text-warning'>Legg til {props.product}</h1>
        <p>Oppdaterte priser og detaljert informasjon. Sortert basert på merke</p>
        <p>Trykk på <Link className='text-decoration-none text-warning fw-bold' to={"/Kalkulator"}>kalkulator</Link> for å se handlekurv</p>
    </div>
  )
}

export default ProductHeader