import React from 'react'
import '../Css/CakePage.css'
import CakeCard from '../Component/CakeCard'


import PappyCake from '../assets/Cake/pappyCake.jpeg'
import Biskut from '../assets/cookies/biskut1.jpeg'
import Cup1 from '../assets/cupCake/cup1.png'
import Shake from '../assets/shake.png'
import Royal from '../assets/Cake/cuitieCake.jpeg'

const CakeCollection = () => {
  const cakes = [
    {
      id: 1,
      name: "Cakes",
      image: PappyCake,
      description: "Rich Vanilla Cutie pappy Shape cake with creamy frosting",
       route: "/cake"  
    },
    {
      id: 2,
      name: "Cookies",
      image: Biskut,
      description: "Classic chocolate chip cookies",
      route: "/categories/cookies" 
    },
    {
      id:3,
      name:"Cupcakes",
      image: Cup1,
      description:"Delightful mini cakes with frosting",
      route: "/categories/cupcake"
    },
    {
      id:5,
      name:"Royal Cakes",
      image:Royal,
      description:"Decadent cakes fit for royalty",
     route: "/categories/royalcakes" 
    }
  ]

  return (
    <section className="cake-page">
      <div className="container">
        <h2>Our Collection</h2>
        <p>Discover our delicious range of eggless cakes</p>
        
        <div className="cakes-grid">
          {cakes.map(cake => (
            <CakeCard key={cake.id} cake={cake} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CakeCollection