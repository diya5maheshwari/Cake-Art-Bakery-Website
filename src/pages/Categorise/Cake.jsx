import React from 'react'
import '../../Css/Categorise.css'  
import Cards from '../../Component/Cards'



import Pappy from '../../assets/Cake/pappyCake.jpeg'
import Cake11 from '../../assets/Cake/Cake.jpeg'
import Cake21 from '../../assets/Cake/chillcake.jpeg'
import Cake31 from '../../assets/Cake/flrCake.jpeg'
import Cake41 from '../../assets/Cake/golgapaCake.jpeg'
import Cake51 from '../../assets/Cake/iceCake.jpeg'
import Cake61 from '../../assets/Cake/krishnaCake.jpeg'
import Cake71 from '../../assets/Cake/MonthCake.jpeg'
import Cake81 from '../../assets/Cake/togetherCake.jpeg'



const Cakes = () => {


  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

   const cakes = [
  {
    id: 1,
    name: "Chocolate Fantasy",
    price: "₹599",
    image: Pappy,
    description: "Rich chocolate cake with creamy frosting"
  },
  {
    id: 2,
    name: "Vanilla Dream", 
    price: "₹499",
    image: Cake11,
    description: "Classic vanilla with buttercream icing"
  },
  {
    id: 3,
    name: "Strawberry Delight",
    price: "₹699", 
    image: Cake21,
    description: "Fresh strawberries with whipped cream"
  },
  {
    id: 4,
    name: "Floral Elegance",
    price: "₹799",
    image: Cake31,
    description: "Beautiful flower decorated cake"
  },
  {
    id: 5,
    name: "GolGappa Surprise",
    price: "₹849",
    image: Cake41,
    description: "Unique pani puri flavored cake"
  }
]



  return (
    < div id='cakes' className="category-page">
      <div className="category-header">
        <h1>Our Cake Collection</h1>
        <p>Delicious eggless cakes for every celebration</p>
      </div>
      
      <div className="products-grid">
        {cakes.map(tasty => (
          <Cards key={tasty.id} item={tasty} />
        ))}
      </div>

  
    </div>
  )
}

export default Cakes
