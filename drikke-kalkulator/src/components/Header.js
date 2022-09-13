import React from 'react'
import { Link } from "react-router-dom"
import Icon from "../images/flaske.png"
import ØlIcon from "../images/large.jpg"

function Header() {
  return (
    <div className='container'>
      <h1 className='display-4 mt-5'>DrikkeKalkulatoren</h1>
      <hr />
      <p>Drikk deg dritings</p>
      <div className='row text-center mt-5'>
        <div className='col-lg border p-3'>
          <img src={Icon} alt="" className='img-responsive' width={200} />
          <h1 className='display-6'>Brennevin</h1>
          <Link to="/Brennevin" className='btn btn-primary'>Se mer</Link>
        </div>
        <div className='col-lg border p-3'>
        <img src={Icon} alt="" className='img-responsive' width={200} />
          <h1 className='display-6'>Sterkvin</h1>
          <Link to="/Sterkvin" className='btn btn-primary'>Se mer</Link>
        </div>
        <div className='col-lg border p-3'>
          <img src={Icon} alt="" className='img-responsive' width={200} />
          <h1 className='display-6'>Vin</h1>
          <Link to="/Vin" className='btn btn-primary'>Se mer</Link>
        </div>
        <div className='col-lg border p-3'>
          <img src={ØlIcon} alt="" className='img-responsive' width={200} />
          <h1 className='display-6'>Øl</h1>
          <Link to="/Øl" className='btn btn-primary'>Se mer</Link>
        </div>
        <div className='col-lg border p-3'>
          <img src={Icon} alt="" className='img-responsive' width={200} />
          <h1 className='display-6'>Cider</h1>
          <Link to="/Cider" className='btn btn-primary'>Se mer</Link>
        </div>
      </div>
    </div>
  )
}

export default Header