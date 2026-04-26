import React, { useState, useEffect, useCallback, useRef } from 'react';
import './FloatingHearts.css';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);
  const throttleRef = useRef(false);

  // Colors adapted from the UI theme (Gold, Deep Red, Lighter Red)
  const colors = ['var(--gold)', 'var(--primary-red)', '#a63f5e', '#CFB076', '#8a1c29'];

  const spawnHearts = useCallback(() => {
    // Spawn 1 to 3 hearts per trigger for a "boom" effect
    const numHearts = Math.floor(Math.random() * 3) + 1;
    const newHearts = [];
    const now = Date.now();

    for (let i = 0; i < numHearts; i++) {
      newHearts.push({
        id: `${now}-${Math.random()}`,
        x: Math.random() * 100, // viewport width percentage
        size: Math.random() * 15 + 12, // size between 12px and 27px
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 2 + 2.5, // 2.5s to 4.5s float time
        delay: Math.random() * 0.2 // slight staggered start
      });
    }

    setHearts((prev) => [...prev, ...newHearts]);

    // Clean up hearts after they float away to prevent memory leaks
    setTimeout(() => {
      setHearts((prev) => prev.filter(h => !newHearts.find(nh => nh.id === h.id)));
    }, 5000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!throttleRef.current) {
        spawnHearts();
        throttleRef.current = true;
        // Limit the spawn rate so it doesn't overwhelm the browser
        setTimeout(() => {
          throttleRef.current = false;
        }, 100); 
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [spawnHearts]);

  return (
    <div className="floating-hearts-container">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.x}vw`,
            color: heart.color,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`
          }}
        >
          <i className="fas fa-heart"></i>
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
