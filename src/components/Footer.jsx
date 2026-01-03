import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <style>{`
        /* Footer Styles */
        .footer {
          background: #07111bff;
          color: #ffffff;
          padding: 60px 20px 20px;
          position: relative;
        }

        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-section {
          display: flex;
          flex-direction: column;
        }

        .footer-heading {
          color: #ffffff;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 25px;
          text-transform: capitalize;
        }

        .logo-box {
          width: 80px;
          height: 80px;
          border: 3px solid #ffffff;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          position: relative;
        }

        .logo-text {
          font-size: 36px;
          font-weight: bold;
          color: #ffffff;
          line-height: 1;
        }

        .logo-subtext {
          font-size: 12px;
          color: #ffffff;
          font-weight: 600;
          margin-top: 2px;
        }

        .footer-description {
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 25px;
        }

        .social-icons {
          display: flex;
          gap: 15px;
        }

        .social-link {
          width: 40px;
          height: 40px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 16px;
          transition: all 0.3s ease;
          text-decoration: none;
          cursor: pointer;
        }

        .social-link:hover {
          border-color: #ffffff;
          background-color: #ffffff;
          color: #0a0a0a;
          transform: translateY(-3px);
        }

        .footer-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-list li {
          margin-bottom: 15px;
          position: relative;
          padding-left: 20px;
        }

        .footer-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 8px;
          height: 8px;
          border: 2px solid rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          background: transparent;
          transition: all 0.3s ease;
        }

        .footer-list li:hover::before {
          background: #ffffff;
          border-color: #ffffff;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }

        .footer-list li a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-size: 14px;
          transition: all 0.3s ease;
          display: inline-block;
          cursor: pointer;
        }

        .footer-list li:hover a {
          color: #ffffff;
          padding-left: 5px;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .contact-address {
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
          line-height: 1.6;
          margin: 0;
        }

        .contact-phone {
          color: #ffffff;
          font-size: 16px;
          font-weight: 600;
          margin: 0;
        }

        .footer-bottom {
          max-width: 1400px;
          margin: 0 auto;
          padding-top: 30px;
          text-align: center;
        }

        .footer-bottom p {
          color: rgba(255, 255, 255, 0.6);
          font-size: 14px;
          margin: 0;
        }

        .footer-bottom-link {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          margin-left: 20px;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .footer-bottom-link:hover {
          color: #ffffff;
        }

        .scroll-top {
          position: fixed;
          right: 30px;
          bottom: 30px;
          width: 50px;
          height: 50px;
          background: #ffffff;
          border: none;
          border-radius: 50%;
          color: #0a0a0a;
          font-size: 20px;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          visibility: hidden;
          transform: translateY(20px);
          z-index: 1000;
        }

        .scroll-top.show {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .scroll-top:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 20px rgba(255, 255, 255, 0.5);
          background: #f0f0f0;
        }

        .scroll-top:active {
          transform: translateY(-2px);
        }

        @media (max-width: 1200px) {
          .footer-container {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .footer {
            padding: 40px 20px 20px;
          }

          .scroll-top {
            right: 20px;
            bottom: 20px;
            width: 45px;
            height: 45px;
            font-size: 18px;
          }
        }

        @media (max-width: 480px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .scroll-top {
            right: 15px;
            bottom: 15px;
            width: 45px;
            height: 45px;
          }
        }

        /* Demo content for scrolling */
        .demo-content {
          padding: 50px 20px;
          max-width: 1200px;
          margin: 0 auto;
          min-height: 100vh;
        }

        .demo-section {
          margin-bottom: 40px;
          padding: 30px;
          background: #f5f5f5;
          border-radius: 8px;
        }

        .demo-section h2 {
          color: #07111bff;
          margin-bottom: 15px;
        }

        .demo-section p {
          color: #666;
          line-height: 1.6;
        }
      `}</style>

      
      
       

      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-heading">Fine Grow Solutions IT Services</h3>
          <div className="logo-box">
            <span className="logo-text">FG</span>
            <span className="logo-subtext">Fine Grow</span>
          </div>
          <p className="footer-description">
            We are digital marketing company in Faridabad, India. We help you to build your place in the crowd. 
            Our Enthusiastic teams are passionate about internet marketing trends.
          </p>
          <div className="social-icons">
            <a href="#" className="social-link" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Know More</h3>
          <ul className="footer-list">
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Contact</h3>
          <div className="contact-info">
            <p className="contact-address">
              12Th Avenue, RPS Building,<br />
              &work, Tower 4, LG Floor, <br />
              Faridabad, 121006
            </p>
            <p className="contact-phone">+91 95600 82761 </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Fine Grow Solutions IT Services. All Rights Reserved.      
          {/* <a href="#terms" className="footer-bottom-link">Terms of Use</a>
          <a href="#privacy" className="footer-bottom-link">Privacy Policy</a> */}
        </p>
      </div>

      <button 
        className={`scroll-top ${showScrollTop ? 'show' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </footer>
  );
};

export default Footer;