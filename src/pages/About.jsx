import React from 'react'
import '../Css/About.css'
import Footer from '../Component/Footer'
import chefImage from '../assets/image.png' 

const About = () => {

    React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about">

      <div className="about-image">
        <img 
          src={chefImage} 
          alt="Professional Chef" 
          className="chef-img"
        />
      </div>

      <div className="about-content">
        <h1>About Our Bakery</h1>
        <p>This is a cake website where you can find a variety of delicious cakes to satisfy your sweet tooth. 
          Whether you're looking for a classic chocolate cake, a fruity cheesecake, or a custom-designed cake for a special occasion, 
          we've got you covered.</p>
        
        <p>Our cakes are made with the finest ingredients and crafted with care to ensure every bite is a delightful experience. 
          Explore our collection and find the perfect cake for your next celebration!</p>
        
        <h2>Our Mission</h2>
        <p>Our mission is to bring joy and sweetness to every occasion with our delectable cakes. We believe in creating memorable experiences through our artisanal baking techniques and passion for perfection.</p>
      </div>
    </div>
  )
}

export default About