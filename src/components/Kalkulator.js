import React from 'react'
import { useState } from "react"
import { Link } from "react-router-dom"

import Handlekurv from './Handlekurv'

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
  const [kroppsvekt, setKroppsvekt] = useState(80);
  const [alder, setAlder] = useState(18);
  const [timer, setTimer] = useState(1);
  const [kjønn, setKjønn] = useState(null);
  var alkoholGram = 0;
  var pris = 0;

  return (
    <div className='pt-4 pb-5 my-5'>
      <div className='container text-center'>
        <h1 className='display-4 fw-bold text-warning'>Kalkuler promille og pris</h1>
        <p>Gram alkohol utregnes fra varene du har valgt <br /> Promille og pris beregnes automatisk basert på produktene du har valg og informasjon om deg</p>
        <div className='container w-75 pt-3 pb-2 text-start'>
          <ul className='list-group shadow'>
            {Handlekurv.length === 0 && 
              <>
                <li className='list-group-item'>Ingen produkter i handlekurven</li>
                <Link to={"/Cider"} className="btn btn-warning rounded-bottom">Finn produkter</Link>
              </>
            }
            {
              Handlekurv.map((x, i) => {
                alkoholGram += Handlekurv[i][4]
                pris += parseInt(Handlekurv[i][1])
                return(
                  <>
                    <li className='list-group-item d-flex justify-content-between align-items-center'>
                      {Handlekurv[i][0]} x 1
                      <span class="badge bg-warning text-dark fw-normal">{Handlekurv[i][1]}kr, {Handlekurv[i][2]}%, {Handlekurv[i][3]}l, {Handlekurv[i][4]}g</span>
                    </li>
                  </>
                )
              })
            }
          </ul>
          <div className='text-center mt-4'>
            {Handlekurv.length > 0 && <button className='btn btn-warning shadow me-sm-3' onClick={() => window.location.reload()}>Tøm handlevogn</button>}
            {Handlekurv.length > 0 && <button className='btn btn-warning shadow' data-bs-toggle="modal" data-bs-target="#informasjonsModal">Fortsett</button>}
          </div>
        </div>
        <div className='modal fade' id='informasjonsModal'>
          <div className='modal-dialog modal-dialog-centered'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h1 className='display-6'>Informasjon</h1>
                <span className='btn-close' data-bs-dismiss="modal"></span>
              </div>
              <div className='modal-body'>
                <p>Jeg er {alder<18 && <span className='text-danger fw-bold'>{alder}</span>}{alder>=18 && <span className='text-warning fw-bold'>{alder}</span>} år gammel{alder<18 && <span>, drikk med hensyn</span>}</p>
                <input type="range" className='form-range w-75 mb-3' min={14} max={100} defaultValue={18} step={1} id={alder} onChange={value => setAlder(value.target.value)}/>
                <p>Jeg veier <span className='text-warning fw-bold'>{kroppsvekt}kg</span></p>
                <input type="range" className='form-range w-75 mb-3' min={20} max={140} defaultValue={80} step={1} id={kroppsvekt} onChange={value => setKroppsvekt(value.target.value)}/>
                <p>Jeg skal drikke i <span className='text-warning fw-bold'>{timer}</span> time(r)</p>
                <input type="range" className='form-range w-75 mb-3' min={1} max={24} defaultValue={1} step={0.5} id={timer} onChange={value => setTimer(value.target.value)}/>
                <p className='mb-1'>Jeg er en</p>
                <div className='form-check form-check-inline'>
                  <input className='form-check-input' type="radio" id={kjønn} name='kjønn' value="mann" onChange={value => setKjønn(value.target.value)} />
                  <label htmlFor={kjønn}>Mann</label>
                </div>
                <div className='form-check form-check-inline'>
                  <input className='form-check-input' type="radio" id={kjønn} name='kjønn' value="kvinne" onChange={value => setKjønn(value.target.value)} />
                  <label htmlFor={kjønn}>Kvinne</label>
                </div>
                <br />
                {kjønn != null && <button className='btn btn-warning mt-4 mb-2 w-100 shadow' data-bs-toggle="modal" data-bs-target="#kalkulertPromille">Kalkuler promille</button>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='modal fade' id='kalkulertPromille'>
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='display-6'>Kalkulator</h1>
              <button className='btn-close' data-bs-dismiss="modal"></button>
            </div>
            <div className='modal-body'>
              <p>Du er en {alder<18 && <span className='text-danger fw-bold'>{alder}</span>}{alder>=18 && <span className='text-warning fw-bold'>{alder}</span>} år gammel <span className='text-warning fw-bold'>{kjønn} </span> 
              som veier <span className='text-warning fw-bold'>{kroppsvekt}kg</span> og 
              skal drikke <span className='text-warning fw-bold'>{alkoholGram}</span> gram alkohol 
              på <span className='text-warning fw-bold'>{timer}</span> time(r).</p>
              <p>Din promille vil bli <span className='text-warning fw-bold'>{KalkulerPromille(alkoholGram, kroppsvekt, timer, kjønn)}</span> på slutten av kvelden. Dine tilstander kan være:</p>
              {Tilstand(KalkulerPromille(alkoholGram, kroppsvekt, timer, kjønn))}
              <p className='mt-4'>Det du drikker vil koste deg <span className='text-warning fw-bold'>{pris}kr</span>.</p>
              {alder<18 && <p>Du er <span className='text-danger fw-bold'>under 18 år</span>. Drikk med hensyn.</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kalkulator
