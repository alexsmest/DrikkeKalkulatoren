import "./bootstrap/css/bootstrap.css"
import "./style.css"

import Navbar from "./components/Navbar.js"
import Header from "./components/Header.js"
import Info from "./components/Info.js"
import Footer from "./components/Footer.js"
import Brennevin from "./components/Brennevin.js"
import Sterkvin from "./components/Sterkvin.js"
import Vin from "./components/Vin.js"
import Øl from "./components/Øl.js"
import Cider from "./components/Cider.js"

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
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;