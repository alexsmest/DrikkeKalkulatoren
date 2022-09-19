import React from 'react'
import { useState } from "react"

function KalkulerPromille(alkoholGram, kroppsvekt, timer, kjonn) {
  var blodVektkalk = () => {
      if(kjonn === "mann") {
          return kroppsvekt * 0.7
      } else if (kjonn === "kvinne") {
          return kroppsvekt * 0.6
      }
  }
  var PromilleEttrTid = (alkoholGram/blodVektkalk()) - (0.15 * timer)
  return(Math.abs(PromilleEttrTid.toFixed(2)))
}

function Promillekalkulator() {
  const [alkoholGram, setAlkoholGram] = useState(0);
  const [kroppsvekt, setKroppsvekt] = useState(0);
  const [timer, setTimer] = useState(0);
  return (
    <div className='container mt-5'>
        <h1 className='display-4 text-center'>Promillekalkulator</h1>
        <input type="number" onChange={input => setAlkoholGram(input.target.value)} />
        <p>Gram alkohol: {alkoholGram}</p>
        <input type="number" onChange={input => setKroppsvekt(input.target.value)} />
        <p>Kroppsvekt: {kroppsvekt}</p>
        <input type="number" onChange={input => setTimer(input.target.value)} />
        <p>Antall timer: {timer}</p>
        <h1>Promille for menn etter {timer} timer: {KalkulerPromille(alkoholGram, kroppsvekt, timer, "mann")}</h1>
        <h1>Promille for kvinner etter {timer} timer: {KalkulerPromille(alkoholGram, kroppsvekt, timer, "kvinne")}</h1>
    </div>
  )
}

export default Promillekalkulator
