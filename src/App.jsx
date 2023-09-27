import Navbar from "./layout/navbar/Navbar"
import Footer from "./layout/footer/Footer"
import Home from "./views/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./views/About";
import Location from "./views/Location";

function App() {
  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path={'/'}
          element={<Home />}
        ></Route>
        <Route
          path={'/about'}
          element={<About />}
        ></Route>
        <Route
          path={'/location'}
          element={<Location />}
        ></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
