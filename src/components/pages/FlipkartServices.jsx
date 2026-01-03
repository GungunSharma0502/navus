import React from 'react';
import './Flipkart.css';
import { Link } from 'react-router-dom';

const FlipkartServices = () => {
  return (
    <div className="flipkart-container">
      {/* Hero Section */}
      <section className="flipkart-hero">
        <div className="flipkart-wave-bg"></div>
        <div className="flipkart-hero-content">
          <h1 className="flipkart-hero-title">Flipkart Seller Services</h1>
          <p className="flipkart-hero-subtitle">Scale Your Business on Flipkart with Confidence</p>
          <p className="flipkart-hero-description">
            Flipkart is one of India's largest and fastest-growing online marketplaces, offering massive opportunities for sellers—but only for those who manage their accounts strategically. With intense competition, frequent policy updates, and algorithm-driven rankings, success on Flipkart requires expertise and continuous optimization.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="flipkart-about">
        <div className="flipkart-about-content">
          <p className="flipkart-about-text">
            We help brands and sellers build a strong presence on Flipkart through smart account management, optimized listings, and data-backed growth strategies. Whether you're launching your first product or scaling an existing store, we ensure better visibility, higher conversions, and sustainable growth.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="flipkart-services">
        <div className="flipkart-wave-bg-alt"></div>
        <div className="flipkart-services-content">
          <h2 className="flipkart-section-title">Our Flipkart Services</h2>
          <div className="flipkart-services-grid">
            <div className="flipkart-service-card">
              <div className="flipkart-service-icon">📋</div>
              <h3 className="flipkart-service-title">Seller Account Setup & Onboarding</h3>
              <p className="flipkart-service-description">
                End-to-end support for seller registration, GST verification, category approvals, and smooth onboarding without delays.
              </p>
            </div>

            <div className="flipkart-service-card">
              <div className="flipkart-service-icon">📦</div>
              <h3 className="flipkart-service-title">Catalogue & Listing Optimization</h3>
              <p className="flipkart-service-description">
                SEO-friendly product titles, descriptions, attributes, and keywords designed to improve search rankings and buyer trust.
              </p>
            </div>

            <div className="flipkart-service-card">
              <div className="flipkart-service-icon">🎨</div>
              <h3 className="flipkart-service-title">Image & Content Enhancement</h3>
              <p className="flipkart-service-description">
                High-quality product images, infographics, and compelling content that clearly communicates value and boosts conversion rates.
              </p>
            </div>

            <div className="flipkart-service-card">
              <div className="flipkart-service-icon">💰</div>
              <h3 className="flipkart-service-title">Pricing & Inventory Optimization</h3>
              <p className="flipkart-service-description">
                Smart pricing strategies and inventory planning to stay competitive while maintaining healthy margins and avoiding stock issues.
              </p>
            </div>

            <div className="flipkart-service-card">
              <div className="flipkart-service-icon">📢</div>
              <h3 className="flipkart-service-title">Flipkart Ads Management</h3>
              <p className="flipkart-service-description">
                Performance-driven advertising campaigns to increase impressions, clicks, and sales while controlling ad spend effectively.
              </p>
            </div>

            <div className="flipkart-service-card">
              <div className="flipkart-service-icon">📈</div>
              <h3 className="flipkart-service-title">Performance Monitoring & Growth Strategy</h3>
              <p className="flipkart-service-description">
                Regular analysis of sales data, traffic, conversion rates, and competitor performance to identify growth opportunities.
              </p>
            </div>

            <div className="flipkart-service-card">
              <div className="flipkart-service-icon">⭐</div>
              <h3 className="flipkart-service-title">Order & Rating Management</h3>
              <p className="flipkart-service-description">
                Support in managing orders, returns, and customer ratings to maintain strong seller performance metrics.
              </p>
            </div>

            <div className="flipkart-service-card">
              <div className="flipkart-service-icon">✓</div>
              <h3 className="flipkart-service-title">Policy Compliance & Account Health</h3>
              <p className="flipkart-service-description">
                Continuous monitoring to ensure adherence to Flipkart policies and prevent account issues or penalties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="flipkart-results">
        <div className="flipkart-results-content">
          <h2 className="flipkart-section-title">Result</h2>
          <div className="flipkart-results-grid">
            <div className="flipkart-result-item">
              <span className="flipkart-result-icon">✔</span>
              <span className="flipkart-result-text">Higher product visibility</span>
            </div>
            <div className="flipkart-result-item">
              <span className="flipkart-result-icon">✔</span>
              <span className="flipkart-result-text">Improved rankings & conversions</span>
            </div>
            <div className="flipkart-result-item">
              <span className="flipkart-result-icon">✔</span>
              <span className="flipkart-result-text">Optimized pricing & ad performance</span>
            </div>
            <div className="flipkart-result-item">
              <span className="flipkart-result-icon">✔</span>
              <span className="flipkart-result-text">Strong seller ratings</span>
            </div>
            <div className="flipkart-result-item">
              <span className="flipkart-result-icon">✔</span>
              <span className="flipkart-result-text">Faster, sustainable growth on Flipkart</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flipkart-cta">
        <div className="flipkart-wave-bg"></div>
        <div className="flipkart-cta-content">
          <h2 className="flipkart-cta-title">Grow faster with marketplace-approved strategies and expert support.</h2>
          <button className="flipkart-cta-button">
             <Link to="/contact" className="flipkart-cta-buttonn">Get Started Today</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default FlipkartServices;