import React from 'react';
import './css/MarketingCase.css';

const MarketingCase = () => {
  return (
    <div className="marketing-case2-container">
      {/* Section 2 - Marketing Campaign */}
      <section className="marketing-case2-section">
        <div className="marketing-case2-image-wrapper">
          <div className="marketing-case2-image-circle">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="90" fill="#8B5CF6" opacity="0.1"/>
              <path d="M100 40L120 80H80L100 40Z" fill="#8B5CF6"/>
              <circle cx="100" cy="100" r="15" fill="#8B5CF6"/>
              <path d="M100 115L85 145L115 145L100 115Z" fill="#8B5CF6"/>
              <path d="M115 100L145 85L145 115L115 100Z" fill="#8B5CF6"/>
              <path d="M85 100L55 85L55 115L85 100Z" fill="#8B5CF6"/>
              <circle cx="100" cy="70" r="8" fill="#A78BFA"/>
              <circle cx="100" cy="130" r="8" fill="#A78BFA"/>
              <circle cx="70" cy="100" r="8" fill="#A78BFA"/>
              <circle cx="130" cy="100" r="8" fill="#A78BFA"/>
            </svg>
          </div>
        </div>
        
        <div className="marketing-case2-case-content">
          <h2 className="marketing-case2-company-name">DISTRIBUTING YOUR MARKETING CAMPAIGN</h2>
          <h3 className="marketing-case2-role">Focus on all of the key features for your product</h3>
          <p className="marketing-case2-description">
            Led the product design team at Fine Grow Solutions, building and scaling a thriving design organization that attracted top-tier designers and researchers, fostered a healthy culture, and elevated design as a driver of product and business success.
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
        </div>
      </section>

      {/* Section 3 - Business Strategy */}
      <section className="marketing-case2-section">
        <div className="marketing-case2-image-wrapper">
          <div className="marketing-case2-image-circle">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="90" fill="#3B82F6" opacity="0.1"/>
              <rect x="60" y="120" width="20" height="40" rx="2" fill="#3B82F6"/>
              <rect x="90" y="100" width="20" height="60" rx="2" fill="#3B82F6"/>
              <rect x="120" y="80" width="20" height="80" rx="2" fill="#3B82F6"/>
              <path d="M50 70L80 85L110 65L140 75L150 60" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="50" cy="70" r="5" fill="#60A5FA"/>
              <circle cx="80" cy="85" r="5" fill="#60A5FA"/>
              <circle cx="110" cy="65" r="5" fill="#60A5FA"/>
              <circle cx="140" cy="75" r="5" fill="#60A5FA"/>
              <circle cx="150" cy="60" r="5" fill="#60A5FA"/>
            </svg>
          </div>
        </div>
        
        <div className="marketing-case2-case-content">
          <div className="marketing-case2-logo-wrapper">
            <h2 className="marketing-case2-company-name">WE SEEK THE MOST EFFICIENT CAMPAIGNS</h2>
          </div>
          <h3 className="marketing-case2-role">Converting clients through your marketing campaign</h3>
          <p className="marketing-case2-description">
            Every digital marketing project has different challenges and each business has its own unique needs. That's why Fine Grow Solutions offers personalized solutions for your business.
          </p>
          
          <div className="marketing-case2-tags">
            <span className="marketing-case2-tag">Brand Awareness & Visibility</span>
            <span className="marketing-case2-tag">Digital Growth Strategy</span>
            <span className="marketing-case2-tag">Audience Targeting & Segmentation</span>
            <span className="marketing-case2-tag">Multi-Channel Campaign Distribution</span>
            <span className="marketing-case2-tag">Performance Tracking & Analytics</span>
            <span className="marketing-case2-tag">Marketing Automation & Lead Nurturing</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketingCase;