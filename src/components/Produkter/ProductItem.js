import React from 'react'

import Handlekurv from '../Handlekurv'

function KalkulerAlkoholGram(size, percent) {
  return Math.floor(size * (percent/100) * 789.24)
}

function ProductItem(props) {
  var item = [props.name + " " + props.type, props.price, props.percent, props.size, KalkulerAlkoholGram(props.size, props.percent)];
  return (
    <div className='col-lg-4 border py-3'>
        <img src={props.icon} alt="" height={150} />
        <p className='mb-0 fw-bold'>{props.name}</p>
        <p className='mb-2'>{props.type}, {props.percent}%, {props.size}l</p>
        <button className={`btn btn-warning btn-sm position-relative`} id='button' onClick={() => { Handlekurv.push(item); }}>
          Legg til
          <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark'></span>
        </button>
        <p className='mt-2'>Billigst pris: {props.price}kr</p>
    </div>
  )
}

export default ProductItem