import React from 'react';
import './css/MarketingCase.css';
import Lottie from "lottie-react";
import Marketing from '../assets/Marketing.json';
import Business from '../assets/Business.json';

const MarketingCase = () => {
  return (
    <div className="marketing-case2-container">
      {/* Section 1 - Heading */}
    
        <div className="marketing-case2-content-wrapper">
          <h1 className="marketing-case2-heading">
            Selected work <span className="marketing-case2-heading-light">that makes lives better</span> and businesses stronger.
          </h1>
        </div>
        
      

      {/* Section 2 - Qapital */}
      <section className="marketing-case2-section">
        <div className="marketing-case2-image-wrapper">
          <Lottie 
            animationData={Marketing}
            loop={true}
            className="marketing-case2-phone-image"
          />
        </div>
        
        <div className="marketing-case2-case-content">
          <h2 className="marketing-case2-company-name">Qapital</h2>
          <h3 className="marketing-case2-role">Director of Product Design</h3>
          <p className="marketing-case2-description">
            Led the product design team at Qapital, building and scaling a thriving design organization that attracted top-tier designers and researchers, fostered a healthy culture, and elevated design as a driver of product and business success.
          </p>
          
          <div className="marketing-case2-tags">
            <span className="marketing-case2-tag">LEADERSHIP</span>
            <span className="marketing-case2-tag">DESIGN STRATEGY</span>
            <span className="marketing-case2-tag">EXPERIENCE LED</span>
            <span className="marketing-case2-tag">FINTECH</span>
            <span className="marketing-case2-tag">STRATEGIC RESEARCH</span>
            <span className="marketing-case2-tag">EXPERIENCE VISION</span>
            <span className="marketing-case2-tag">STAFF</span>
            <span className="marketing-case2-tag">STAKEHOLDER MANAGEMENT</span>
          </div>
          
          <button className="marketing-case2-button">View Case Story</button>
        </div>
        
        <div className="marketing-case2-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* Section 3 - Zettle */}
      <section className="marketing-case2-section">
        <div className="marketing-case2-image-wrapper">
          <Lottie 
            animationData={Business}
            loop={true}
            className="marketing-case2-phone-image"
          />
        </div>
        
        <div className="marketing-case2-case-content">
          <div className="marketing-case2-logo-wrapper">
            <h2 className="marketing-case2-company-name">Zettle</h2>
            <p className="marketing-case2-by-text">by PayPal</p>
          </div>
          <h3 className="marketing-case2-role">Area Design Lead</h3>
          <p className="marketing-case2-description">
            I built shared knowledge of how money flows between Zettle and PayPal, translating complex financial processes into clearer, more seamless user experiences.
          </p>
          
          <div className="marketing-case2-tags">
            <span className="marketing-case2-tag">AREA LEAD</span>
            <span className="marketing-case2-tag">EXPERIENCE LED</span>
            <span className="marketing-case2-tag">FINTECH</span>
            <span className="marketing-case2-tag">TRANSFORMATION</span>
            <span className="marketing-case2-tag">DESIGN STRATEGY</span>
            <span className="marketing-case2-tag">STAKEHOLDER MANAGEMENT</span>
          </div>
          
          <button className="marketing-case2-button">View Case Story</button>
        </div>
        
        <div className="marketing-case2-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default MarketingCase;