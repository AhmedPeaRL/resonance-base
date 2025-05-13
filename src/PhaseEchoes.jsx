import React, { useEffect } from 'react';
import './PhaseEcho.css';

function PhaseEchoes() {
  useEffect(() => {
    let lastTime = Date.now();

    const handleMouseMove = (e) => {
      const now = Date.now();
      const delta = now - lastTime;

      // Dynamic delay based on movement speed
      if (delta < 50) return; // Skip very fast updates

      lastTime = now;

      const echo = document.createElement('div');
      echo.className = 'phase-echo';
      echo.style.left = `${e.clientX + (Math.random() * 10 - 5)}px`;
      echo.style.top = `${e.clientY + (Math.random() * 10 - 5)}px`;
      document.body.appendChild(echo);

      setTimeout(() => {
        echo.remove();
      }, 1200); // After animation ends
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return null;
}

export default PhaseEchoes;
