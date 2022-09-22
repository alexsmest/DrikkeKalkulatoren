import React from 'react'

import { Link } from "react-router-dom"

function Butikk(navn, sistOppdatert) {
    return(
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {navn}
            <span class="badge bg-warning text-dark fw-normal">{sistOppdatert}</span>
        </li>
    )
}

function Info() {
  return (
    <div className='container my-5'>
        <div className='row mt-5'>
            <div className='col-lg-6'>
                <p className='fw-bold text-warning text-lg-start text-center'>Vårt konsept</p>
                <p>
                    Er du lei av å søke/kalkulere prisen på forskjellige mengder drikkevarer?
                    Hos oss kan du enkelt beregne hvor mye drikke du burde kjøpe og hva det vil
                    koste hos de forskjellige levrandørene for å oppnå en viss promille.
                </p>
            </div>
        </div>
        <div className='row mt-5'>
            <div className='col-lg-6 ms-auto text-lg-end text-center'>
                <p className='fw-bold text-warning'>Promillekalulator</p>
                <p>
                    Ved bruk av kalkulasjoner og promilletesting på flere tusen mennesker kan vi måle
                    ut ca hvor mye i promille du vil få av en hvis mengde enheter. ved å oppgi litt 
                    informasjon om deg selv kan du på forhånd få svar på
                    hvor mye du kan drikke før du kommer opp til en ønsket promille.
                </p>
            </div>
        </div>
        <div className='row mt-5'>
            <div className='col-lg-6 text-lg-start text-center'>
                <p className='fw-bold text-warning'>Priskalkulator</p>
                <p>
                    Ved å sammenligne priser fra forskjellige butikker kan du enkelt skrive inn 
                    mengden drikke du ønsker og få svar på hvor mye det vil koste. 
                    Vi jobber nå med å automatisere handlekurven din slik at du kan velge ønsket promille og 
                    ønsket drikkevare og dermed få handlekurven du trenger for å oppnå denne promillen.
                </p>
            </div>
        </div>
        <div className='text-end mt-5 text-lg-end text-center'>
            <p className='fw-bold text-warning'>Spent på hva som ligger bak?</p>
            <Link to={"/Kalkulator"} className='btn btn-warning shadow'>Sjekk ut våres pris- og promillekalkulator</Link>
        </div>
        <hr className='my-5' />
        <div className='col-6 mx-auto text-center'>
            <p className='fw-bold text-warning'>Utvalg og pris av produkter basert på butikk</p>
            <p>
                Vi har dyktige og effektive medarbeidere som sjekker og holder utvalget og prisen på produkter 
                oppdatert. Vi sjekker prisene på følgene butikker:
            </p>
            <ul className='list-group'>
                {Butikk("Rema 1000", "22/09/2022")}
                {Butikk("Meny", "22/09/2022")}
                {Butikk("Joker", "22/09/2022")}
                {Butikk("Kiwi", "22/09/2022")}
                {Butikk("Coop Extra", "22/09/2022")}
                {Butikk("Vinmonopolet", "22/09/2022")}
            </ul>
        </div>
    </div>
  )
}

export default Info