import React from 'react';
import './css/ContactSection.css';

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="contact-container">
        <div className="contact-content-wrapper">
          {/* Left Side - Text Content */}
          <div className="contact-text-side">
            <h3 className="contact-subtitle">I'll Help You</h3>
            <h2 className="contact-title">Achieve Your Goals.</h2>
          </div>

          {/* Right Side - Main Content */}
          <div className="contact-main-content">
            <div className="contact-header">
              <h1 className="contact-main-title">What I Bring</h1>
              <p className="contact-description">
                I help you build the best products, develop world-class with your needs.
              </p>
            </div>

            <div className="contact-buttons">
              <button className="contact-btn contact-btn-primary">
                The Brief
              </button>
              <button className="contact-btn contact-btn-secondary">
                View Playbook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;