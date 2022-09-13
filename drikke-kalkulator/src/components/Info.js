import React from 'react'

function Info() {
  return (
    <div className='text-center'>
        <div className='container text-white bg-dark my-5 py-4 shadow'>
            <h1 className='display-6'>Vårt Konsept</h1>
            <p>
                Er du lei av å søke/kalkulere prisen på forskjellige mengder drikkevarer? <br></br> Hos oss 
                kan du enkelt beregne hvor mye drikke du burde kjøpe og hva det vil koste hos de forskjellig levrandørene for å oppnå en hvis promille.
            </p>
        </div>
        <div className='container'>
            <div className='row g-5'>
                <div className='col-sm'>
                    <h1 className='display-6'>Promillekalkulator</h1>
                    <hr />
                    <p>
                        Ved bruk av kalkulasjoner og promilletesting på flere tusen mennesker kan vi måle
                        ut ca hvor mye i promille du vil få av en hvis mengde enheter. ved å oppgi litt informasjon om deg selv kan du på forhånd få svar på
                        hvor mye du kan drikke før du kommer opp til en ønsket promille.
                    </p>
                </div>
                <div className='col-sm'>
                    <h1 className='display-6'>Priskalkulator</h1>
                    <hr />
                    <p>
                        Ved å sammenligne priser fra forskjellige butikker kan du enkelt 
                        skrive inn mengden drikke du ønsker og få svar på hvor mye det vil koste.
                        Vi jobber nå med å automatisere handlekurven din slik at du kan velge ønsket promille og ønsket drikkevare
                        og dermed få handlekurven du trenger for å oppnå denne promillen.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Info