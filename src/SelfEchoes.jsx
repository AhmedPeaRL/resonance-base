import React, { useEffect } from 'react';
import './SelfEcho.css';

function SelfEchoes() {
  useEffect(() => {
    let lastEcho = Date.now();

    const handleMouseMove = (e) => {
      const now = Date.now();
      const delta = now - lastEcho;

      if (delta < 300) return; // echo every 300ms for subtle effect

      lastEcho = now;

      const echo = document.createElement('div');
      echo.className = 'self-echo';
      echo.style.left = `${e.clientX}px`;
      echo.style.top = `${e.clientY}px`;
      document.body.appendChild(echo);

      setTimeout(() => echo.remove(), 2000); // remove after animation
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return null;
}

export default SelfEchoes;
