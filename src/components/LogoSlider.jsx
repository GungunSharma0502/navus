import React from 'react';
import './css/LogoSlider.css';

const LogoSlider = () => {
  const logos = [
    { name: 'Goodly', image: '/logos/goodly.png' },
    { name: 'Klarna', image: '/logos/klarna.png' },
    { name: 'Viaplay', image: '/logos/viaplay.png' },
    { name: 'Doktor24', image: '/logos/doktor24.png' },
    { name: 'Spotify', image: '/logos/spotify.png' },
    { name: 'Qapital', image: '/logos/qapital.png' },
    { name: 'Zettle', image: '/logos/zettle.png' },
    { name: 'PayPal', image: '/logos/paypal.png' }
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="portfolio-logo-slider-section">
      <div className="portfolio-logo-slider-container">
        <div className="portfolio-logo-slider-track">
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="portfolio-logo-slide">
              <div className="portfolio-logo-wrapper">
                <span className="portfolio-logo-text">{logo.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;