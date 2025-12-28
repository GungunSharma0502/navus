import React from 'react';
import './NykaaServices.css';

const NykaaServices = () => {
  return (
    <div className="nykaa-container">
      {/* Hero Section */}
      <section className="nykaa-hero">
        <div className="nykaa-wave-bg"></div>
        <div className="nykaa-hero-content">
          <h1 className="nykaa-hero-title">Nykaa Seller Services</h1>
          <p className="nykaa-hero-subtitle">Nykaa Marketplace Solutions for Beauty & Lifestyle Brands</p>
          <p className="nykaa-hero-description">
            Nykaa is a premium, highly curated marketplace where quality, brand presentation, and strict compliance matter more than anything. Unlike open marketplaces, Nykaa selects sellers carefully and expects consistent branding, accurate product information, and high-end visuals.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="nykaa-about">
        <div className="nykaa-about-content">
          <p className="nykaa-about-text">
            Our experts help beauty, wellness, and lifestyle brands establish and grow a trusted, premium presence on Nykaa. From onboarding to ongoing performance optimization, we ensure your brand meets Nykaa's standards while maximizing visibility and sales.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="nykaa-services">
        <div className="nykaa-wave-bg-alt"></div>
        <div className="nykaa-services-content">
          <h2 className="nykaa-section-title">Our Nykaa Services</h2>
          <div className="nykaa-services-grid">
            <div className="nykaa-service-card">
              <div className="nykaa-service-icon">📋</div>
              <h3 className="nykaa-service-title">Seller Onboarding & Documentation</h3>
              <p className="nykaa-service-description">
                Complete support with Nykaa seller onboarding, documentation, brand approvals, and category eligibility to ensure a smooth launch.
              </p>
            </div>

            <div className="nykaa-service-card">
              <div className="nykaa-service-icon">📦</div>
              <h3 className="nykaa-service-title">Product Listing & Catalogue Management</h3>
              <p className="nykaa-service-description">
                Accurate, well-structured product listings with the right attributes, claims, and descriptions aligned with Nykaa's quality guidelines.
              </p>
            </div>

            <div className="nykaa-service-card">
              <div className="nykaa-service-icon">🎨</div>
              <h3 className="nykaa-service-title">High-Quality Content & Visuals</h3>
              <p className="nykaa-service-description">
                Premium product images, banners, infographics, and engaging content that reflect brand authenticity and enhance customer trust.
              </p>
            </div>

            <div className="nykaa-service-card">
              <div className="nykaa-service-icon">✓</div>
              <h3 className="nykaa-service-title">Compliance & Category Guidelines</h3>
              <p className="nykaa-service-description">
                Strict adherence to Nykaa's policies, ingredient disclosures, certifications, and category-specific regulations to avoid listing rejections.
              </p>
            </div>

            <div className="nykaa-service-card">
              <div className="nykaa-service-icon">📈</div>
              <h3 className="nykaa-service-title">Sales Performance Optimization</h3>
              <p className="nykaa-service-description">
                Ongoing analysis of traffic, conversions, pricing, and customer behavior to improve sell-through and brand visibility.
              </p>
            </div>

            <div className="nykaa-service-card">
              <div className="nykaa-service-icon">🏆</div>
              <h3 className="nykaa-service-title">Brand Positioning & Consistency</h3>
              <p className="nykaa-service-description">
                Maintaining uniform branding across all listings to build a strong, recognizable brand identity.
              </p>
            </div>

            <div className="nykaa-service-card">
              <div className="nykaa-service-icon">📊</div>
              <h3 className="nykaa-service-title">Inventory & Availability Management</h3>
              <p className="nykaa-service-description">
                Ensuring product availability to prevent stock-outs and missed sales opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="nykaa-results">
        <div className="nykaa-results-content">
          <h2 className="nykaa-section-title">Results</h2>
          <div className="nykaa-results-grid">
            <div className="nykaa-result-item">
              <span className="nykaa-result-icon">✔</span>
              <span className="nykaa-result-text">Premium brand presentation</span>
            </div>
            <div className="nykaa-result-item">
              <span className="nykaa-result-icon">✔</span>
              <span className="nykaa-result-text">Policy-compliant listings</span>
            </div>
            <div className="nykaa-result-item">
              <span className="nykaa-result-icon">✔</span>
              <span className="nykaa-result-text">Higher customer trust</span>
            </div>
            <div className="nykaa-result-item">
              <span className="nykaa-result-icon">✔</span>
              <span className="nykaa-result-text">Improved conversions</span>
            </div>
            <div className="nykaa-result-item">
              <span className="nykaa-result-icon">✔</span>
              <span className="nykaa-result-text">Sustainable growth on Nykaa</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="nykaa-cta">
        <div className="nykaa-wave-bg"></div>
        <div className="nykaa-cta-content">
          <h2 className="nykaa-cta-title">Perfect for Beauty, Wellness, and Lifestyle Brands</h2>
          <p className="nykaa-cta-text">Looking to grow on a premium marketplace?</p>
          <button className="nykaa-cta-button">Get Started Today</button>
        </div>
      </section>
    </div>
  );
};

export default NykaaServices;