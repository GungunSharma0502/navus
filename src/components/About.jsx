import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('about-animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.about-section, .about-card, .about-stat-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-wave-bg">
          <svg className="about-wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,100 600,20 900,60 C1050,80 1150,100 1200,80 L1200,120 L0,120 Z" />
          </svg>
        </div>
        <div className="about-hero-content">
          <h1 className="about-hero-title">About Us</h1>
          <p className="about-hero-subtitle">We partner with firms to bring clarity to their brand</p>
          <p className="about-hero-text">Since 2017, we have led innovation and new product delivery in business startup services delivered online.</p>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="about-section about-mission-section">
        <div className="about-content-wrapper">
          <div className="about-cards-grid">
            <div className="about-card about-card-mission">
              <div className="about-card-icon">🎯</div>
              <h2 className="about-card-title">Our Mission</h2>
              <p className="about-card-text">
                To empower businesses with innovative content marketing solutions that drive engagement and brand loyalty. 
                We craft compelling narratives that resonate with audiences and help our clients achieve their marketing goals.
              </p>
            </div>

            <div className="about-card about-card-vision">
              <div className="about-card-icon">🚀</div>
              <h2 className="about-card-title">Our Vision</h2>
              <p className="about-card-text">
                To be a leading force in the content marketing industry, recognized for creativity and strategic insights. 
                We aim to transform how brands connect with audiences through impactful storytelling.
              </p>
            </div>

            <div className="about-card about-card-values">
              <div className="about-card-icon">💎</div>
              <h2 className="about-card-title">Our Values</h2>
              <p className="about-card-text">
                By emphasizing creativity, integrity, collaboration, excellence, and customer focus, we drive success for our clients, 
                helping them navigate the ever-evolving digital world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Stats */}
      <section className="about-section about-stats-section" ref={statsRef}>
        <div className="about-wave-divider">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 C150,100 350,0 600,50 C850,100 1050,20 1200,60 L1200,0 L0,0 Z" />
          </svg>
        </div>
        <div className="about-content-wrapper">
          <h2 className="about-section-title">What We Do Best</h2>
          <div className="about-stats-grid">
            <div className="about-stat-item">
              <div className="about-stat-circle">
                <svg className="about-progress-ring" width="160" height="160">
                  <circle className="about-progress-ring-bg" cx="80" cy="80" r="70" />
                  <circle className="about-progress-ring-fill about-progress-90" cx="80" cy="80" r="70" />
                </svg>
                <div className="about-stat-number">90%</div>
              </div>
              <h3 className="about-stat-title">Branding</h3>
              <p className="about-stat-text">
                Fine Grow Soltions IT Services deliver Amazon account management to provide your customers with a satisfying experience.
              </p>
            </div>

            <div className="about-stat-item">
              <div className="about-stat-circle">
                <svg className="about-progress-ring" width="160" height="160">
                  <circle className="about-progress-ring-bg" cx="80" cy="80" r="70" />
                  <circle className="about-progress-ring-fill about-progress-70" cx="80" cy="80" r="70" />
                </svg>
                <div className="about-stat-number">70%</div>
              </div>
              <h3 className="about-stat-title">Digital Strategy</h3>
              <p className="about-stat-text">
                Utilize these services to get help for your everyday assignments, shipping settings, and order confirmation.
              </p>
            </div>

            <div className="about-stat-item">
              <div className="about-stat-circle">
                <svg className="about-progress-ring" width="160" height="160">
                  <circle className="about-progress-ring-bg" cx="80" cy="80" r="70" />
                  <circle className="about-progress-ring-fill about-progress-80" cx="80" cy="80" r="70" />
                </svg>
                <div className="about-stat-number">80%</div>
              </div>
              <h3 className="about-stat-title">Web Development</h3>
              <p className="about-stat-text">
                We specialize in developing beautiful e-commerce websites for your internet marketing needs.
              </p>
            </div>

            <div className="about-stat-item">
              <div className="about-stat-circle">
                <svg className="about-progress-ring" width="160" height="160">
                  <circle className="about-progress-ring-bg" cx="80" cy="80" r="70" />
                  <circle className="about-progress-ring-fill about-progress-70" cx="80" cy="80" r="70" />
                </svg>
                <div className="about-stat-number">70%</div>
              </div>
              <h3 className="about-stat-title">User Experience</h3>
              <p className="about-stat-text">
                Delivers the best experience to clients with our experienced team bringing attractive imagination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="about-section about-cta-section">
        <div className="about-wave-top">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 C200,100 400,20 600,60 C800,100 1000,40 1200,80 L1200,0 L0,0 Z" />
          </svg>
        </div>
        <div className="about-content-wrapper">
          <h2 className="about-cta-title">We Build Digital Brands and Experiences</h2>
          <p className="about-cta-text">
            We design, build and support websites and apps for clients worldwide. We make your business stand out.
          </p>
          <button className="about-cta-button">Interested? Let's Chat</button>
        </div>
      </section>
    </div>
  );
};

export default About;