import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import './Navbar.css';
import myimage from "../assets/Google_Chrome_icon_(February_2022).svg.webp";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Animate navbar links for larger screens
    gsap.fromTo(
      ".navbar-links li",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.2 }
    );
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // GSAP animation for menu toggle
    if (!menuOpen) {
      gsap.fromTo(
        ".navbar-links",
        { x: "100%" },
        { x: "0%", duration: 0.5, ease: "power2.out" }
      );
    } else {
      gsap.to(".navbar-links", {
        x: "100%",
        duration: 0.5,
        ease: "power2.in",
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={myimage} alt="Chrome Logo" />
        <a href="/" style={{ color: "#090909" }}>Chrome</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className={`line ${menuOpen ? "open" : ""}`}></span>
        <span className={`line ${menuOpen ? "open" : ""}`}></span>
        <span className={`line ${menuOpen ? "open" : ""}`}></span>
      </div>
      <ul className={`navbar-links ${menuOpen ? "mobile-open" : ""}`}>
        <li><a href="#features">Features</a></li>
        <li><a href="#download">Download</a></li>
        <li><a href="#support">Support</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
