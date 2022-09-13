import React from 'react'

import ProdukterNav from '../ProdukterNav'

import GrevensPæreciderLogo from "../../images/display/cider.png"

function Product(name, icon, id, price, percent){
  return(
  <div className='col-sm-4 border text-center py-5'>
    <img src={icon} alt="" height={200} />
    <p>{name}</p>
    <div className='form-group'>
      <button className='btn btn-primary' data-bs-toggle="collapse" data-bs-target={"#" + id}>Se detaljer</button>
      <div className='collapse' id={id}>
        <p className='mb-0 mt-2'>Pris: {price + "kr"}</p>
        <p className='mb-0'>Alkoholprosent: {percent + "%"}</p>
      </div>
    </div>
    <br />
    <button className='btn btn-primary'>Legg til i handlekurv</button>
  </div>
  )
}

function Cider() {
  return (
    <>
      <ProdukterNav />
      <div className='container mt-5'>
        <div className='text-center mb-5'>
          <h1 className='display-4'>Utvalg av cider</h1>
          <p>Sortert alfabetisk</p>
        </div>
        <div className='row'>
          {Product("Grevens Pærecider", GrevensPæreciderLogo, "grevenspærecider", "20", "4.7")}
          {Product("Grevens Pærecider", GrevensPæreciderLogo, "grevenspærecider1", "20", "4.7")}
          {Product("Grevens Pærecider", GrevensPæreciderLogo, "grevenspærecider2", "20", "4.7")}
        </div>
      </div>
    </>
  )
}

export default Cider