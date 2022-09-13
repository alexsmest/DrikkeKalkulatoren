import React from 'react'

import Icon from "../images/logo/icon.png"

function Hero() {
  return (
    <div className='p-4 my-4 text-center'>
        <img src={Icon} alt="" width={150} className="mb-4" />
        <h1 className='display-6 fw-bold'>DrikkeKalkulatoren</h1>
        <p className='lead mb-5 pb-5'>Skriv noe her</p>
        <hr />
    </div>
  )
}

export default Hero