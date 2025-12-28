import React, { useState, useEffect } from 'react';
import './css/ServiceSection.css';

const ServiceSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    [
      {
        icon: "🤖",
        title: "Marketing",
        description: "Advertising/PPC For Products - Reach potential customers with their search query or interaction!"
      },
      {
        icon: "🔒",
        title: "Strategy",
        description: "Crafting impactful action plans, optimizing business strategies for enduring success."
      }
    ],
    [
      {
        icon: "🛡️",
        title: "UX Design",
        description: "Create, upload, optimize product listings tailored for ideal customers and audience."
      },
      {
        icon: "✓",
        title: "Marketplace Audit",
        description: "Identify, assess, report loopholes hindering product/strategy success; provide effective solutions."
      }
    ],
    [
      {
        icon: "🛡️",
        title: "Development",
        description: "Crafting compelling content for increased website traffic and business expansion."
      },
      {
        icon: "✓",
        title: "Link Building",
        description: "Enhance website visibility with strategic link building for top Google rankings."
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
            Navus  <span className="service-highlight">IT Services</span>
          </h1>
          <p className="service-subtitle">
           
We Are A Digital Marketing, Website Designing & Social Media Marketing In Faridabad and Trustworthy name in a zone of Digital Marketing,Website design & Development, & SMO and Social Media Marketing. We create websites for your Small, Medium and large business enterprise.

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