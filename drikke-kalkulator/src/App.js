import "./bootstrap/css/bootstrap.css"
import "./style.css"
import Navbar from "./components/Navbar.js"
import Header from "./components/Header.js"
import Info from "./components/Info.js"

import {Routes, Route} from "react-router"

function App() {
  return (
    <>
      <Navbar />
      <Header title="Drikke kalkulator" desc="Drikk deg drita"/>
      <Info />
    </>
  );
}

export default App;