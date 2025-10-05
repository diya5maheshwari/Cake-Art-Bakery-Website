import React from 'react';
import '../App.css'
import iceCream from '../assets/ice-cream.png';
import cake from '../assets/cake.png';
import dessert from '../assets/dessert.png';

const FoodBackground = () => {
  return (
    <div className="food-background">
      {/* Different classes for each item with unique positions */}
      <img src={iceCream} className="food-item item-1" alt="ice cream" />
      <img src={cake} className="food-item item-2" alt="cake" />
      <img src={dessert} className="food-item item-3" alt="dessert" />
      
      <img src={iceCream} className="food-item item-4" alt="ice cream" />
      <img src={cake} className="food-item item-5" alt="cake" />
      <img src={dessert} className="food-item item-6" alt="dessert" />
      
      <img src={iceCream} className="food-item item-7" alt="ice cream" />
      <img src={cake} className="food-item item-8" alt="cake" />
      <img src={dessert} className="food-item item-9" alt="dessert" />
      
      <img src={iceCream} className="food-item item-10" alt="ice cream" />
      <img src={cake} className="food-item item-11" alt="cake" />
      <img src={dessert} className="food-item item-12" alt="dessert" />
    </div>
  );
};

export default FoodBackground;