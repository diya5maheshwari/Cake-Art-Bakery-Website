import React from "react";
import "../../Css/Categorise.css";
import Cards from "../../Component/Cards";

import Cake12 from "../../assets/cupCake/cup1.png"; 
import Cake32 from "../../assets/cupCake/cup2.png";
import Cake42 from "../../assets/cupCake/cup3.png";
import Cake52 from "../../assets/cupCake/cup4.png";
import Cake62 from "../../assets/cupCake/cup5.png";
import Cake72 from "../../assets/cupCake/cup6.png";

const CupCake = () => {
  const cupcakes = [
    {
      id: 1,
      name: "Vanilla Dream",
      price: "₹99",
      image: Cake12,
      description: "Soft vanilla cupcake with creamy frosting",
    },
    
    {
      id: 3,
      name: "Strawberry Swirl",
      price: "₹129",
      image: Cake42,
      description: "Fresh strawberry cupcake with pink frosting",
    },
    {
      id: 4,
      name: "Red Velvet Magic",
      price: "₹139",
      image: Cake52,
      description: "Classic red velvet with cream cheese frosting",
    },
    {
      id: 5,
      name: "Butterscotch Bliss",
      price: "₹109",
      image: Cake62,
      description: "Butterscotch flavored with caramel drizzle",
    },
    {
      id: 6,
      name: "Double Chocolate",
      price: "₹149",
      image: Cake72,
      description: "Extra chocolatey with chocolate chips",
    }
    
  ];

  return (
    <div id="cupcakes" className="category-page">
      <div className="category-header">
        <h1>Our CupCake Collection</h1>
        <p>Delicious and delightful cupcakes for every occasion</p>
      </div>

      <div className="products-grid">
        {cupcakes.map((cupcake) => (
          <Cards key={cupcake.id} item={cupcake} />
        ))}
      </div>
    </div>
  );
};

export default CupCake;