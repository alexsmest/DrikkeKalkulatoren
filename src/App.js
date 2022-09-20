import React from "react"

import "bootstrap/dist/css/bootstrap.css"
import "./style.css"
import "bootstrap/dist/js/bootstrap"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Produkter from "./components/Produkter"
import Info from "./components/Info"
import Footer from "./components/Footer"
import Brennevin from "./components/Produkter/Brennevin"
import Sterkvin from "./components/Produkter/Sterkvin"
import Vin from "./components/Produkter/Vin"
import Øl from "./components/Produkter/Øl"
import Cider from "./components/Produkter/Cider"
import Kalkulator from "./components/Kalkulator"
import Kontakt from "./components/Kontakt"
import Handlekurv from "./components/Handlekurv"

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import { useState } from "react"

function GetHandlekurv(){
  return(
    <h1>Hei</h1>
  )
}

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path ="/">
          <Redirect to="/Hjem" />
        </Route>
        <Route exact path="/Hjem">
          <Hero />
          <Produkter />
          <Info />
        </Route>
        <Route exact path="/Cider" component={Cider} />
        <Route exact path="/Øl" component={Øl} />
        <Route exact path="/Vin" component={Vin} />
        <Route exact path="/Brennevin" component={Brennevin} />
        <Route exact path="/Sterkvin" component={Sterkvin} />
        <Route exact path="/Kalkulator" component={Kalkulator} />
        <Route exact path="/Kontakt" component={Kontakt} />
        <Route exact path="/Handlekurv" component={Handlekurv} />
      </Switch>
    <Footer />
    </Router>
  );
}

export default App;