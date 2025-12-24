/* hero-section.css */
const heroStyles = `
.heroSectionContainer {
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #131f2bff 50%, #0a1a2a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem 4rem;
  position: relative;
}

.heroSectionContent {
  max-width: 1000px;
  text-align: center;
  color: white;
}

.heroSectionImageWrapper {
  margin: 0 auto 3rem;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.heroSectionImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
}

.heroSectionTitle {
  font-size: 3.5rem;
  font-weight: 300;
  line-height: 1.3;
  margin: 0 0 2rem;
  color: rgba(255, 255, 255, 0.6);
}

.heroSectionTitleHighlight {
  color: rgba(255, 255, 255, 1);
  font-weight: 400;
}

.heroSectionSubtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 300;
  margin: 0 0 4rem;
}

.heroSectionScrollIndicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.4);
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

@media (max-width: 768px) {
  .heroSectionTitle {
    font-size: 2rem;
  }
  
  .heroSectionSubtitle {
    font-size: 0.95rem;
  }
  
  .heroSectionImageWrapper {
    width: 140px;
    height: 140px;
  }
}

@media (max-width: 480px) {
  .heroSectionTitle {
    font-size: 1.6rem;
  }
  
  .heroSectionSubtitle {
    font-size: 0.85rem;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;
if (typeof document !== 'undefined') {
    const heroStyleEl = document.createElement('style');
  heroStyleEl.textContent = heroStyles;
  document.head.appendChild(heroStyleEl);
}
// Hero Section Component
 const HeroSection = () => {
  return (
    <section className="heroSectionContainer">
      <div className="heroSectionContent">
        <div className="heroSectionImageWrapper">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" 
            alt="Mikael" 
            className="heroSectionImage"
          />
        </div>
        
        <h1 className="heroSectionTitle">
          I'm Mikael, <span className="heroSectionTitleHighlight">accelerating business</span>
          <br />
          <span className="heroSectionTitleHighlight">by improving people's lives.</span>
        </h1>
        
        <p className="heroSectionSubtitle">
          Design Leadership  |  Senior UX Consultant  |  Strategic Advisor
        </p>
        
        <div className="heroSectionScrollIndicator">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;