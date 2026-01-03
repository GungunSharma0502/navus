import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const navbarStyles = `
.navbarContainer {
 
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  width: 100% !important;
  z-index: 9999 !important;

  background: #ffffff;
  backdrop-filter: blur(10px);
 
  padding: 0.5rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.navbarContent {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  gap: 2rem;
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
  color: #1a1a1a;
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
  color: #4a4a4a;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  white-space: nowrap;
}

.navbarLink:hover {
  color: #1a1a1a;
}

.navbarLinkActive {
  color: #1a1a1a;
  font-weight: 600;
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
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  min-width: 180px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
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
  background: rgba(0, 0, 0, 0.05);
}

.dropdownLink {
  color: #4a4a4a;
  text-decoration: none;
  font-size: 0.95rem;
  display: block;
  transition: color 0.2s ease;
  font-weight: 500;
}

.dropdownLink:hover {
  color: #1a1a1a;
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

/* Mobile Styles */
@media (max-width: 768px) {
  .navbarContainer {
    padding: 0.75rem 0;
  }

  .navbarContent {
    padding: 0 1.5rem;
    max-width: 100%;
    gap: 1rem;
  }

  .navbarLogoImg {
    height: 45px;
    max-width: 130px;
  }

  .mobileMenuButton {
    display: block !important;
    margin-left: auto;
  }

  .navbarMenuWrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background: #ffffff;
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
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  .navbarItem:last-child {
    border-bottom: none;
  }

  .navbarLink {
    justify-content: space-between;
    font-size: 1.1rem;
    padding: 1.2rem 2rem;
    width: 100%;
    color: #2a2a2a;
  }

  .navbarItemDropdown .navbarLink {
    padding: 1.2rem 2rem;
  }

  .dropdownMenu {
    position: static;
    transform: none;
    margin-top: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.02);
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
    color: #3a3a3a;
  }

  .dropdownItem:hover {
    background: rgba(0, 0, 0, 0.03);
  }
}

@media (max-width: 480px) {
  .navbarContainer {
    padding: 0.5rem 0;
  }

  .navbarContent {
    padding: 0 1rem;
    gap: 0.75rem;
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
  .navbarContent {
    padding: 0 0.75rem;
    gap: 0.5rem;
  }

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
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const ecommerceLinks = [
    { name: 'Amazon', path: '/amazon-services' },
    { name: 'Flipkart', path: '/flipkart-services' },
    { name: 'Myntra', path: '/myntra-services' },
    { name: 'Nykaa', path: '/nykaa-services' },
    { name: 'Ebay', path: '/ebay-services' }
  ];

  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      timeoutRef.current = setTimeout(() => {
        setIsDropdownOpen(false);
      }, 200);
    }
  };

  const toggleDropdown = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
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

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="navbarContainer">
      <div className="navbarContent">
        <div className="navbarLogo">
          <Link to="/" className="navbarLogoLink" onClick={closeMobileMenu}>
            <img 
              src={Logo} 
              alt="Company Logo" 
              className="navbarLogoImg"
            />
          </Link>
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
              <Link 
                to="/" 
                className="navbarLink navbarLinkActive"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            
            <li 
              className="navbarItemDropdown"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="navbarLink" onClick={toggleDropdown}>
                <span>E-Commerce</span>
                <span className={`navbarDropdownIcon ${isDropdownOpen ? 'open' : ''}`}>▼</span>
              </span>
              
              <div className={`dropdownMenu ${isDropdownOpen ? 'open' : ''}`}>
                {ecommerceLinks.map((link, index) => (
                  <div key={index} className="dropdownItem">
                    <Link 
                      to={link.path}
                      className="dropdownLink"
                      onClick={closeMobileMenu}
                    >
                      {link.name}
                    </Link>
                  </div>
                ))}
              </div>
            </li>
            
            <li className="navbarItem">
              <Link 
                to="/about" 
                className="navbarLink"
                onClick={closeMobileMenu}
              >
                About us
              </Link>
            </li>
            
            <li className="navbarItem">
              <Link 
                to="/contact" 
                className="navbarLink"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;