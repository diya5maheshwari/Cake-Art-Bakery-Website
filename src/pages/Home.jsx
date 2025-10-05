import React from 'react'
import {Cake} from 'lucide-react'
import '../App.css'
import chef from '../assets/cheef.png'
// import CakePage from '../pages/CakePage'
import FoodBackground from '../Component/FoodBackground'


const Home = () => {
  return (
    <div className='home'>
      <FoodBackground/>
      <div className="heading">
        <h1>Welcome to Our <span>Cake</span> Shop <Cake height={50} width={50} style={{color:'rgba(245, 32, 100, 1)'}}/></h1>
        <p>Your one-stop shop for delicious cakes, pastries & desserts! <br/> 
        We bake fresh every day and specialize in custom cakes for all occasions. 
        <br/><span style={
          {
            color:'rgba(0, 0, 0, 1)',
            fontWeight:'bolder',
            fontSize:'20px'
          }
        } >100% Eggless Guarantee!</span>
      </p>
      </div>
      <div className="img">
        <img src={chef} alt="chef img" height={400} width={400} />
      </div>

    </div>
  
   
  )
}

export default Home
