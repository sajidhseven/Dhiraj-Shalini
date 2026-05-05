import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        
        <div className="nav-logo mobile-only-logo">
          <div className="logo-circle">
            <span>D</span>
            <span className="ampersand">&amp;</span>
            <span>S</span>
          </div>
        </div>

        {/* Desktop Links (Left) */}
        <ul className="nav-links left-links desktop-only">
          <li><a href="#home">Home</a></li>
          <li><a href="#story">Our Story</a></li>
        </ul>
        
        <div className="nav-logo desktop-logo">
          <div className="logo-circle">
            <span>D</span>
            <span className="ampersand">&amp;</span>
            <span>S</span>
          </div>
        </div>

        {/* Desktop Links (Right) */}
        <ul className="nav-links right-links desktop-only">
          <li><a href="#events">Events</a></li>
          <li><a href="#location">Location</a></li>
          <li><Link to="/haldi">Haldi</Link></li>
          <li><a href="#rsvp">RSVP</a></li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${menuOpen ? 'active' : ''}`}>
          <ul className="mobile-links">
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#story" onClick={() => setMenuOpen(false)}>Our Story</a></li>
            <li><a href="#events" onClick={() => setMenuOpen(false)}>Events</a></li>
            <li><a href="#location" onClick={() => setMenuOpen(false)}>Location</a></li>
            <li><Link to="/haldi" onClick={() => setMenuOpen(false)}>Haldi</Link></li>
            <li><a href="#rsvp" onClick={() => setMenuOpen(false)}>RSVP</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
