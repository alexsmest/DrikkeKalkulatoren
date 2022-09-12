import "./bootstrap/css/bootstrap.css"
import "./style.css"
import Navbar from "./components/Navbar.js"
import Header from "./components/Header.js"
import Info from "./components/Info.js"

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Info />
    </>
  );
}

export default App;