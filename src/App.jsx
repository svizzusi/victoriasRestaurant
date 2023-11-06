import Navbar from "./layout/navbar/Navbar"
import Footer from "./layout/footer/Footer"
import Home from "./views/Home"
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import {useEffect} from "react";
import AboutPage from "./views/AboutPage";
import ContactPage from "./views/ContactPage";
import MenuPage from "./views/MenuPage";

const ScrollToTop = () => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  return null
}

function App() {
  

  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route
          path={'/'}
          element={<Home />}
        ></Route>
        <Route
          path={'/menu'}
          element={<MenuPage />}
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
