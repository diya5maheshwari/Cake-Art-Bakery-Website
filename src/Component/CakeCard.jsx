import React from "react";
import "../Css/CakePage.css";

const CakeCard = ({ cake }) => {
  return (
    <div className="cake-card">
      <img src={cake.image} alt={cake.name} />
      <h3>{cake.name}</h3>
      <p>{cake.description}</p>

      <button className="order-btn">Know More</button>
    </div>
  );
};

export default CakeCard;
