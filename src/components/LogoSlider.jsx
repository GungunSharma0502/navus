import React from 'react';
import './css/LogoSlider.css';

const LogoSlider = () => {
  const infoItems = [
    { 
      name: 'Help Desk', 
      link: '/contact',
      type: 'link'
    },
    { 
      name: 'Why Us', 
      link: '/about',
      type: 'link'
    },
    { 
      name: '(+91)95600 82761', 
      link: 'tel:+91 95600 82761',
      type: 'phone'
    },
    { 
      name: 'finegrowamazon@gmail.com ', 
      link: 'mailto:finegrowamazon@gmail.com ',
      type: 'email'
    },
    { 
      name: 'Mon - Sat: 10:00 AM – 7:00 PM', 
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