import React from "react";
import "../../Css/Categorise.css";
import Cards from "../../Component/Cards";


import Cake12 from "../../assets/cookies/second.jpeg"; 
import Cake32 from "../../assets/cookies/fourth.jpeg";
import Cake42 from "../../assets/cookies/third.jpeg";
import Cake52 from "../../assets/cookies/image1.png";
import Cake62 from "../../assets/cookies/image2.png";
import Cake72 from "../../assets/cookies/image4.png";


const Cookies = () => {
  const cookies = [
     {
      id: 1,
      name: "Butter Cookies",
      price: "₹199",
      image: Cake12,
      description: "Crispy and buttery homemade cookies",
    },
    {
      id: 2,
      name: "Chocolate Chip",
      price: "₹249",
      image: Cake32,
      description: "Classic cookies with chocolate chips",
    },
    {
      id: 3,
      name: "Oatmeal Raisin",
      price: "₹229",
      image: Cake42,
      description: "Healthy oatmeal cookies with raisins",
    },
    {
      id: 4,
      name: "Almond Cookies",
      price: "₹299",
      image: Cake52,
      description: "Crunchy cookies with almond flakes",
    },
    {
      id: 5,
      name: "Sugar Cookies",
      price: "₹179",
      image: Cake62,
      description: "Sweet and delicate sugar cookies",
    },
    {
      id: 6,
      name: "Double Chocolate",
      price: "₹279",
      image: Cake72,
      description: "Rich double chocolate cookies",
    }
  ];
  return (
    <div id="cookies" className="category-page">
      <div className="category-header">
        <h1>Our Cookies Collection</h1>
        <p>Crunchy and delicious cookies for every mood</p>
      </div>

      <div className="products-grid">
        {cookies.map((cookie) => (
          <Cards key={cookie.id} item={cookie} />
        ))}
      </div>
    </div>
  );
};

export default Cookies;
