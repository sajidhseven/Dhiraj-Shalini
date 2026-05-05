import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InvitationVideo from './components/InvitationVideo';
import MeetTheCouple from './components/MeetTheCouple';
import WeddingVideo from './components/WeddingVideo';
import Events from './components/Events';
import LocationsAndStory from './components/LocationsAndStory';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import FloatingHearts from './components/FloatingHearts';
import Haldi from './components/Haldi';
import './App.css';

function HomePage() {
  useEffect(() => {
    // Simple Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          entry.target.style.opacity = 1;
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach((el) => {
      el.style.animationPlayState = 'paused';
      el.style.opacity = 0;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      <FloatingHearts />
      <Navbar />
      <Hero />
      <InvitationVideo />
      <MeetTheCouple />
      <WeddingVideo />
      <Events />
      <LocationsAndStory />
      <RSVP />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/haldi" element={<Haldi />} />
    </Routes>
  );
}

export default App;

