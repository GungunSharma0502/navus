import React from 'react';
import './Myntra.css';

const MyntraServices = () => {
  return (
    <div className="myntra-container">
      {/* Hero Section */}
      <section className="myntra-hero">
        <div className="myntra-wave-bg"></div>
        <div className="myntra-hero-content">
          <h1 className="myntra-hero-title">Myntra Seller Services</h1>
          <p className="myntra-hero-subtitle">Myntra Growth Solutions for Fashion Brands</p>
          <p className="myntra-hero-description">
            Myntra is a highly curated fashion marketplace where branding, visual appeal, and detailed cataloguing directly impact sales. Success on Myntra isn't just about listing products—it's about presenting your brand in a way that inspires confidence and converts browsers into buyers.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="myntra-about">
        <div className="myntra-about-content">
          <p className="myntra-about-text">
            We help fashion, apparel, footwear, and lifestyle brands build a strong, compliant, and conversion-focused presence on Myntra. From onboarding to ongoing growth support, our experts ensure your brand meets Myntra's standards while achieving consistent performance.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="myntra-services">
        <div className="myntra-wave-bg-alt"></div>
        <div className="myntra-services-content">
          <h2 className="myntra-section-title">Our Myntra Services</h2>
          <div className="myntra-services-grid">
            <div className="myntra-service-card">
              <div className="myntra-service-icon">🚀</div>
              <h3 className="myntra-service-title">Seller Account Setup & Onboarding</h3>
              <p className="myntra-service-description">
                Complete assistance with Myntra seller registration, documentation, brand approval, and smooth onboarding.
              </p>
            </div>

            <div className="myntra-service-card">
              <div className="myntra-service-icon">👕</div>
              <h3 className="myntra-service-title">Style-Focused Product Listings</h3>
              <p className="myntra-service-description">
                Trend-driven product titles, descriptions, and highlights that align with fashion search behavior and customer expectations.
              </p>
            </div>

            <div className="myntra-service-card">
              <div className="myntra-service-icon">📊</div>
              <h3 className="myntra-service-title">Catalogue & Attribute Optimization</h3>
              <p className="myntra-service-description">
                Accurate sizing, fabric details, fit, color variants, and attributes to improve discoverability and reduce returns.
              </p>
            </div>

            <div className="myntra-service-card">
              <div className="myntra-service-icon">📸</div>
              <h3 className="myntra-service-title">Image & Content Guidelines Compliance</h3>
              <p className="myntra-service-description">
                High-quality images, model shots, flat-lays, and content that strictly follow Myntra's visual and branding guidelines.
              </p>
            </div>

            <div className="myntra-service-card">
              <div className="myntra-service-icon">🎯</div>
              <h3 className="myntra-service-title">Brand Presentation & Consistency</h3>
              <p className="myntra-service-description">
                Maintaining a uniform brand look and feel across all listings to build recognition and trust.
              </p>
            </div>

            <div className="myntra-service-card">
              <div className="myntra-service-icon">📈</div>
              <h3 className="myntra-service-title">Performance Tracking & Growth Support</h3>
              <p className="myntra-service-description">
                Monitoring sales, impressions, conversion rates, and returns to identify improvement areas and scale winning products.
              </p>
            </div>

            <div className="myntra-service-card">
              <div className="myntra-service-icon">💰</div>
              <h3 className="myntra-service-title">Pricing, Discount & Inventory Strategy</h3>
              <p className="myntra-service-description">
                Optimizing pricing, discounts, and stock levels to stay competitive without harming brand value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="myntra-results">
        <div className="myntra-results-content">
          <h2 className="myntra-section-title">Results</h2>
          <div className="myntra-results-grid">
            <div className="myntra-result-item">
              <span className="myntra-result-icon">✔</span>
              <span className="myntra-result-text">Strong brand visibility</span>
            </div>
            <div className="myntra-result-item">
              <span className="myntra-result-icon">✔</span>
              <span className="myntra-result-text">High-quality, compliant catalogues</span>
            </div>
            <div className="myntra-result-item">
              <span className="myntra-result-icon">✔</span>
              <span className="myntra-result-text">Better conversions & lower returns</span>
            </div>
            <div className="myntra-result-item">
              <span className="myntra-result-icon">✔</span>
              <span className="myntra-result-text">Improved customer trust</span>
            </div>
            <div className="myntra-result-item">
              <span className="myntra-result-icon">✔</span>
              <span className="myntra-result-text">Scalable growth on Myntra</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="myntra-cta">
        <div className="myntra-wave-bg"></div>
        <div className="myntra-cta-content">
          <h2 className="myntra-cta-title">Turn Fashion Visibility into Real Sales</h2>
          <p className="myntra-cta-text">Expert Myntra account management for your brand</p>
          <button className="myntra-cta-button">Get Started Today</button>
        </div>
      </section>
    </div>
  );
};

export default MyntraServices;