import React from "react";
import Navbar from "./Component/Navbar";
import useEffect from "react";

import { useLocation, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CakePage from "./pages/CakePage";
import Hero from "./pages/Hero";
import Footer from "./Component/Footer";
// import Cake from "./pages/Categorise/Cake";
// import Cookies from "./pages/Categorise/Cookies";
// import CupCake from "./pages/Categorise/CupCake";
// import RoyalCakes from "./pages/Categorise/RoyalCakes";
import SecondPage from '../src/pages/Categorise/SecondPage'
import Login from "./pages/Login";
// import { ThemeProvider } from  './Context/ThemeContext'





const App = () => {
  return (

    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cakepage" element={<CakePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/categories/second" element={<SecondPage />} />
        <Route path="/login" element={<Login />} />

        {/* <Route path="/cake" element={<Cake />} />
        <Route path="/categories/cookies" element={<Cookies />} />
        <Route path="/categories/cupcake" element={<CupCake />} />
        <Route path="/categories/royalcakes" element={<RoyalCakes />} /> */}

        <Route
          path="*"
          element={
            <div style={{ padding: "20px", textAlign: "center" }}>
              <h2>Page Not Found</h2>
              <p>Current URL: {window.location.pathname}</p>
            </div>
          }
        />
      </Routes>

      <Footer />
    </div>
  
  );
};



export default App;
