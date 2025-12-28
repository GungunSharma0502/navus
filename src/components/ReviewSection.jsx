import React, { useState, useEffect } from 'react';
import './css/ReviewSection.css';

const ReviewSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      title: "Gendawali Kumari",
      description: "My experience has been amazing with Navus IT Services. They have managed my account in such a professional manner that from the day I have taken their services each and every aspect of my account is well maintained.",
      image: "https://images.unsplash.com/photo-1621274790572-7c32596bc67f?w=800&q=80"
    },
    {
      id: 2,
      title: "Rohullah Rasikh",
      description: "Vansh is an exceptional Amazon manager. His expertise and dedication have greatly boosted our sales and rankings.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"
    },
    {
      id: 3,
      title: "Frosch India Naia",
      description: "Impressed with the services of Navus. Best part is that they increased my visibility of products with sales on Amazon. Looking forward for Flipkart.",
      image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&q=80"
    },
    {
      id: 4,
      title: "Shivam Fidato Sharma",
      description: "I have enjoyed the services by Navus IT Services. They know what to do and that's what I appreciate most.",
      image: "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800&q=80"
    },
    {
      id: 5,
      title: "Nitin Fernandes",
      description: "Very experienced and helpful staff at Navus, they help customers to their best, special word for Tulsi and Ankit ?",
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