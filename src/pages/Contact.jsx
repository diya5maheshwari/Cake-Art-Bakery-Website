import React, { useState } from "react";
import "../Css/contact.css";
import { Phone, Mail, MapPin, Clock, Send, Instagram, Link } from "lucide-react";

const Contact = () => {
   

   React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Get In Touch</h1>
          <p>
            We'd love to hear from you! Whether you have questions about our
            cakes, want to place a custom order, or just want to say hello, feel
            free to reach out.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>Reach out to us through any of the following channels:</p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <div className="contact-text">
                  <h3>Phone</h3>
                  <p>+91 8126242***</p>
                  {/* <p>+91 98765 43211</p> */}
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-text">
                  <h3>Email</h3>
                  <p>chefnishant9@gmail.com</p>
                  {/* <p>support@cakeshop.com</p> */}
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <div className="contact-text">
                  <h3>Address</h3>
                  <p>Cake art, Pakki Gali</p>
                  <p>near by ghantaghar, Kasganj,Uttar pradesh ,India 207123</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Clock size={24} />
                </div>
                <div className="contact-text">
                  <h3>Opening Hours</h3>
                  <p>Monday - Saturday: 9:00 AM - 10:00 PM</p>
                  <p>Sunday: 9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="social-links">
              <h3>Follow Us</h3>
              <div className="social-icons">
                {/* <a href="#" className="social-link">Facebook</a> */}
                <a
                  href="https://www.instagram.com/chefnishant9_kasganj?igsh=MWl4cjE2ZHFkOWt0dQ=="
                  className="social-link"
                >
                  Instagram
                </a>
                  {/* <Link to="https://www.instagram.com/chefnishant9_kasganj?igsh=MWl4cjE2ZHFkOWt0dQ==" >
                      <Instagram size={40} style={{color:'black' }} />
                  </Link> */}
                 
                <a href="https://wa.me/c/918126242611" className="social-link">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <h2>Send us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    Full Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    Email Address <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">
                    Phone Number <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">
                    Subject <span style={{ color: "red" }}>*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="custom-order">Custom Cake Order</option>
                    <option value="general-inquiry">General Inquiry</option>
                    <option value="complaint">Complaint</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Message <span style={{ color: "red" }}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your requirements, special occasions, or any questions you have..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <h2>Find Us Here</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3529.0561403208167!2d78.64279220999981!3d27.80804277602539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974e01789a2700f%3A0x359f8f25afbbefa8!2sPakki%20Gali%2C%20Kasganj%2C%20Uttar%20Pradesh%20207123!5e0!3m2!1sen!2sin!4v1759503705344!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "15px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Cake Shop Location in Kasganj"
            ></iframe>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
