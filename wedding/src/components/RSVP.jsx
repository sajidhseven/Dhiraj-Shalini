import React from 'react';
import './RSVP.css';

const RSVP = () => {
  return (
    <section id="rsvp" className="rsvp-section">
      <div className="elephant-left"></div>
      <div className="elephant-right"></div>
      
      <div className="rsvp-container fade-in">
        <h2 className="rsvp-title">KINDLY RSVP</h2>
        <div className="ornate-divider gold-divider"></div>
        <p className="rsvp-subtitle">We would be honoured to have you celebrate with us.</p>
        
        <form className="rsvp-form">
          <div className="form-group row">
            <div className="input-wrapper">
              <i className="far fa-user"></i>
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="input-wrapper">
              <i className="far fa-envelope"></i>
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="input-wrapper">
              <i className="fas fa-phone-alt"></i>
              <input type="tel" placeholder="Phone Number" required />
            </div>
          </div>
          
          <div className="form-group row">
            <div className="input-wrapper select-wrapper">
              <i className="far fa-calendar-check"></i>
              <select required>
                <option value="" disabled selected>Will you attend?</option>
                <option value="yes">Yes, I will attend</option>
                <option value="no">Sorry, I can't come</option>
              </select>
              <i className="fas fa-chevron-down select-arrow"></i>
            </div>
            <div className="input-wrapper message-wrapper">
              <i className="fas fa-pen"></i>
              <input type="text" placeholder="Message (Optional)" />
            </div>
          </div>
          
          <button type="submit" className="submit-btn">
            CONFIRM ATTENDANCE &nbsp; <i className="fas fa-heart"></i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default RSVP;
