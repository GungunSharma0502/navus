import React from 'react';
import './css/FeaturesSection.css';

const FeaturesSection = () => {
  const skills = [
    ['LEAD DESIGNER', 'GEN AI', 'DESIGN STRATEGY', 'EXPERIENCE VISION'],
    ['STAKEHOLDER MANAGEMENT', 'HANDS-ON', 'PRODUCT DELIVERY'],
    ['PROTOTYPING', 'DISCOVERY', 'VISUAL DESIGN']
  ];

  return (
    <div className="features-showcase">
      <div className="features-container">
        {/* Left Content */}
        <div className="features-content">
          <div className="features-intro">
            <h2 className="features-intro-text">
              I recently <span className="features-highlight">worked at PayPal</span>, driving improvements to the <span className="features-highlight">Invoicing experience</span>.
            </h2>
          </div>

          <div className="features-details">
            <h3 className="features-company">PayPal</h3>
            <h4 className="features-role">Senior UX Design Lead</h4>
            <p className="features-description">
              At PayPal, I led the Invoicing Design Pod, enhancing the end-to-end 
              platform to drive adoption, flexibility, and more efficient payment 
              experiences — strengthening PayPal's competitive edge.
            </p>
          </div>

          <div className="features-skills">
            {skills.map((row, rowIndex) => (
              <div key={rowIndex} className="features-skill-row">
                {row.map((skill, index) => (
                  <span key={index} className="features-skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Device Mockup */}
        <div className="features-device">
          <div className="features-device-frame">
            <div className="features-device-screen">
              {/* Device mockup content */}
              <div className="features-invoice-preview">
                <div className="features-invoice-header">
                  <div className="features-invoice-logo">PayPal</div>
                  <div className="features-invoice-title">INVOICE</div>
                </div>
                <div className="features-invoice-body">
                  <div className="features-invoice-details">
                    <p className="features-invoice-line">Invoice #: 0001</p>
                    <p className="features-invoice-line">Date: 2025-01-15</p>
                    <p className="features-invoice-line">Due Date: 2025-02-15</p>
                  </div>
                  <div className="features-invoice-items">
                    <div className="features-invoice-item">
                      <span>Web Development</span>
                      <span>$1,500.00</span>
                    </div>
                  </div>
                  <div className="features-invoice-total">
                    <span>Total:</span>
                    <span>USD $1,500.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="features-device-sidebar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;