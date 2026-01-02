import React, { useState, useEffect } from 'react';
import './css/ReviewSection.css';

const ReviewSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      title: "AllesOben - Looking forward to more expectations Finegrow Team",
      description: "I am delighted to share my feedback regarding the exceptional results we have witnessed after using your services. Your company truly stands out as the best choice for account management services. The level of excellence you have consistently delivered has made a significant impact on our operations, and we couldn't be more satisfied with the outcomes. Thank you for your dedication and expertise in helping us achieve our goals.",
      image: "https://images.unsplash.com/photo-1621274790572-7c32596bc67f?w=800&q=80"
    },
    {
      id: 2,
      title: "DIGITAL DESIGNING LAB - Communication was smooth and they explained everything clearly",
      description: "I am very satisfied with the service provided by the SPN team. They were professional, knowledgeable, and completed all tasks on time. My listings and ads were optimized perfectly",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"
    },
    {
      id: 3,
      title: "Khodiyar Enterprise - very supportive and understanding",
      description: "The account manager provided from there side was very supportive and understanding and is very helpful.",
      image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&q=80"
    },
    {
      id: 4,
      title: "KAPER ENTERPRISES",
      description: "The SPN manger was very cooperative and helped me with account product listing, and optimization. Their services saved me time and improved my overall experience as a seller.",
      image: "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800&q=80"
    },
    {
      id: 5,
      title: "Starline - Excellent Support for Amazon Listings & Account Management",
      description: "Excellent Support for Amazon Listings & Account Management",
      image: "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=800&q=80"
    },
    {
      id: 6,
      title: "Courtney Schiefelbein, DMD - Great Service!",
      description: "Very professional, efficient, and timely. The team is responsive and helped me clean up and optimize my amazon items quickly and cost-efficiently. We are now working on optimizing ad-campaigns, and I'm similarly impressed. I highly recommend them.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
    },
    {
      id: 7,
      title: "Alfa Design - Experienced team",
      description: "Experienced team. Quickly understood the top keyword for my product. By maintaining standard ACOS, bring sales to some of my never-sold items.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80"
    },
    {
      id: 8,
      title: "RISHAB BANSAL - Finegrow has done an excellent job managing our Amazon ads",
      description: "Finegrow has done an excellent job managing our Amazon ads. His deep understanding of ad strategies, consistent optimization, and focus on results have brought great improvements in our performance. He is professional, responsive, and truly dedicated to helping the brand grow. Highly recommended for anyone looking for expert Amazon advertising support!",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80"
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