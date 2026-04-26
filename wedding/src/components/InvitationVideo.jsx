import React from 'react';
import './InvitationVideo.css';

const InvitationVideo = () => {
  return (
    <section id="invitation" className="invitation-section fade-in">
      <div className="section-header">
        <h2 className="section-title text-red">INVITATION</h2>
        <div className="ornate-divider"></div>
      </div>
      <div className="video-wrapper">
        <video 
          className="invitation-video" 
          src="/Card_Invitation.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          controls
        />
      </div>
    </section>
  );
};

export default InvitationVideo;
