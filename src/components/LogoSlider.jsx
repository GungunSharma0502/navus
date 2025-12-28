import React from 'react';
import './css/LogoSlider.css';

const LogoSlider = () => {
  const infoItems = [
    { 
      name: 'Help Desk', 
      link: '#helpdesk',
      type: 'link'
    },
    { 
      name: 'Why Us', 
      link: '#whyus',
      type: 'link'
    },
    { 
      name: '(+91) 8750012222', 
      link: 'tel:+918750012222',
      type: 'phone'
    },
    { 
      name: 'info@navustech.com', 
      link: 'mailto:info@navustech.com',
      type: 'email'
    },
    { 
      name: 'Mon - Sat: 9:00 - 17:30', 
      type: 'text'
    }
  ];

  // Duplicate items for seamless loop
  const duplicatedItems = [...infoItems, ...infoItems, ...infoItems];

  return (
    <div className="portfolio-logo-slider-section">
      <div className="portfolio-logo-slider-container">
        <div className="portfolio-logo-slider-track">
          {duplicatedItems.map((item, index) => (
            <div key={index} className="portfolio-logo-slide">
              <div className="portfolio-logo-wrapper">
                {item.type === 'link' ? (
                  <a href={item.link} className="portfolio-info-link">
                    {item.name}
                  </a>
                ) : item.type === 'phone' ? (
                  <a href={item.link} className="portfolio-info-link portfolio-info-phone">
                    {item.name}
                  </a>
                ) : item.type === 'email' ? (
                  <a href={item.link} className="portfolio-info-link portfolio-info-email">
                    {item.name}
                  </a>
                ) : (
                  <span className="portfolio-logo-text">{item.name}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;