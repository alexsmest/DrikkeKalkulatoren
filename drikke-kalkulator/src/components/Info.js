import React from 'react'

function Info() {
  return (
    <div className='text-center'>
        <div className='container text-white bg-dark my-5 py-4 shadow'>
            <h1 className='display-6'>Vårt Konsept</h1>
            <p>
                Er du lei av å søke/kalkulere prisen på forskjellige mengder drikkevarer? <br></br> Hos oss 
                kan du enkelt beregne hvor mye drikke du burde kjøpe og hva det vil koste hos de forskjellig levrandørene.
            </p>
        </div>
        <div className='container'>
            <div className='row g-5'>
                <div className='col-sm'>
                    <h1 className='display-6'>Promillekalkulator</h1>
                    <hr />
                    <p>Skriv noe alex eller fred</p>
                </div>
                <div className='col-sm'>
                    <h1 className='display-6'>Priskalkulator</h1>
                    <hr />
                    <p>Skriv noe alex eller fred</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Info