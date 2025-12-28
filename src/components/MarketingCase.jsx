import React from 'react';
import './css/MarketingCase.css';
import Lottie from "lottie-react";
import Marketing from '../assets/Marketing.json';
import Business from '../assets/Business.json';

const MarketingCase = () => {
  return (
    <div className="marketing-case2-container">
      {/* Section 1 - Heading */}
    
      
        
      

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
          <h2 className="marketing-case2-company-name">DISTRIBUTING YOUR MARKETING CAMPAIGN</h2>
          <h3 className="marketing-case2-role">Focus on all of the key features for your product</h3>
          <p className="marketing-case2-description">
            Led the product design team at Qapital, building and scaling a thriving design organization that attracted top-tier designers and researchers, fostered a healthy culture, and elevated design as a driver of product and business success.
          </p>
          
          <div className="marketing-case2-tags">
            <span className="marketing-case2-tag">Brand Awareness</span>
            
            <span className="marketing-case2-tag">Digital Growth Strategy</span>
            <span className="marketing-case2-tag">Audience Targeting</span>
           
            <span className="marketing-case2-tag">Performance Tracking</span>
            <span className="marketing-case2-tag">Conversion Optimization</span>
            <span className="marketing-case2-tag">Marketing Automation</span>
             <span className="marketing-case2-tag">Multi-Channel Distribution</span>
             <span className="marketing-case2-tag">Product & Service Promotion</span>
          </div>
          
          <button className="marketing-case2-button">View Campaign Strategy</button>
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
            <h2 className="marketing-case2-company-name">WE SEEK THE MOST EFFICIENT CAMPAIGNS</h2>
           
          </div>
          <h3 className="marketing-case2-role">Converting clients through your marketing campaign</h3>
          <p className="marketing-case2-description">
           Every digital marketing project has different challenges and each business has its own unique needs. That’s why we offer personalized solutions for your business.
          </p>
          
          <div className="marketing-case2-tags">
            <span className="marketing-case2-tag">Brand Awareness & Visibility</span>
            <span className="marketing-case2-tag">Digital Growth Strategy</span>
            <span className="marketing-case2-tag">Audience Targeting & Segmentation</span>
            <span className="marketing-case2-tag">Multi-Channel Campaign Distribution</span>
            <span className="marketing-case2-tag">Performance Tracking & Analytics</span>
            <span className="marketing-case2-tag">Marketing Automation & Lead Nurturing </span>
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