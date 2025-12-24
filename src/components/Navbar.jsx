import React from 'react';

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
}

@media (max-width: 768px) {
  .navbarMenu {
    gap: 1.5rem;
    font-size: 0.9rem;
  }
}
`;



// Inject styles
if (typeof document !== 'undefined') {
  const navbarStyleEl = document.createElement('style');
  navbarStyleEl.textContent = navbarStyles;
  document.head.appendChild(navbarStyleEl);
  
  
}

// Navbar Component
 const Navbar = () => {
  return (
    <nav className="navbarContainer">
      <div className="navbarContent">
        <ul className="navbarMenu">
          <li className="navbarItem">
            <a href="#home" className="navbarLink navbarLinkActive">Home</a>
          </li>
          <li className="navbarItem">
            <a href="#resume" className="navbarLink">Resume</a>
          </li>
          <li className="navbarItem">
            <a href="#fit" className="navbarLink">The Right Fit</a>
          </li>
          <li className="navbarItem">
            <a href="#playbook" className="navbarLink">Playbook</a>
          </li>
          <li className="navbarItem">
            <a href="#contact" className="navbarLink">Contact</a>
          </li>
          <li className="navbarItem navbarItemDropdown">
            <a href="#work" className="navbarLink">
              Work <span className="navbarDropdownIcon">▼</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;



