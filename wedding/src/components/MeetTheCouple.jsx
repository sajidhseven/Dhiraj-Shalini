import React from 'react';
import './MeetTheCouple.css';

const MeetTheCouple = () => {
  return (
    <section id="story" className="meet-couple">
      <div className="floral-corner top-left"></div>
      <div className="floral-corner top-right"></div>
      
      <div className="section-header">
        <h2 className="section-title text-red">MEET THE COUPLE</h2>
        <div className="ornate-divider"></div>
      </div>

      <div className="couple-cards-container">
        {/* Groom Card */}
        <div className="couple-card groom-card fade-in">
          <div className="card-border">
            <div className="portrait-container">
              <img src="/groom_avatar.png" alt="Dhiraj" className="portrait" />
            </div>
            <div className="card-info">
              <h3 className="name">DHIRAJ</h3>
              <p className="description">
                A dreamer, a believer,<br/>
                and now, a soon to be<br/>
                husband.
              </p>
            </div>
          </div>
        </div>

        {/* Center Logo */}
        <div className="center-logo">
          <div className="logo-circle solid-red">
            <span>D</span>
            <span className="ampersand">&amp;</span>
            <span>S</span>
          </div>
        </div>

        {/* Bride Card */}
        <div className="couple-card bride-card fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="card-border">
            <div className="portrait-container">
              <img src="/bride_avatar.png" alt="Shalini" className="portrait" />
            </div>
            <div className="card-info">
              <h3 className="name">SHALINI</h3>
              <p className="description">
                A hopeless romantic<br/>
                who found her<br/>
                forever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheCouple;
