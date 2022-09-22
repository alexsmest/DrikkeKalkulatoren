import React from 'react'
import { useState } from "react"

import Handlekurv from '../Handlekurv'

function KalkulerAlkoholGram(size, percent) {
  return Math.floor(size * (percent/100) * 789.24)
}

function ProductItem(props) {
  const [antall, setAntall] = useState(0);
  return (
    <div className='col-lg-4 border py-5'>
        <img src={props.icon} alt="" height={200} />
        <p className='fw-bold'>{props.name}</p>
        <p>{props.type}</p>
        <button className='btn btn-warning position-relative' onClick={() => {Handlekurv.push([props.name + " " + props.type, props.price, props.percent, props.size, KalkulerAlkoholGram(props.size, props.percent)]); setAntall(antall + 1)}}>Legg til
          <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark'>{antall}</span>
          <span className='position-absolute top-0 start-0 translate-middle badge rounded-pill bg-dark'>-</span>
        </button>
        <p className='mb-0 mt-2'>Pris: {props.price + "kr"}</p>
        <p className='mb-0'>Alkoholprosent: {props.percent + "%"}</p>
        <p className='mb-0'>Innhold: {props.size + " liter"}</p>
    </div>
  )
}

export default ProductItem