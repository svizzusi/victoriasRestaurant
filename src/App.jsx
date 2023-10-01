import Navbar from "./layout/navbar/Navbar"
import Footer from "./layout/footer/Footer"
import Home from "./views/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./views/AboutPage";
import ContactPage from "./views/ContactPage";

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
          element={<AboutPage />}
        ></Route>
        <Route
          path={'/contact'}
          element={<ContactPage />}
        ></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
