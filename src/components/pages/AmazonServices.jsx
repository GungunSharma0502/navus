import React from 'react';
import './Amazon.css';
import { Link } from 'react-router-dom';

const AmazonServices = () => {
  return (
    <div className="amazon-container">
      {/* Hero Section */}
      <section className="amazon-hero">
        <div className="amazon-wave-bg"></div>
        <div className="amazon-hero-content">
          <h1 className="amazon-hero-title">Amazon Seller Services</h1>
          <p className="amazon-hero-subtitle">Amazon Account Management & Growth Solutions</p>
          <p className="amazon-hero-description">
            Selling on Amazon requires deep marketplace knowledge, strict policy compliance, and continuous optimization to stay ahead of the competition. Fine Grow Solutions empowers brands and sellers to scale profitably on Amazon with end-to-end account management and data-driven growth strategies.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="amazon-about">
        <div className="amazon-about-content">
          <p className="amazon-about-text">
            From launching new seller accounts to optimizing existing stores, we handle everything—so you can focus on sourcing, branding, and business expansion while we manage performance, visibility, and conversions.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="amazon-services">
        <div className="amazon-wave-bg-alt"></div>
        <div className="amazon-services-content">
          <h2 className="amazon-section-title">Our Amazon Services</h2>
          <div className="amazon-services-grid">
            <div className="amazon-service-card">
              <div className="amazon-service-icon">🚀</div>
              <h3 className="amazon-service-title">Seller Account Setup & Onboarding</h3>
              <p className="amazon-service-description">
                Complete assistance with account creation, verification, category approval, and brand registry to ensure a smooth and error-free start.
              </p>
            </div>

            <div className="amazon-service-card">
              <div className="amazon-service-icon">🔍</div>
              <h3 className="amazon-service-title">Product Listing & Keyword Optimization</h3>
              <p className="amazon-service-description">
                SEO-optimized titles, bullet points, backend keywords, and descriptions to improve discoverability, rankings, and organic traffic.
              </p>
            </div>

            <div className="amazon-service-card">
              <div className="amazon-service-icon">📚</div>
              <h3 className="amazon-service-title">Catalogue Creation & A+ Content</h3>
              <p className="amazon-service-description">
                Professional catalog structuring with high-quality A+ content that enhances brand storytelling, builds trust, and boosts conversion rates.
              </p>
            </div>

            <div className="amazon-service-card">
              <div className="amazon-service-icon">🏪</div>
              <h3 className="amazon-service-title">Brand Store Design</h3>
              <p className="amazon-service-description">
                Custom Amazon Brand Store creation with engaging layouts that highlight your product range and strengthen brand identity.
              </p>
            </div>

            <div className="amazon-service-card">
              <div className="amazon-service-icon">💰</div>
              <h3 className="amazon-service-title">Amazon Ads (PPC) Management</h3>
              <p className="amazon-service-description">
                Strategic PPC campaigns including Sponsored Products, Sponsored Brands, and Sponsored Display ads to maximize ROI and reduce wasted ad spend.
              </p>
            </div>

            <div className="amazon-service-card">
              <div className="amazon-service-icon">✓</div>
              <h3 className="amazon-service-title">Account Health & Policy Compliance</h3>
              <p className="amazon-service-description">
                Continuous monitoring of account health metrics, issue resolution, and policy adherence to prevent suspensions and maintain long-term stability.
              </p>
            </div>

            <div className="amazon-service-card">
              <div className="amazon-service-icon">📈</div>
              <h3 className="amazon-service-title">Sales & Performance Optimization</h3>
              <p className="amazon-service-description">
                Data-driven insights to improve pricing, inventory planning, conversion rates, and overall marketplace performance.
              </p>
            </div>

            <div className="amazon-service-card">
              <div className="amazon-service-icon">🎯</div>
              <h3 className="amazon-service-title">Competitor & Market Analysis</h3>
              <p className="amazon-service-description">
                In-depth competitor research to identify growth opportunities, pricing gaps, and trending keywords.
              </p>
            </div>

            <div className="amazon-service-card">
              <div className="amazon-service-icon">📦</div>
              <h3 className="amazon-service-title">Inventory & Order Management Support</h3>
              <p className="amazon-service-description">
                Stock planning and order flow optimization to avoid out-of-stock issues and improve fulfillment efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="amazon-results">
        <div className="amazon-results-content">
          <h2 className="amazon-section-title">Results</h2>
          <div className="amazon-results-grid">
            <div className="amazon-result-item">
              <span className="amazon-result-icon">✔</span>
              <span className="amazon-result-text">Better keyword rankings</span>
            </div>
            <div className="amazon-result-item">
              <span className="amazon-result-icon">✔</span>
              <span className="amazon-result-text">Higher conversion rates</span>
            </div>
            <div className="amazon-result-item">
              <span className="amazon-result-icon">✔</span>
              <span className="amazon-result-text">Optimized ad spend</span>
            </div>
            <div className="amazon-result-item">
              <span className="amazon-result-icon">✔</span>
              <span className="amazon-result-text">Strong brand presence</span>
            </div>
            <div className="amazon-result-item">
              <span className="amazon-result-icon">✔</span>
              <span className="amazon-result-text">Consistent and scalable growth on Amazon</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="amazon-cta">
        <div className="amazon-wave-bg"></div>
        <div className="amazon-cta-content">
          <h2 className="amazon-cta-title">Scale Your Amazon Business Today</h2>
          <p className="amazon-cta-text">Expert account management for sustainable growth</p>
          <button className="amazon-cta-button">
             <Link to="/contact" className="amazon-cta-buttonn">Get Started Today</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default AmazonServices;