import React from 'react';

const HeroSection = () => {
  return (
    <>
      <style>{`
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

        .heroSectionAnimationWrapper {
          margin: 0 auto 3rem;
          width: 180px;
          height: 180px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .heroZLogo {
          font-size: 60px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.9);
          position: relative;
          z-index: 5;
          text-shadow: 0 0 30px rgba(255, 255, 255, 0.3),
                       0 0 60px rgba(255, 255, 255, 0.2),
                       0 4px 20px rgba(255, 255, 255, 0.4);
          animation: heroFloat 3s ease-in-out infinite;
        }

        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .heroGridAnimation {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }

        .heroGridLayer {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: conic-gradient(
            from 0deg,
            rgba(255, 255, 255, 0.2) 0deg,
            transparent 90deg,
            rgba(255, 255, 255, 0.15) 180deg,
            transparent 270deg
          );
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
        }

        .heroLayer1 {
          width: 120px;
          height: 120px;
          animation: heroRotate 6s linear infinite;
        }

        .heroLayer2 {
          width: 160px;
          height: 160px;
          animation: heroRotate 8s linear infinite reverse;
        }

        .heroLayer3 {
          width: 200px;
          height: 200px;
          animation: heroRotate 10s linear infinite;
        }

        @keyframes heroRotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .heroParticles {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }

        .heroParticle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          animation: heroParticleFloat 3s ease-in-out infinite;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
        }

        @keyframes heroParticleFloat {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
            opacity: 0.4;
          }
          50% { 
            transform: translate(10px, -10px) scale(1.5);
            opacity: 1;
          }
        }

        .heroPillars {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }

        .heroPillar {
          position: absolute;
          bottom: 35%;
          width: 20px;
          background: linear-gradient(to top, rgba(255, 255, 255, 0.4), transparent);
          border-radius: 4px 4px 0 0;
          animation: heroPillarGrow 2s ease-in-out infinite;
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
        }

        .heroPillar1 {
          left: 25%;
          height: 40px;
          animation-delay: 0s;
        }

        .heroPillar2 {
          left: 50%;
          transform: translateX(-50%);
          height: 50px;
          animation-delay: 0.3s;
        }

        .heroPillar3 {
          right: 25%;
          height: 40px;
          animation-delay: 0.6s;
        }

        @keyframes heroPillarGrow {
          0%, 100% { transform: scaleY(1) translateX(0); opacity: 0.6; }
          50% { transform: scaleY(1.2) translateX(0); opacity: 1; }
        }

        .heroPillar2 {
          transform: translateX(-50%) scaleY(1);
        }

        @keyframes heroPillarGrow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
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
          
          .heroSectionAnimationWrapper {
            width: 140px;
            height: 140px;
          }

          .heroZLogo {
            font-size: 45px;
          }

          .heroLayer1 {
            width: 90px;
            height: 90px;
          }

          .heroLayer2 {
            width: 120px;
            height: 120px;
          }

          .heroLayer3 {
            width: 150px;
            height: 150px;
          }

          .heroPillar {
            width: 15px;
          }

          .heroPillar1 {
            height: 30px;
          }

          .heroPillar2 {
            height: 40px;
          }

          .heroPillar3 {
            height: 30px;
          }
        }

        @media (max-width: 480px) {
          .heroSectionTitle {
            font-size: 1.6rem;
          }
          
          .heroSectionSubtitle {
            font-size: 0.85rem;
          }

          .heroSectionAnimationWrapper {
            width: 120px;
            height: 120px;
          }

          .heroZLogo {
            font-size: 35px;
          }
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

       
      `}</style>

      <section className="heroSectionContainer">
        <div className="heroSectionContent">
          <div className="heroSectionAnimationWrapper">
            <div className="heroZLogo">FG</div>
            <div className="heroGridAnimation">
              <div className="heroGridLayer heroLayer1"></div>
              <div className="heroGridLayer heroLayer2"></div>
              <div className="heroGridLayer heroLayer3"></div>
            </div>
            <div className="heroParticles">
              {[...Array(15)].map((_, i) => (
                <div 
                  key={i} 
                  className="heroParticle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                ></div>
              ))}
            </div>
            <div className="heroPillars">
              <div className="heroPillar heroPillar1"></div>
              <div className="heroPillar heroPillar2"></div>
              <div className="heroPillar heroPillar3"></div>
            </div>
          </div>
          
          <h1 className="heroSectionTitle">
            Your Neighbourhood <span className="heroSectionTitleHighlight">Digital marketing and</span>
            <br />
            <span className="heroSectionTitleHighlight">designing agency!</span>
          </h1>
          
          <p className="heroSectionSubtitle">
          Welcome to Fine Grow Solutions IT services |  We are a digital marketing agency
          </p>
          
          <div className="heroSectionScrollIndicator">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;