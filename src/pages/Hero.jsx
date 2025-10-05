import React from 'react'
import CakePage from './CakePage'
import Home from './Home'
import About from './About'
import Contact from './Contact' 

import Footer from '../Component/Footer'
// import CakeCollection from './CakeCollection'

const Hero = () => {
  return (
    <div>
      <Home/>
      <CakePage/>
      <About/>
      <Contact/>
      
    </div>
  )
}

export default Hero
