import React from 'react'

function Header() {
  return (
    <div className='container'>
      <h1 className='display-4 mt-5'>DrikkeKalkulatoren</h1>
      <hr />
      <p>Drikk deg dritings</p>
      <a href="#." className='btn btn-primary me-2'>Promillekalkulator</a>
      <a href="#." className='btn btn-primary'>Priskalkulator</a>
    </div>
  )
}

export default Header