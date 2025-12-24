import React, { useState, useEffect } from 'react';
import './css/ServiceSection.css';

const ServiceSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    [
      {
        icon: "🤖",
        title: "Responsible AI",
        description: "Built with governance, fairness, and ethical safeguards to detect and reduce toxicity, bias, and model drift."
      },
      {
        icon: "🔒",
        title: "Privacy",
        description: "Designed with enterprise-grade privacy controls to protect sensitive data, ensure compliance, and enforce access boundaries."
      }
    ],
    [
      {
        icon: "🛡️",
        title: "Security",
        description: "Embedded with zero-trust guardrails, role-based access, and encryption to secure every layer of your AI stack."
      },
      {
        icon: "✓",
        title: "Verifiability",
        description: "Every insight is traceable and auditable—so you know what your AI is doing, and why."
      }
    ],
    [
      {
        icon: "🛡️",
        title: "Advanced Security",
        description: "Embedded with zero-trust guardrails, role-based access, and encryption to secure every layer of your AI stack."
      },
      {
        icon: "✓",
        title: "Technology Verifiability",
        description: "Every insight is traceable and auditable—so you know what your AI is doing, and why."
      }
    ]
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="service-section">
      <div className="service-container">
        {/* Left Side - Lottie Animation */}
        <div className="service-left">
          <div className="service-lottie-wrapper">
            <div className="service-lottie-placeholder">
              <div className="service-z-logo">N</div>
              <div className="service-grid-animation">
                <div className="service-grid-layer service-layer-1"></div>
                <div className="service-grid-layer service-layer-2"></div>
                <div className="service-grid-layer service-layer-3"></div>
              </div>
              <div className="service-particles">
                {[...Array(20)].map((_, i) => (
                  <div 
                    key={i} 
                    className="service-particle"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`
                    }}
                  ></div>
                ))}
              </div>
              <div className="service-pillars">
                <div className="service-pillar service-pillar-1"></div>
                <div className="service-pillar service-pillar-2"></div>
                <div className="service-pillar service-pillar-3"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="service-right">
          <h1 className="service-title">
            Introducing <span className="service-highlight">Z-Grid™</span>
          </h1>
          <p className="service-subtitle">
            The Engine of Trusted Intelligence, the Four Pillars of Z-Grid Responsible AI
          </p>

          {/* Cards Grid */}
          <div className="service-cards-wrapper">
            <div className="service-cards-grid">
              {slides[currentSlide].map((card, index) => (
                <div key={index} className="service-card">
                  <div className="service-card-icon">
                    <span>{card.icon}</span>
                  </div>
                  <h3 className="service-card-title">{card.title}</h3>
                  <p className="service-card-description">{card.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Dots */}
          <div className="service-dots">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                className={`service-dot ${currentSlide === index ? 'service-dot-active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;