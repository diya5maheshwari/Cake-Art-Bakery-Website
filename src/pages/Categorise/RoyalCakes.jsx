import React from "react";
import "../../Css/Categorise.css";
import Cards from "../../Component/Cards";

import Cake12 from "../../assets/Cake/watchCake.jpeg"; 
import Cake32 from "../../assets/Cake/flrCake.jpeg";
import Cake42 from "../../assets/Cake/deliciousCake.jpeg";
import Cake52 from "../../assets/Cake/CuitieCake.jpeg";

const RoyalCakes = () => {
  const royalCakes = [
    {
      id: 1,
      name: "Royal Timepiece",
      price: "₹1899",
      image: Cake12,
      description: "Elegant watch-shaped cake for special occasions",
    },
    {
      id: 2,
      name: "Floral Elegance",
      price: "₹1199",
      image: Cake32,
      description: "Beautiful flower-decorated premium cake",
    },
    {
      id: 3,
      name: "Delicious Supreme",
      price: "₹2999",
      image: Cake42,
      description: "Exquisite multi-layer delicious cake",
    },
    {
      id: 4,
      name: "Royal Cutie",
      price: "₹3799",
      image: Cake52,
      description: "Adorable and premium quality royal cake",
    }
  ];

  return (
    <div id="royalcakes" className="category-page">
      <div className="category-header">
        <h1>Our Royal Cakes Collection</h1>
        <p>Premium and exquisite cakes fit for royalty</p>
      </div>

      <div className="products-grid">
        {royalCakes.map((cake) => (
          <Cards key={cake.id} item={cake} />
        ))}
      </div>
    </div>
  );
};

export default RoyalCakes;