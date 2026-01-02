import Logo from '../assets/logo.png';
import React, { useState } from 'react';

const navbarStyles = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

.navbarContainer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: #07111bff;
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.navbarContent {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.navbarLogo {
  display: flex;
  align-items: center;
  z-index: 1002;
  position: relative;
}

.navbarLogoLink {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.navbarLogoImg {
  height: 50px;
  width: auto;
  max-width: 150px;
  object-fit: contain;
  cursor: pointer;
  display: block;
}

.mobileMenuButton {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1002;
  line-height: 1;
  position: relative;
}

.navbarMenuWrapper {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
}

.navbarMenu {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin: 0;
  padding: 0;
}

.navbarItem {
  position: relative;
}

.navbarItemDropdown {
  position: relative;
}

.navbarLink {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  white-space: nowrap;
}

.navbarLink:hover {
  color: rgba(255, 255, 255, 1);
}

.navbarLinkActive {
  color: rgba(255, 255, 255, 1);
}

.navbarDropdownIcon {
  font-size: 0.7rem;
  margin-left: 0.2rem;
  transition: transform 0.3s ease;
}

.navbarDropdownIcon.open {
  transform: rotate(180deg);
}

.dropdownMenu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 1rem;
  background: #0a1929;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  min-width: 180px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.dropdownMenu.open {
  opacity: 1;
  visibility: visible;
  margin-top: 0.5rem;
}

.dropdownItem {
  padding: 0.75rem 1.25rem;
  transition: background 0.2s ease;
}

.dropdownItem:first-child {
  border-radius: 8px 8px 0 0;
}

.dropdownItem:last-child {
  border-radius: 0 0 8px 8px;
}

.dropdownItem:hover {
  background: rgba(255, 255, 255, 0.05);
}

.dropdownLink {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.95rem;
  display: block;
  transition: color 0.2s ease;
}

.dropdownLink:hover {
  color: rgba(255, 255, 255, 1);
}

/* Tablet Styles */
@media (max-width: 1024px) {
  .navbarMenu {
    gap: 2rem;
  }
  
  .navbarLink {
    font-size: 0.95rem;
  }
}

/* Mobile Styles - IMPORTANT */
@media (max-width: 768px) {
  .navbarContainer {
    padding: 0.75rem 0;
  }

  .navbarContent {
    padding: 0 1rem;
  }

  .navbarLogoImg {
    height: 45px;
    max-width: 130px;
  }

  .mobileMenuButton {
    display: block !important;
  }

  .navbarMenuWrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background: #07111bff;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 5rem 0 2rem 0;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    overflow-y: auto;
    z-index: 1001;
  }

  .navbarMenuWrapper.open {
    transform: translateX(0);
  }

  .navbarMenu {
    flex-direction: column;
    gap: 0;
    width: 100%;
    padding: 0;
    align-items: stretch;
  }

  .navbarItem {
    width: 100%;
    text-align: left;
    padding: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .navbarItem:last-child {
    border-bottom: none;
  }

  .navbarLink {
    justify-content: space-between;
    font-size: 1.1rem;
    padding: 1.2rem 2rem;
    width: 100%;
  }

  .navbarItemDropdown .navbarLink {
    padding: 1.2rem 2rem;
  }

  .dropdownMenu {
    position: static;
    transform: none;
    margin-top: 0;
    width: 100%;
    background: rgba(10, 25, 41, 0.5);
    border: none;
    border-radius: 0;
    box-shadow: none;
    max-height: 0;
    overflow: hidden;
    opacity: 1;
    visibility: visible;
    transition: max-height 0.3s ease;
  }

  .dropdownMenu.open {
    max-height: 600px;
  }

  .dropdownItem {
    padding: 0;
    border-radius: 0;
  }

  .dropdownItem:first-child,
  .dropdownItem:last-child {
    border-radius: 0;
  }

  .dropdownLink {
    padding: 1rem 3rem;
    font-size: 1rem;
  }

  .dropdownItem:hover {
    background: rgba(255, 255, 255, 0.03);
  }
}

@media (max-width: 480px) {
  .navbarContainer {
    padding: 0.5rem 0;
  }

  .navbarContent {
    padding: 0 1rem;
  }

  .navbarLogoImg {
    height: 40px;
    max-width: 110px;
  }

  .navbarLink {
    font-size: 1rem;
    padding: 1rem 1.5rem;
  }

  .dropdownLink {
    font-size: 0.95rem;
    padding: 0.875rem 2.5rem;
  }

  .mobileMenuButton {
    font-size: 1.6rem;
    padding: 0.25rem;
  }
}

@media (max-width: 360px) {
  .navbarLogoImg {
    height: 35px;
    max-width: 100px;
  }

  .navbarLink {
    font-size: 0.95rem;
    padding: 0.875rem 1.25rem;
  }

  .dropdownLink {
    font-size: 0.9rem;
    padding: 0.75rem 2rem;
  }
}
`;

if (typeof document !== 'undefined') {
  const existingStyle = document.getElementById('navbar-styles');
  if (existingStyle) {
    existingStyle.remove();
  }
  const navbarStyleEl = document.createElement('style');
  navbarStyleEl.id = 'navbar-styles';
  navbarStyleEl.textContent = navbarStyles;
  document.head.appendChild(navbarStyleEl);
}

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const ecommerceLinks = [
    { name: 'Amazon', path: '/amazon-services' },
    { name: 'Flipkart', path: '/flipkart-services' },
    { name: 'Myntra', path: '/myntra-services' },
    { name: 'Nykaa', path: '/nykaa-services' },
    { name: 'Ebay', path: '/ebay-services' }
  ];

  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setIsDropdownOpen(false);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const handleNavigation = (path) => {
    console.log('Navigating to:', path);
    closeMobileMenu();
  };

  return (
    <>
      <nav className="navbarContainer">
        <div className="navbarContent">
          <div className="navbarLogo">
            <a 
              href="/" 
              className="navbarLogoLink"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/');
              }}
            >
              <img 
                src={Logo} 
                alt="Company Logo" 
                className="navbarLogoImg"
              />
            </a>
          </div>

          <button 
            className="mobileMenuButton" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
          
          <div className={`navbarMenuWrapper ${isMobileMenuOpen ? 'open' : ''}`}>
            <ul className="navbarMenu">
              <li className="navbarItem">
                <a 
                  href="/" 
                  className="navbarLink navbarLinkActive"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('/');
                  }}
                >
                  Home
                </a>
              </li>
              
              <li className="navbarItemDropdown">
                <span className="navbarLink" onClick={toggleDropdown}>
                  <span>E-Commerce</span>
                  <span className={`navbarDropdownIcon ${isDropdownOpen ? 'open' : ''}`}>▼</span>
                </span>
                
                <div className={`dropdownMenu ${isDropdownOpen ? 'open' : ''}`}>
                  {ecommerceLinks.map((link, index) => (
                    <div key={index} className="dropdownItem">
                      <a 
                        href={link.path}
                        className="dropdownLink"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigation(link.path);
                        }}
                      >
                        {link.name}
                      </a>
                    </div>
                  ))}
                </div>
              </li>
              
              <li className="navbarItem">
                <a 
                  href="/about" 
                  className="navbarLink"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('/about');
                  }}
                >
                  About us
                </a>
              </li>
              
              <li className="navbarItem">
                <a 
                  href="/contact" 
                  className="navbarLink"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('/contact');
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      {/* Demo Content */}
      <div style={{ paddingTop: '80px', padding: '100px 20px', background: '#0f1922', minHeight: '100vh' }}>
        <h1 style={{ color: 'white', textAlign: 'center' }}>Welcome to Our Website</h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginTop: '20px' }}>
          Try resizing your browser or viewing on mobile to test the responsive navbar
        </p>
      </div>
    </>
  );
};

export default Navbar;