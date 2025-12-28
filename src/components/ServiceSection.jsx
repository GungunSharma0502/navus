import React, { useState, useEffect, useRef } from 'react';
import './css/ServiceSection.css';
import CharacterAnimation from '../assets/Character.json';

const ServiceSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const lottieContainer = useRef(null);

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
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  // Load Lottie animation
  useEffect(() => {
    let animation = null;

    const loadLottie = () => {
      if (lottieContainer.current && window.lottie) {
        try {
          animation = window.lottie.loadAnimation({
            container: lottieContainer.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: CharacterAnimation
          });
        } catch (error) {
          console.error('Error loading Lottie:', error);
        }
      }
    };

    // Load Lottie script
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js';
    script.onload = loadLottie;
    document.body.appendChild(script);

    return () => {
      if (animation) {
        animation.destroy();
      }
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="service-section">
      <div className="service-container">
        {/* Left Side - Lottie Animation */}
        <div className="service-left">
          <div className="service-lottie-wrapper">
            <div ref={lottieContainer} className="service-lottie-container"></div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="service-right">
          <h1 className="service-title">
            Navus <span className="service-highlight">IT Services</span>
          </h1>
          <p className="service-subtitle">
            We Are A Digital Marketing, Website Designing & Social Media Marketing In Faridabad and Trustworthy name in a zone of Digital Marketing, Website design & Development, & SMO and Social Media Marketing. We create websites for your Small, Medium and large business enterprise.
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