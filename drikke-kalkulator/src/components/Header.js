import React from 'react'
import { Link } from "react-router-dom"
import ØlIcon from "../images/carlsberg.png"
import VinIcon from "../images/vinm.png"
import SterkvinIcon from "../images/cockburn.png"
import BrennevinIcon from "../images/brennevin.png"
import CiderIcon from "../images/cider.png"

function Header() {
  return (
    <div className='container'>
      <h1 className='display-4 text-center mt-5 container bg-dark text-white pt-3 pb-4 shadow'>Utvalg</h1>
      <div className='row text-center mt-5'>
        <Link to="/Cider" className='col-lg border p-3 text-decoration-none'>
          <img src={CiderIcon} alt="" className='img-responsive' height={200} />
          <h1 className='display-6 text-dark'>Cider</h1>
        </Link>
        <Link to="/Øl" className='col-lg border p-3 text-decoration-none'>
          <img src={ØlIcon} alt="" className='img-responsive' height={200} />
          <h1 className='display-6 text-dark'>Øl</h1>
        </Link>
        <Link to="/Vin" className='col-lg border p-3 text-decoration-none'>
          <img src={VinIcon} alt="" className='img-responsive' height={200} />
          <h1 className='display-6 text-dark'>Vin</h1>
        </Link>
        <Link to="/Brennevin" className='col-lg border p-3 text-decoration-none'>
          <img src={BrennevinIcon} alt="" className='img-responsive' height={200} />
          <h1 className='display-6 text-dark'>Brennevin</h1>
        </Link>
        <Link to="/Sterkvin" className='col-lg border p-3 text-decoration-none'>
          <img src={SterkvinIcon} alt="" className='img-responsive' height={200} />
          <h1 className='display-6 text-dark'>Sterkvin</h1>
        </Link>
      </div>
    </div>
  )
}

export default Header