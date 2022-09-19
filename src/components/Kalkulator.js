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

function Kalkulator() {
  const [alkoholGram, setAlkoholGram] = useState(0);
  const [kroppsvekt, setKroppsvekt] = useState(0);
  const [timer, setTimer] = useState(0);

  const kroppsVektId = "";

  return (
    <div className='pt-4 pb-5 my-5 text-center border-bottom'>
      <h1 className='display-4'>Kalkuler promille og pris</h1>
      <p>Gram alkohol utregnes fra varene du har valgt, promille og pris beregnes automatisk</p>
      <div className='container w-25 pt-3 pb-2 text-start'>
        <ul className='list-group'>
          <li className='list-group-item'>Cider x 3</li>
          <li className='list-group-item'>Øl x 5</li>
          <li className='list-group-item'>Spritflaske x 1</li>
        </ul>
      </div>
      <h1 className='display-6 mt-5'>Vekt</h1>
      <p>Hvor mye veier du?</p>
      <input type="range" className='form-range w-25' min={20} max={200} step={1} id={kroppsVektId} onChange={e => setKroppsvekt(e.target.value)}/>
      <p>{kroppsvekt}kg</p>
      
    </div>
  )
}

export default Kalkulator
