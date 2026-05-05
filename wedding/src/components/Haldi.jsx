import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Haldi.css';

const Haldi = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [lightbox, setLightbox] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [tapIcon, setTapIcon] = useState(null); // 'play' | 'pause' | null
  const tapTimer = useRef(null);

  const handleVideoTap = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setTapIcon('play');
    } else {
      video.pause();
      setTapIcon('pause');
    }
    // Flash the icon for 600ms then hide
    clearTimeout(tapTimer.current);
    tapTimer.current = setTimeout(() => setTapIcon(null), 700);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Videos for the Haldi celebration
  const videos = [
    { src: '/Haldi.mp4', title: 'Haldi Ceremony' },
  ];

  // Photos will be added here later
  const photos = [
    // { src: '/haldi-photo-1.jpg', caption: 'Haldi Moments' },
  ];

  const openLightbox = (type, src, index, title) => {
    setLightbox({ type, src, index, title });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightbox(null);
    document.body.style.overflow = '';
  };

  const navigateLightbox = (dir) => {
    if (!lightbox) return;
    const list = lightbox.type === 'video' ? videos : photos;
    const newIndex = (lightbox.index + dir + list.length) % list.length;
    setLightbox({ ...lightbox, src: list[newIndex].src, index: newIndex, title: list[newIndex].title });
  };

  return (
    <div className="haldi-page">
      {/* ── Top Navbar ── */}
      <nav className={`haldi-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="haldi-nav-inner">
          <button className="back-btn" onClick={() => navigate('/')}>
            <i className="fas fa-arrow-left"></i> Home
          </button>
          <div className="haldi-nav-logo">
            <div className="logo-circle">
              <span>D</span>
              <span className="ampersand">&amp;</span>
              <span>S</span>
            </div>
          </div>
          <span className="haldi-nav-title">Haldi</span>
        </div>
      </nav>

      {/* ── Hero Banner ── */}
      <header className="haldi-hero">
        <div className="haldi-hero-overlay"></div>
        <div className="haldi-hero-content">
          <p className="haldi-pre-title">Dhiraj &amp; Shalini</p>
          <h1 className="haldi-title">Haldi Celebration</h1>
          <div className="haldi-divider">
            <span className="divider-line"></span>
            <span className="divider-icon">🌼</span>
            <span className="divider-line"></span>
          </div>
          <p className="haldi-subtitle">
            A joyful ceremony filled with turmeric blessings, laughter &amp; love
          </p>
        </div>
        <div className="haldi-scroll-hint">
          <span>Scroll to explore</span>
          <i className="fas fa-chevron-down"></i>
        </div>
      </header>

      {/* ── Videos Section ── */}
      <section className="haldi-section haldi-videos-section">
        <div className="haldi-section-header">
          <h2 className="haldi-section-title">Ceremony Highlights</h2>
          <div className="haldi-ornate-divider"></div>
          <p className="haldi-section-sub">Relive the golden moments from our Haldi day</p>
        </div>

        <div className="haldi-video-center">
          <div className="haldi-video-frame" onClick={handleVideoTap}>
            <video
              ref={videoRef}
              src="/Haldi.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              className="haldi-main-video"
            />
            {/* Tap feedback icon */}
            {tapIcon && (
              <div className={`video-tap-icon ${tapIcon}`} key={tapIcon + Date.now()}>
                <i className={tapIcon === 'play' ? 'fas fa-play' : 'fas fa-pause'}></i>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Photos Section ── */}
      {photos.length > 0 ? (
        <section className="haldi-section haldi-photos-section">
          <div className="haldi-section-header">
            <h2 className="haldi-section-title">Photo Gallery</h2>
            <div className="haldi-ornate-divider"></div>
            <p className="haldi-section-sub">Snapshots of pure joy</p>
          </div>
          <div className="haldi-photo-grid">
            {photos.map((photo, i) => (
              <div
                key={i}
                className="haldi-photo-card"
                onClick={() => openLightbox('photo', photo.src, i, photo.caption)}
              >
                <img src={photo.src} alt={photo.caption} loading="lazy" />
                <div className="photo-hover-overlay">
                  <i className="fas fa-expand-alt"></i>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <section className="haldi-section haldi-photos-coming">
          <div className="haldi-section-header">
            <h2 className="haldi-section-title">Photo Gallery</h2>
            <div className="haldi-ornate-divider"></div>
          </div>
          <div className="photos-coming-soon">
            <div className="coming-soon-icon">🌼</div>
            <h3>Photos Coming Soon</h3>
            <p>Beautiful Haldi moments will be added here shortly. Stay tuned!</p>
          </div>
        </section>
      )}

      {/* ── Lightbox ── */}
      {lightbox && (
        <div className="haldi-lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <i className="fas fa-times"></i>
            </button>
            {lightbox.type === 'video' ? (
              <video
                src={lightbox.src}
                controls
                autoPlay
                className="lightbox-media"
              />
            ) : (
              <img src={lightbox.src} alt={lightbox.title} className="lightbox-media" />
            )}
            {lightbox.title && (
              <p className="lightbox-caption">{lightbox.title}</p>
            )}
            {(lightbox.type === 'video' ? videos : photos).length > 1 && (
              <div className="lightbox-nav">
                <button onClick={() => navigateLightbox(-1)}>
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button onClick={() => navigateLightbox(1)}>
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Haldi;
