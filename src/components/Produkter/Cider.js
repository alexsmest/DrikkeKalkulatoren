import React from 'react'

import ProdukterNav from '../ProdukterNav'

import GrevensPærecider from "../../images/display/cider.png"

function Produkt(name, icon){
  return(
    <div className='col-sm-4 border text-center py-5'>
      <img src={icon} alt="" height={200} />
      <p>{name}</p>
      <button className='btn btn-primary mb-2'>Se detaljer</button>
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
          {Produkt("Grevens Pærecider", GrevensPærecider)}
        </div>
      </div>
    </>
  )
}

export default Cider