import React, { useState } from "react";
import logo from "../assets/logo.png";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo_img" height={110} width={110} />
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-links ${isMenuOpen ? "nav-active" : ""}`}>
        <Link className="link" to="/" onClick={() => setIsMenuOpen(false)}>
          Home
        </Link>
        <Link
          className="link cake-special"
          to="/categories/second"
          onClick={() => setIsMenuOpen(false)}
        >
          Cake ही Cake
        </Link>
        <Link className="link" to="/about" onClick={() => setIsMenuOpen(false)}>
          About
        </Link>
        <Link
          className="link"
          to="/contact"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact-Us
        </Link>
        {/* <button className="btn nav-btn">Login</button> */}

        <Link className="btn nav-btn" to="/login" onClick={() => setIsMenuOpen(false)}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;



// import React, { useState } from 'react'
// import logo from '../assets/logo.png'
// import '../App.css'
// import { Link } from 'react-router-dom'
// import { useTheme } from '../context/ThemeContext'
// import { Sun, Moon } from 'lucide-react'

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const { isDarkMode, toggleTheme } = useTheme()


//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen)
//   }

//   return (
//     <div className={`navbar ${isDarkMode ? 'dark' : ''}`}>
//       <div className="logo">
//         <Link to='/'><img src={logo} alt="logo_img" height={110} width={110} /></Link> 
//       </div>

//       <div className="hamburger" onClick={toggleMenu}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>

//       <div className={`nav-links ${isMenuOpen ? 'nav-active' : ''}`}>
//         <Link className='link' to='/' onClick={() => setIsMenuOpen(false)}>Home</Link> 
//         <Link className='link cake-special' to='/categories/second' onClick={() => setIsMenuOpen(false)}>
//           Cake ही Cake
//         </Link>
//         <Link className='link' to='/about' onClick={() => setIsMenuOpen(false)}>About</Link>
//         <Link className='link' to='/contact' onClick={() => setIsMenuOpen(false)}>Contact-Us</Link>
        
// {/*       
//         <button className='theme-toggle-btn' onClick={toggleTheme}>
//           {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
//         </button> */}
        
//         <button className='btn nav-btn'>Login</button>
//       </div>
//     </div>
//   )
// }

// export default Navbar
