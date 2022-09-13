import React from 'react'

import { Link } from "react-router-dom"

function Header() {
  return (
    <div className='container'>
      <h1 className='display-4 mt-5'>DrikkeKalkulatoren</h1>
      <hr />
      <p>Drikk deg dritings</p>
      <Link to="/Promillekalkulator" className='btn btn-primary me-2'>Promillekalkulator</Link>
      <Link to="/Priskalkulator" className='btn btn-primary'>Priskalkulator</Link>
    </div>
  )
}

export default Header