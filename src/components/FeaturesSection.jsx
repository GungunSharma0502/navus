import React, { useState, useEffect } from 'react';

const FeaturesSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  const planningSteps = [
    { icon: "🎯", title: "Set Goals", color: "#FF6B6B" },
    { icon: "👥", title: "Know Audience", color: "#4ECDC4" },
    { icon: "💡", title: "Create Strategy", color: "#FFE66D" },
    { icon: "📊", title: "Analyze Results", color: "#95E1D3" }
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % planningSteps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;
  const isSmallMobile = windowWidth <= 480;

  return (
    <div style={styles.showcase}>
      <div style={{
        ...styles.container,
        gridTemplateColumns: isMobile || isTablet ? '1fr' : '1fr 1fr',
        gap: isMobile ? '40px' : isTablet ? '50px' : '80px',
        padding: isMobile ? '0 15px' : '0 20px'
      }}>
        {/* Left Content */}
        <div style={{
          ...styles.content,
          paddingRight: isMobile || isTablet ? '0' : '40px',
          textAlign: isMobile ? 'center' : 'left'
        }}>
          <div style={{
            ...styles.intro,
            marginBottom: isMobile ? '30px' : '60px'
          }}>
            <h2 style={{
              ...styles.introText,
              fontSize: isSmallMobile ? '1.8rem' : isMobile ? '2.2rem' : isTablet ? '2.5rem' : '3rem',
              lineHeight: isMobile ? '1.2' : '1.3'
            }}>
              PLANNING <span style={styles.highlight}>YOUR MARKETING</span>{' '}
              <span style={styles.highlight}>CAMPAIGN</span>.
            </h2>
          </div>

          <div style={{
            ...styles.details,
            marginBottom: isMobile ? '30px' : '50px'
          }}>
            <h3 style={{
              ...styles.company,
              fontSize: isSmallMobile ? '1.5rem' : isMobile ? '1.8rem' : isTablet ? '2rem' : '2.5rem',
              marginBottom: isMobile ? '10px' : '15px'
            }}>
              Create a successful marketing campaign
            </h3>
            
            <p style={{
              ...styles.description,
              fontSize: isSmallMobile ? '0.95rem' : isMobile ? '1rem' : '1.1rem',
              marginBottom: isMobile ? '25px' : '30px'
            }}>
              An effective campaign demands a great deal of time, and planning. If you've never run a marketing campaign before, it can be tough to understand.
            </p>
            
            <button style={{
              ...styles.contactButton,
              padding: isSmallMobile ? '14px 30px' : isMobile ? '16px 35px' : '18px 40px',
              fontSize: isSmallMobile ? '0.95rem' : isMobile ? '1rem' : '1.1rem',
              width: isMobile ? '100%' : 'auto',
              justifyContent: isMobile ? 'center' : 'flex-start'
            }}>
              <span style={styles.buttonText}>Contact us</span>
              <span style={styles.buttonArrow}>→</span>
            </button>
          </div>
        </div>

        {/* Right Content - Planning Animation */}
        <div style={styles.device}>
          <div style={{
            ...styles.deviceFrame,
            maxWidth: isMobile ? '100%' : isTablet ? '500px' : '600px',
            padding: isSmallMobile ? '12px' : isMobile ? '15px' : '20px',
            borderRadius: isSmallMobile ? '25px' : isMobile ? '30px' : '40px'
          }}>
            <div style={{
              ...styles.deviceScreen,
              padding: isSmallMobile ? '15px' : isMobile ? '20px' : isTablet ? '25px' : '30px',
              minHeight: isSmallMobile ? '320px' : isMobile ? '360px' : isTablet ? '400px' : '450px',
              borderRadius: isSmallMobile ? '15px' : isMobile ? '18px' : '25px'
            }}>
              {/* Planning Process Animation */}
              <div style={styles.planningContainer}>
                <div style={{
                  ...styles.planningTitle,
                  fontSize: isSmallMobile ? '1.1rem' : isMobile ? '1.3rem' : isTablet ? '1.5rem' : '1.6rem',
                  marginBottom: isMobile ? '10px' : '15px'
                }}>
                  Campaign Planning Process
                </div>
                
                <div style={{
                  ...styles.stepsContainer,
                  gridTemplateColumns: isSmallMobile ? '1fr' : '1fr 1fr',
                  gap: isSmallMobile ? '10px' : isMobile ? '12px' : '15px',
                  marginBottom: isMobile ? '15px' : '20px'
                }}>
                  {planningSteps.map((step, index) => (
                    <div 
                      key={index}
                      style={{
                        ...styles.stepCard,
                        transform: activeStep === index ? 'scale(1.05)' : 'scale(1)',
                        opacity: activeStep === index ? 1 : 0.5,
                        borderColor: activeStep === index ? step.color : '#e0e0e0',
                        padding: isSmallMobile ? '12px' : isMobile ? '15px' : '18px'
                      }}
                    >
                      <div style={{
                        ...styles.stepIcon,
                        backgroundColor: step.color,
                        width: isSmallMobile ? '45px' : isMobile ? '50px' : '60px',
                        height: isSmallMobile ? '45px' : isMobile ? '50px' : '60px',
                        fontSize: isSmallMobile ? '1.3rem' : isMobile ? '1.5rem' : '1.7rem'
                      }}>
                        {step.icon}
                      </div>
                      <div style={{
                        ...styles.stepTitle,
                        fontSize: isSmallMobile ? '0.9rem' : isMobile ? '1rem' : '1.1rem'
                      }}>
                        {step.title}
                      </div>
                      <div style={{
                        ...styles.stepNumber,
                        color: step.color,
                        fontSize: isSmallMobile ? '0.75rem' : '0.85rem'
                      }}>
                        Step {index + 1}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Progress Indicator */}
                <div style={{
                  ...styles.progressBar,
                  height: isSmallMobile ? '6px' : '8px'
                }}>
                  <div style={{
                    ...styles.progressFill,
                    width: `${((activeStep + 1) / planningSteps.length) * 100}%`
                  }} />
                </div>

                {/* Central Circle Animation */}
                <div style={{
                  ...styles.centerCircle,
                  bottom: isSmallMobile ? '15px' : isMobile ? '20px' : '25px'
                }}>
                  <div style={{
                    ...styles.pulseRing,
                    animation: 'pulse 2s infinite',
                    width: isSmallMobile ? '60px' : '80px',
                    height: isSmallMobile ? '60px' : '80px'
                  }} />
                  <div style={{
                    ...styles.centerIcon,
                    width: isSmallMobile ? '45px' : '60px',
                    height: isSmallMobile ? '45px' : '60px',
                    fontSize: isSmallMobile ? '1.4rem' : '1.8rem'
                  }}>
                    📋
                  </div>
                  <div style={{
                    ...styles.centerText,
                    fontSize: isSmallMobile ? '0.75rem' : '0.9rem'
                  }}>
                    Planning
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.5;
          }
          100% {
            transform: scale(0.8);
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

const styles = {
  showcase: {
    background: 'linear-gradient(135deg, #0a0a0a 0%, #012432 100%)',
    padding: '100px 20px',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    color: '#ffffff'
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'grid',
    alignItems: 'center',
    width: '100%'
  },
  content: {
    width: '100%'
  },
  intro: {
    width: '100%'
  },
  introText: {
    fontWeight: '300',
    margin: '0',
    color: '#b0b0b0'
  },
  highlight: {
    fontWeight: '600',
    color: '#ffffff'
  },
  details: {
    width: '100%'
  },
  company: {
    fontWeight: '700',
    margin: '0',
    color: '#ffffff'
  },
  description: {
    lineHeight: '1.7',
    color: '#999999',
    margin: '0'
  },
  contactButton: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    border: 'none',
    borderRadius: '50px',
    fontWeight: '600',
    color: '#ffffff',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    transition: 'all 0.3s ease',
    boxShadow: '0 8px 20px rgba(102, 126, 234, 0.4)',
    position: 'relative',
    overflow: 'hidden'
  },
  buttonText: {
    position: 'relative',
    zIndex: 1
  },
  buttonArrow: {
    fontSize: '1.3rem',
    transition: 'transform 0.3s ease',
    position: 'relative',
    zIndex: 1
  },
  device: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  deviceFrame: {
    position: 'relative',
    width: '100%',
    background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
    boxShadow: '0 30px 80px rgba(0, 0, 0, 0.9)',
    border: '3px solid rgba(255, 255, 255, 0.1)'
  },
  deviceScreen: {
    background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
    position: 'relative',
    overflow: 'hidden'
  },
  planningContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    position: 'relative'
  },
  planningTitle: {
    fontWeight: '700',
    color: '#2d3748',
    textAlign: 'center'
  },
  stepsContainer: {
    display: 'grid',
    width: '100%'
  },
  stepCard: {
    background: '#ffffff',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '3px solid #e0e0e0',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer'
  },
  stepIcon: {
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    animation: 'float 3s ease-in-out infinite'
  },
  stepTitle: {
    fontWeight: '600',
    color: '#2d3748',
    textAlign: 'center'
  },
  stepNumber: {
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  progressBar: {
    width: '100%',
    background: '#e0e0e0',
    borderRadius: '10px',
    overflow: 'hidden',
    marginTop: '10px'
  },
  progressFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
    transition: 'width 0.5s ease',
    borderRadius: '10px'
  },
  centerCircle: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px'
  },
  pulseRing: {
    position: 'absolute',
    borderRadius: '50%',
    background: 'rgba(102, 126, 234, 0.3)',
    top: '-10px',
    left: '50%',
    transform: 'translateX(-50%)'
  },
  centerIcon: {
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 8px 20px rgba(102, 126, 234, 0.4)',
    zIndex: 1
  },
  centerText: {
    fontWeight: '700',
    color: '#667eea',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  }
};

export default FeaturesSection;