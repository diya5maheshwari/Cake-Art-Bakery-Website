import React from 'react'
import '../Css/Cards.css'

const Cards = ({ item }) => {
  return (
    <div className="cards-cake-card">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p className="cards-cake-price">{item.price}</p>
      <button className="cards-order-btn">Know More</button>
    </div>
  )
}

export default Cards


