import "./bootstrap/css/bootstrap.css"
import "./style.css"
import Navbar from "./components/Navbar.js"
import Header from "./components/Header.js"
import Info from "./components/Info.js"
import Footer from "./components/Footer.js"

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Info />
      <Footer />
    </>
  );
}

export default App;