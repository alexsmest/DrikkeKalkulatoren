import "./bootstrap/css/bootstrap.css"
import "./style.css"

import Navbar from "./components/Navbar.js"
import Header from "./components/Header.js"
import Info from "./components/Info.js"
import Footer from "./components/Footer.js"

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
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;