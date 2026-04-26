import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      <div className="hero-content fade-in">
        <div className="heart-icon">
          <i className="fas fa-heart"></i>
        </div>
        <p className="the-wedding-of">T H E &nbsp; W E D D I N G &nbsp; O F</p>
        <h1 className="couple-names-hero">Dhiraj & Shalini</h1>
        
        <div className="divider-line">
          <span></span>
          <p className="tagline">Two hearts, one love, a lifetime together</p>
          <span></span>
        </div>

        <div className="wedding-date-hero">
          <span className="dot"></span>
          27 • 04 • 2026
          <span className="dot"></span>
        </div>

        {/* <button className="view-events-btn">
          VIEW OUR EVENTS
        </button> */}
      </div>

      {/* Decorative floral elements on the sides could be added here */}
      <div className="groom-placeholder"></div>
      <div className="bride-placeholder"></div>
    </section>
  );
};

export default Hero;
