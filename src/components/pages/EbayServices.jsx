import React from 'react';
import './Ebay.css';

const EbayServices = () => {
  return (
    <div className="ebay-container">
      {/* Hero Section */}
      <section className="ebay-hero">
        <div className="ebay-wave-bg"></div>
        <div className="ebay-hero-content">
          <h1 className="ebay-hero-title">eBay Seller Services</h1>
          <p className="ebay-hero-subtitle">Expand Globally with eBay Selling Solutions</p>
          <p className="ebay-hero-description">
            eBay is a powerful global marketplace that allows sellers to reach millions of international buyers across multiple countries. However, successful eBay selling requires the right product strategy, optimized listings, global shipping readiness, and consistent performance management.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="ebay-about">
        <div className="ebay-about-content">
          <p className="ebay-about-text">
            Fine Grow Solutions helps sellers launch, manage, and scale their eBay stores with global-ready strategies designed to increase visibility, conversions, and cross-border sales. Whether you're new to eBay or looking to expand internationally, we handle the complexity while you focus on growth.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="ebay-services">
        <div className="ebay-wave-bg-alt"></div>
        <div className="ebay-services-content">
          <h2 className="ebay-section-title">Our eBay Services</h2>
          <div className="ebay-services-grid">
            <div className="ebay-service-card">
              <div className="ebay-service-icon">🌍</div>
              <h3 className="ebay-service-title">eBay Seller Account Setup & Onboarding</h3>
              <p className="ebay-service-description">
                Complete assistance with seller registration, store setup, payment configuration, and compliance for smooth onboarding.
              </p>
            </div>

            <div className="ebay-service-card">
              <div className="ebay-service-icon">🔍</div>
              <h3 className="ebay-service-title">Product Listing & SEO Optimization</h3>
              <p className="ebay-service-description">
                SEO-friendly titles, descriptions, item specifics, and categories to improve search rankings and attract global buyers.
              </p>
            </div>

            <div className="ebay-service-card">
              <div className="ebay-service-icon">📋</div>
              <h3 className="ebay-service-title">Catalogue Management</h3>
              <p className="ebay-service-description">
                Organized, accurate product catalogs with proper variations, pricing, and stock control for better buyer experience.
              </p>
            </div>

            <div className="ebay-service-card">
              <div className="ebay-service-icon">✈️</div>
              <h3 className="ebay-service-title">International Selling Support</h3>
              <p className="ebay-service-description">
                Guidance on global shipping, cross-border trade, currency handling, taxes, and country-specific marketplace requirements.
              </p>
            </div>

            <div className="ebay-service-card">
              <div className="ebay-service-icon">📊</div>
              <h3 className="ebay-service-title">Order & Performance Optimization</h3>
              <p className="ebay-service-description">
                Monitoring orders, seller ratings, feedback, and performance metrics to maintain a strong seller reputation.
              </p>
            </div>

            <div className="ebay-service-card">
              <div className="ebay-service-icon">💰</div>
              <h3 className="ebay-service-title">Pricing & Competitive Analysis</h3>
              <p className="ebay-service-description">
                Market research and pricing strategies tailored for different regions to stay competitive globally.
              </p>
            </div>

            <div className="ebay-service-card">
              <div className="ebay-service-icon">✓</div>
              <h3 className="ebay-service-title">Policy Compliance & Risk Management</h3>
              <p className="ebay-service-description">
                Ensuring adherence to eBay policies to prevent listing issues, account restrictions, or penalties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="ebay-results">
        <div className="ebay-results-content">
          <h2 className="ebay-section-title">Results</h2>
          <div className="ebay-results-grid">
            <div className="ebay-result-item">
              <span className="ebay-result-icon">✔</span>
              <span className="ebay-result-text">Increased global visibility</span>
            </div>
            <div className="ebay-result-item">
              <span className="ebay-result-icon">✔</span>
              <span className="ebay-result-text">Higher international sales</span>
            </div>
            <div className="ebay-result-item">
              <span className="ebay-result-icon">✔</span>
              <span className="ebay-result-text">Optimized listings & pricing</span>
            </div>
            <div className="ebay-result-item">
              <span className="ebay-result-icon">✔</span>
              <span className="ebay-result-text">Strong seller ratings</span>
            </div>
            <div className="ebay-result-item">
              <span className="ebay-result-icon">✔</span>
              <span className="ebay-result-text">Scalable, long-term growth on eBay</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ebay-cta">
        <div className="ebay-wave-bg"></div>
        <div className="ebay-cta-content">
          <h2 className="ebay-cta-title">Sell Smarter. Scale Globally.</h2>
          <p className="ebay-cta-text">Expert eBay management with confidence</p>
          <button className="ebay-cta-button">Start Selling Globally</button>
        </div>
      </section>
    </div>
  );
};

export default EbayServices;