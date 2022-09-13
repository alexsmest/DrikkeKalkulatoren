import React from 'react'

import Icon from "../images/logo/icon.png"

function Hero() {
  return (
    <div className='pt-4 pb-5 my-5 text-center border-bottom'>
        <img src={Icon} alt="" width={150} className="mb-4" />
        <h1 className='display-6 fw-bold'>DrikkeKalkulatoren</h1>
        <p className='lead mb-4'>Skriv noe her</p>
        <a href="#" className='btn btn-primary mb-5'>Se mer</a>
    </div>
  )
}

export default Hero