import React from 'react'

import ProdukterNav from '../ProdukterNav'

function Øl() {
  return (
    <>
      <ProdukterNav />
      <div className='container mt-5'>
        <div className='text-center'>
          <h1 className='display-4'>Utvalg av øl</h1>
          <p>Sortert alfabetisk</p>
        </div>
      </div>
    </>
  )
}

export default Øl