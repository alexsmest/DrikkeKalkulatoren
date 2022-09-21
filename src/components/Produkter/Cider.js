import React from 'react'

import ProdukterNav from '../ProdukterNav'
import Product from '../Product'
import ProductHeader from '../ProductHeader'

import Grevens from "../../data/Cider/Grevens.json"
import Crush from "../../data/Cider/Crush.json"
import Barecider from "../../data/Cider/Barecider.json"
import Sommersby from "../../data/Cider/Sommersby.json"
import SmirnoffIce from "../../data/Cider/SmirnoffIce.json"
import Breezer from "../../data/Cider/Breezer.json"
import Annet from "../../data/Cider/AnnetCider.json"

function Cider() {
  return (
    <>
      <ProdukterNav />
      <div className='container mt-5'>
        <ProductHeader product="cider" />
        <Product product={Grevens} id="grevens" />
        <Product product={Crush} id="crush" />
        <Product product={Barecider} id="Barecider" />
        <Product product={Sommersby} id="Sommersby" />
        <Product product={Breezer} id="Breezer" />
        <Product product={SmirnoffIce} id="Smirnoff" />
        <Product product={Annet} id="Annet" />
      </div>
    </>
  )
}

export default Cider