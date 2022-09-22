import React from 'react'

import Icon from "../images/logo/icon.png"

function Hero() {
  return (
    <div className='pt-4 pb-5 my-5 text-center'>
        <img src={Icon} alt="" width={150} className="mb-4" />
        <h1 className='display-6 fw-bold'>DrikkeKalkulatoren</h1>
        <p className='lead mb-4'>Den simple måten å ta riktig drikkevalg.</p>
        <a href="#produkter" className='btn btn-warning mb-5 shadow'>Sett i gang</a>
    </div>
  )
}

export default Hero