import React from 'react';
import './LocationsAndStory.css';

const LocationsAndStory = () => {
  return (
    <section id="location" className="locations-story-section">
      <div className="ls-container">
        {/* Our Story Card */}
        <div className="ls-card fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="card-inner">
            <h3 className="ls-title">OUR STORY</h3>
            <div className="ornate-divider small"></div>
            
            <div className="video-container">
              <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop" alt="Our Story Video" className="video-thumb" />
              <div className="play-button">
                <i className="fas fa-play"></i>
              </div>
            </div>
            
            <button className="youtube-btn">
              <i className="fab fa-youtube"></i> WATCH ON YOUTUBE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsAndStory;
