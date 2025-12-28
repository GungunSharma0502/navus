import React, { useState, useEffect } from 'react';

const FeaturesSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const planningSteps = [
    { icon: "🎯", title: "Set Goals", color: "#FF6B6B" },
    { icon: "👥", title: "Know Audience", color: "#4ECDC4" },
    { icon: "💡", title: "Create Strategy", color: "#FFE66D" },
    { icon: "📊", title: "Analyze Results", color: "#95E1D3" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % planningSteps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.showcase}>
      <div style={styles.container}>
        {/* Left Content */}
        <div style={styles.content}>
          <div style={styles.intro}>
            <h2 style={styles.introText}>
              PLANNING <span style={styles.highlight}>YOUR MARKETING</span>{' '}
              <span style={styles.highlight}>CAMPAIGN</span>.
            </h2>
          </div>

          <div style={styles.details}>
            <h3 style={styles.company}>Create a successful marketing campaign</h3>
            
            <p style={styles.description}>
              An effective campaign demands a great deal of time, and planning. If you've never run a marketing campaign before, it can be tough to understand.
            </p>
            
            <button style={styles.contactButton}>
              <span style={styles.buttonText}>Contact us</span>
              <span style={styles.buttonArrow}>→</span>
            </button>
          </div>
        </div>

        {/* Right Content - Planning Animation */}
        <div style={styles.device}>
          <div style={styles.deviceFrame}>
            <div style={styles.deviceScreen}>
              {/* Planning Process Animation */}
              <div style={styles.planningContainer}>
                <div style={styles.planningTitle}>Campaign Planning Process</div>
                
                <div style={styles.stepsContainer}>
                  {planningSteps.map((step, index) => (
                    <div 
                      key={index}
                      style={{
                        ...styles.stepCard,
                        transform: activeStep === index ? 'scale(1.1)' : 'scale(1)',
                        opacity: activeStep === index ? 1 : 0.5,
                        borderColor: activeStep === index ? step.color : '#e0e0e0'
                      }}
                    >
                      <div style={{...styles.stepIcon, backgroundColor: step.color}}>
                        {step.icon}
                      </div>
                      <div style={styles.stepTitle}>{step.title}</div>
                      <div style={{
                        ...styles.stepNumber,
                        color: step.color
                      }}>
                        Step {index + 1}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Progress Indicator */}
                <div style={styles.progressBar}>
                  <div style={{
                    ...styles.progressFill,
                    width: `${((activeStep + 1) / planningSteps.length) * 100}%`
                  }} />
                </div>

                {/* Central Circle Animation */}
                <div style={styles.centerCircle}>
                  <div style={{
                    ...styles.pulseRing,
                    animation: 'pulse 2s infinite'
                  }} />
                  <div style={styles.centerIcon}>📋</div>
                  <div style={styles.centerText}>Planning</div>
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

        @media (max-width: 1024px) {
          .features-container {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
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
    gridTemplateColumns: '1fr 1fr',
    gap: '80px',
    alignItems: 'center'
  },
  content: {
    paddingRight: '40px'
  },
  intro: {
    marginBottom: '60px'
  },
  introText: {
    fontSize: '3rem',
    fontWeight: '300',
    lineHeight: '1.3',
    margin: '0',
    color: '#b0b0b0'
  },
  highlight: {
    fontWeight: '600',
    color: '#ffffff'
  },
  details: {
    marginBottom: '50px'
  },
  company: {
    fontSize: '2.5rem',
    fontWeight: '700',
    margin: '0 0 15px 0',
    color: '#ffffff'
  },
  description: {
    fontSize: '1.1rem',
    lineHeight: '1.7',
    color: '#999999',
    margin: '0 0 30px 0'
  },
  contactButton: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    border: 'none',
    padding: '18px 40px',
    borderRadius: '50px',
    fontSize: '1.1rem',
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
    alignItems: 'center'
  },
  deviceFrame: {
    position: 'relative',
    width: '100%',
    maxWidth: '600px',
    background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
    borderRadius: '40px',
    padding: '20px',
    boxShadow: '0 30px 80px rgba(0, 0, 0, 0.9)',
    border: '3px solid rgba(255, 255, 255, 0.1)'
  },
  deviceScreen: {
    background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
    borderRadius: '25px',
    padding: '40px',
    minHeight: '550px',
    position: 'relative',
    overflow: 'hidden'
  },
  planningContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    position: 'relative'
  },
  planningTitle: {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#2d3748',
    textAlign: 'center',
    marginBottom: '20px'
  },
  stepsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    marginBottom: '30px'
  },
  stepCard: {
    background: '#ffffff',
    borderRadius: '20px',
    padding: '25px',
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
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    transition: 'all 0.3s ease',
    animation: 'float 3s ease-in-out infinite'
  },
  stepTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#2d3748',
    textAlign: 'center'
  },
  stepNumber: {
    fontSize: '0.85rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  progressBar: {
    width: '100%',
    height: '8px',
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
    bottom: '40px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px'
  },
  pulseRing: {
    position: 'absolute',
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: 'rgba(102, 126, 234, 0.3)',
    top: '-10px',
    left: '50%',
    transform: 'translateX(-50%)'
  },
  centerIcon: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.8rem',
    boxShadow: '0 8px 20px rgba(102, 126, 234, 0.4)',
    zIndex: 1
  },
  centerText: {
    fontSize: '0.9rem',
    fontWeight: '700',
    color: '#667eea',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  }
};

export default FeaturesSection;