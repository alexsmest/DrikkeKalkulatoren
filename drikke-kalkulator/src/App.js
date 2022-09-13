import "./bootstrap/css/bootstrap.css"
import "./style.css"

import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Info from "./components/Info"
import Footer from "./components/Footer"
import Brennevin from "./components/Brennevin"
import Sterkvin from "./components/Sterkvin"
import Vin from "./components/Vin"
import Øl from "./components/Øl"
import Cider from "./components/Cider"
import Promillekalkulator from "./components/Promillekalkulator"
import Priskalkulator from "./components/Priskalkulator"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Header />
          <Info />
        </Route>
        <Route exact path="/Brennevin">
          <Brennevin />
        </Route>
        <Route exact path="/Sterkvin">
          <Sterkvin />
        </Route>
        <Route exact path="/Vin">
          <Vin />
        </Route>
        <Route exact path="/Øl">
          <Øl />
        </Route>
        <Route exact path="/Cider">
          <Cider />
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