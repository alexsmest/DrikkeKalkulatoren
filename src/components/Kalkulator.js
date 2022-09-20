import React from 'react'
import { useState } from "react"

function KalkulerPromille (alkoholGram, kroppsvekt, timer, kjonn) {
  var blodVektkalk = () => {
      if(kjonn === "mann") {
          return kroppsvekt * 0.7
      } else if (kjonn === "kvinne") {
          return kroppsvekt * 0.6
      }
  }

  var PromilleEttrTid = (alkoholGram/blodVektkalk()) - (0.15 * timer)
  if (PromilleEttrTid < 0) {
      PromilleEttrTid = 0;
  }
  
  return PromilleEttrTid.toFixed(2);
}

var Tilstand = (promille) => {
  if(promille<0.29) return(
    <ul className='list-group'>
      <li className='list-group-item'>De fleste vil fremstå som normal</li>
    </ul>
  )
  else if(promille<0.59) return(
    <ul className='list-group'>
      <li className='list-group-item'>Mild eufori</li>
      <li className='list-group-item'>Følelse av velbehag</li>
      <li className='list-group-item'>Avslapping</li>
      <li className='list-group-item'>Pratsom</li>
      <li className='list-group-item'>Redusert hemming</li>
    </ul>
  )
  else if(promille<1.0) return(
    <ul className='list-group'>
      <li className='list-group-item'>Nummenhet</li>
      <li className='list-group-item'>Mindre hemminger</li>
    </ul>
  )
  else if(promille<2.0) return(
    <ul className='list-group'>
      <li className='list-group-item'>Overmot</li>
      <li className='list-group-item'>Humørsvingninger</li>
      <li className='list-group-item'>Sinne eller omsorg</li>
      <li className='list-group-item'>Høylytt</li>
    </ul>
  )
  else if(promille<2.9) return(
    <ul className='list-group'>
      <li className='list-group-item'>Bedøvelsetilstand</li>
      <li className='list-group-item'>Tap av dømmekraft</li>
      <li className='list-group-item'>Svekket føleevne</li>
      <li className='list-group-item'>Blackouts</li>
    </ul>
  )
  else if(promille<3.9) return(
    <ul className='list-group'>
      <li className='list-group-item'>Alvorlig depresjon</li>
      <li className='list-group-item'>Tap av bevissthet</li>
      <li className='list-group-item'>Død er mulig</li>
    </ul>
  )
  else if(promille>4.0) return(
    <ul className='list-group'>
      <li className='list-group-item'>Tap av bevissthet</li>
      <li className='list-group-item'>Død</li>
    </ul>
  )
}

function Kalkulator() {
  const [alkoholGram, setAlkoholGram] = useState(150);
  const [kroppsvekt, setKroppsvekt] = useState(80);
  const [alder, setAlder] = useState(18);
  const [timer, setTimer] = useState(1);
  const [kjønn, setKjønn] = useState(null);

  return (
    <div className='pt-4 pb-5 my-5'>
      <div className='container text-center'>
        <h1 className='display-4'>Kalkuler promille og pris</h1>
        <p>Gram alkohol utregnes fra varene du har valgt, promille og pris beregnes automatisk</p>
        <div className='container w-50 pt-3 pb-2 text-start'>
          <ul className='list-group'>
            <li className='list-group-item'>Cider x 3</li>
            <li className='list-group-item'>Øl x 5</li>
            <li className='list-group-item'>Spritflaske x 1</li>
          </ul>
        </div>
        <p>Gram alkohol: {alkoholGram}g</p>
        <h1 className='display-6 mt-5'>Informasjon</h1>
        <p>Hvor mye veier du?</p>
        <input type="range" className='form-range w-50' min={20} max={140} defaultValue={80} step={1} id={kroppsvekt} onChange={value => setKroppsvekt(value.target.value)}/>
        <p>{kroppsvekt}kg</p>
        <p>Hvor gammel er du?</p>
        <input type="range" className='form-range w-50' min={14} max={100} defaultValue={18} step={1} id={alder} onChange={value => setAlder(value.target.value)}/>
        <p>{alder} år</p>
        {alder<18 && <p>Vær forsiktig ved drikking under 18 år</p>}
        <p>Hvor mange timer skal du drikke?</p>
        <input type="range" className='form-range w-50' min={1} max={24} defaultValue={1} step={0.5} id={timer} onChange={value => setTimer(value.target.value)}/>
        <p>{timer} time(r)</p>
        <p>Er du mann eller kvinne?</p>
        <div className='form-check form-check-inline'>
          <input className='form-check-input' type="radio" id={kjønn} name='kjønn' value="mann" onChange={value => setKjønn(value.target.value)} />
          <label htmlFor={kjønn}>Mann</label>
        </div>
        <div className='form-check form-check-inline'>
          <input className='form-check-input' type="radio" id={kjønn} name='kjønn' value="kvinne" onChange={value => setKjønn(value.target.value)} />
          <label htmlFor={kjønn}>Kvinne</label>
        </div>
        <br />
        {kjønn != null && <button className='btn btn-warning mt-5' data-bs-toggle="modal" data-bs-target="#kalkulertPromille">Kalkuler promille</button>}
      </div>
      <div className='modal fade' id='kalkulertPromille'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='display-6'>Kalkulator</h1>
              <button className='btn-close' data-bs-dismiss="modal"></button>
            </div>
            <div className='modal-body'>
              <p>Du veier {kroppsvekt}kg, er {alder} år gammel, er en {kjønn}, og drikker {alkoholGram} gram alkohol på {timer} time(r).</p>
              <p>Din promille vil bli <span className='text-warning fw-bold'>{KalkulerPromille(alkoholGram, kroppsvekt, timer, kjønn)}</span> på slutten av kvelden. Dine tilstander kan være:</p>
              {Tilstand(KalkulerPromille(alkoholGram, kroppsvekt, timer, kjønn))}
              <p className='mt-4'>Det du drikker vil koste deg <span className='text-warning fw-bold'>0kr.</span></p>
              {alder<18 && <p>Du er <span className='text-danger fw-bold'>under 18 år</span>. Drikk med hensyn.</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kalkulator
