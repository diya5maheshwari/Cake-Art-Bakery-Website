import React from 'react'
import '../Css/Footer.css'
import { Cake, Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-section">
          <div className="footer-logo">
            <Cake size={32} />
            <span className="logo-text">Sweet Delights</span>
          </div>
          <p className="footer-description">
            Your favorite cake shop in Kasganj. Fresh, delicious, and made with love.
          </p>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Info</h3>
          <div className="contact-item">
            <MapPin size={18} />
            <span>Pakki Gali, Kasganj, UP</span>
          </div>
          <div className="contact-item">
            <Phone size={18} />
            <span>+91 8126242***</span>
          </div>
          <div className="contact-item">
            <Mail size={18} />
            <span>chefnishant9@gmail.com</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/cake">Our Cakes</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Hours */}
        <div className="footer-section">
          <h3>Opening Hours</h3>
          <p>Mon - Sat: 9AM - 10PM</p>
          <p>Sunday: 9AM - 9PM</p>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2024 Sweet Delights Cake Shop. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer