import React from 'react';
import './Home.css';
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';


import IMG1 from "../Assets/Doctor 1.png"
import IMG2 from "../Assets/Doctor 2.png"
import Logo from "../Assets/HeroLogo.png"


const Home = () => {
  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="header">
      <img alt="" className="logo-nav" src={Logo} /> 
        <div className="logo">W E L L N E S S 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            A Y R V E D A
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            H O S P I T A L</div>
            <button className="login-btn">Login</button>

      </header>

      {/* Navigation Section */}
      <nav className="navigation">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Treatments</a></li>
          <li><a href="#">Foods</a></li>
          <li><a href="#">Find a Doctor</a></li>
          <li><a href="#">Pharmacy</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      {/* Home Section */}
      <section className="home-section">
        <div className="home-content">
          <h1>We empower patients to achieve optimal health and well-being.</h1>
          <p>
          At Wellness Ayurveda Hospital, we invite you to explore the transformative 
          power of Ayurveda. With roots in centuries-old traditions, Ayurveda provides 
          a holistic approach to healing that balances the mind, body, and spirit. 
          Embrace a path of self-discovery and rejuvenation through our comprehensive
           treatments and personalized care. Join us on a journey towards lasting 
           wellness and harmony.
          </p>
          <button className="appointment-btn">Request an Appointment</button>
        </div>
        <div className="doctor-images">
        <img className='Doc-1' src={IMG1} /> 
        <img className='Doc-2' src={IMG2} /> 
          </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
        <img alt="" className="logo-footer" src={Logo} /> 
          <div className="logo-footer-Text">WELLNESS</div>
          <div className="quick-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="about">
            <h4>About</h4>
            <ul>
              <li><a href="#">Find a Doctor</a></li>
              <li><a href="#">Request an Appointment</a></li>
              <li><a href="#">Find a Location</a></li>
              <li><a href="#">Get an Opinion</a></li>
            </ul>
          </div>
          <div className="support">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Donate</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="social-media">
          <a href="#"><FaInstagram size={24} /></a>
          <a href="#"><FaLinkedin size={24} /></a>
          <a href="#"><FaYoutube size={24} /></a>
          <a href="#"><FaFacebook size={24} /></a>
        </div>
      </footer>

      <div className='copy-right'>
      <p>© 2024. Designed by Sahan. All right reserved.</p>
      </div>
    </div>
  );
};

export default Home;
