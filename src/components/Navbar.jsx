import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/* navbar.css */
const navbarStyles = `
.navbarContainer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #07111bff;
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 1.5rem 0;
}

.navbarContent {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
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

.mobileMenuButton {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
}

@media (max-width: 768px) {
  .navbarContent {
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .mobileMenuButton {
    display: block;
  }

  .navbarMenu {
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    background: #07111bff;
    flex-direction: column;
    gap: 0;
    padding: 1rem 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .navbarMenu.open {
    max-height: 500px;
  }

  .navbarItem {
    width: 100%;
    text-align: center;
    padding: 0.75rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .navbarItem:last-child {
    border-bottom: none;
  }

  .navbarLink {
    justify-content: center;
    font-size: 1.1rem;
  }

  .dropdownMenu {
    position: static;
    transform: none;
    margin-top: 0.5rem;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  .dropdownMenu.open {
    margin-top: 0.5rem;
  }
}

@media (max-width: 480px) {
  .navbarContainer {
    padding: 1rem 0;
  }

  .navbarLink {
    font-size: 1rem;
  }

  .dropdownLink {
    font-size: 0.9rem;
  }
}
`;

// Inject styles
if (typeof document !== 'undefined') {
  const existingStyle = document.getElementById('navbar-styles');
  if (!existingStyle) {
    const navbarStyleEl = document.createElement('style');
    navbarStyleEl.id = 'navbar-styles';
    navbarStyleEl.textContent = navbarStyles;
    document.head.appendChild(navbarStyleEl);
  }
}

// Navbar Component
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

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbarContainer">
      <div className="navbarContent">
        <button 
          className="mobileMenuButton" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
        
        <ul className={`navbarMenu ${isMobileMenuOpen ? 'open' : ''}`}>
          <li className="navbarItem">
            <Link to="/" className="navbarLink navbarLinkActive" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          
          <li className="navbarItemDropdown">
            <span className="navbarLink" onClick={toggleDropdown}>
              E-Commerce
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
            <Link to="/about" className="navbarLink" onClick={closeMobileMenu}>
              About us
            </Link>
          </li>
          
          <li className="navbarItem">
            <Link to="/contact" className="navbarLink" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;