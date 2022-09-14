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
import Promillekalkulator from "./components/Promillekalkulator"
import Priskalkulator from "./components/Priskalkulator"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router forceRefresh={true}>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Hero />
          <Produkter />
          <Info />
        </Route>
        <Route exact path="/Cider">
          <Cider />
        </Route>
        <Route exact path="/Øl">
          <Øl />
        </Route>
        <Route exact path="/Vin">
          <Vin />
        </Route>
        <Route exact path="/Sterkvin">
          <Sterkvin />
        </Route>
        <Route exact path="/Brennevin">
          <Brennevin />
        </Route>
        <Route exact path="/Promillekalkulator">
          <Promillekalkulator />
        </Route>
        <Route exact path="/Priskalkulator">
          <Priskalkulator />
        </Route>
      </Switch>
    <Footer />
    </Router>
  );
}

export default App;