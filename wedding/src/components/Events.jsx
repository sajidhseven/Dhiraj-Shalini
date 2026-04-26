import React from 'react';
import './Events.css';

const Events = () => {
  return (
    <section id="events" className="events-section">
      <div className="section-header">
        <h2 className="section-title text-red">OUR WEDDING EVENTS</h2>
        <div className="ornate-divider"></div>
      </div>

      <div className="events-grid">
        {/* Haldi */}
        <div className="event-card gold-theme fade-in">
          <div className="event-inner">
            <div className="event-icon">
              <i className="fas fa-fire-alt"></i> {/* Placeholder for diya icon */}
            </div>
            <h3 className="event-title">HALDI</h3>
            <div className="event-details">
              <p><i className="far fa-calendar-alt"></i> 25th April 2026</p>
              <p>10:00 AM Onwards</p>
            </div>
            <button className="location-btn" onClick={() => window.open('https://maps.app.goo.gl/kbjYsUv19eKZJ14K6', '_blank')}>
              VIEW LOCATION <i className="fas fa-map-marker-alt"></i>
            </button>
          </div>
        </div>

        {/* Reception */}
        {/* <div className="event-card red-theme fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="event-inner">
            <div className="event-icon">
              <i className="fas fa-glass-cheers"></i>
            </div>
            <h3 className="event-title">RECEPTION</h3>
            <div className="event-details">
              <p><i className="far fa-calendar-alt"></i> 28th April 2025</p>
              <p>07:00 PM Onwards</p>
            </div>
            <button className="location-btn">
              VIEW LOCATION <i className="fas fa-map-marker-alt"></i>
            </button>
          </div>
        </div> */}

        {/* Marriage */}
        <div className="event-card gold-theme fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="event-inner">
            <div className="event-icon">
              <i className="fas fa-praying-hands"></i>
            </div>
            <h3 className="event-title">MARRIAGE</h3>
            <div className="event-details">
              <p><i className="far fa-calendar-alt"></i> 27th April 2026</p>
              <p>9:30 AM Onwards</p>
            </div>
            <button className="location-btn" onClick={() => window.open('https://maps.app.goo.gl/kbjYsUv19eKZJ14K6', '_blank')}>
              VIEW LOCATION <i className="fas fa-map-marker-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
