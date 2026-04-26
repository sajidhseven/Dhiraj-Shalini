import React from 'react';
import './WeddingVideo.css';

const WeddingVideo = () => {
  return (
    <section id="wedding-video" className="wedding-video-section fade-in">
      <div className="section-header">
        <h2 className="section-title text-red">WEDDING INVITATION</h2>
        <div className="ornate-divider"></div>
      </div>
      <div className="wedding-video-wrapper">
        <video 
          className="wedding-video" 
          src="/Wedding_Video.mp4" 
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

export default WeddingVideo;
