import React, { useState, useEffect } from 'react';
import './css/ReviewSection.css';

const ReviewSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      title: "Maximum speed without losing control.",
      description: "The average project delivery time is four weeks thanks to a smooth and precise process where everything moves forward without losing any details.",
      image: "https://images.unsplash.com/photo-1621274790572-7c32596bc67f?w=800&q=80"
    },
    {
      id: 2,
      title: "Simply amazing with the best aesthetic.",
      description: "Our design philosophy combines modern aesthetics with functional excellence to create experiences that truly resonate.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"
    },
    {
      id: 3,
      title: "API design docs under 2 weeks.",
      description: "Fast turnaround time with comprehensive documentation that helps teams collaborate efficiently and effectively.",
      image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&q=80"
    },
    {
      id: 4,
      title: "Testing our way to perfection.",
      description: "Rigorous testing procedures ensure every feature works flawlessly before reaching your users.",
      image: "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800&q=80"
    },
    {
      id: 5,
      title: "Innovation at its finest.",
      description: "Pushing boundaries with cutting-edge technology and creative solutions that drive real results.",
      image: "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=800&q=80"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const getCardClass = (index) => {
    const position = (index - currentIndex + reviews.length) % reviews.length;
    return `review-card review-card-${position + 1}`;
  };

  return (
    <div className="review-section-container">
      <div className="review-section-header">
        <h2 className="review-heading">What Our Clients Say</h2>
        <p className="review-subheading">Discover why teams trust us to deliver excellence</p>
      </div>

      <div className="review-cards-wrapper">
        <div className="review-cards-container">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={getCardClass(index)}
            >
              <div className="review-card-image-container">
                <img src={review.image} alt={review.title} className="review-card-image" />
                <div className="review-card-overlay"></div>
              </div>
              <div className="review-card-content">
                <h3 className="review-card-title">{review.title}</h3>
                <p className="review-card-description">{review.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;