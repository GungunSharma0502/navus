import React from 'react';
import './css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-heading">Navus IT Services</h3>
          <div className="logo-box">
            <span className="logo-text">N</span>
            <span className="logo-subtext">Navus</span>
          </div>
          <p className="footer-description">
            We are digital marketing company in Faridabad, India. We help you to build your place in the crowd. Our Enthusiastic teams are passionate about internet marketing trends.
          </p>
          <div className="social-icons">
            <a href="#" className="social-link" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Know More</h3>
          <ul className="footer-list">
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#blogs">Our Blogs</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Services</h3>
          <ul className="footer-list">
            <li><a href="#listing">Listing & Cataloging</a></li>
            <li><a href="#brand-store">Brand Store</a></li>
            <li><a href="#sponsored">Sponsored Ads</a></li>
            <li><a href="#enhanced">Enhanced Brand Content</a></li>
            <li><a href="#account">Account Management</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-list">
            <li><a href="#faqs">Faqs</a></li>
            <li><a href="#terms">Terms and Conditions</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Contact</h3>
          <div className="contact-info">
            <p className="contact-address">
              E1/72, Near Escorts<br />
              Muiesar Metro Station,<br />
              Sec-11, Faridabad, 121006
            </p>
            <p className="contact-phone">+91 8750012222</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Navus IT Services. All Rights Reserved. 
          <a href="#terms" className="footer-bottom-link">Terms of Use</a>
          <a href="#privacy" className="footer-bottom-link">Privacy Policy</a>
        </p>
      </div>

      <button className="scroll-top" aria-label="Scroll to top">
        <i className="fas fa-chevron-up"></i>
      </button>
    </footer>
  );
};

export default Footer;