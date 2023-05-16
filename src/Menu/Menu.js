import React, { useState } from "react";
import logo from "../Menu/Logo.png"; // Import the logo image
import "./Menu.css";

const Menu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    // Set mobile logic
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="menu">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className={`menu-items ${isMobileMenuOpen ? "mobile-menu" : ""}`}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Partners</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Menu;
