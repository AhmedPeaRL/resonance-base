import React, { useEffect } from 'react';
import './SelfEcho.css';

function SelfEchoes() {
  useEffect(() => {
    let lastEcho = Date.now();

    const handleMouseMove = (e) => {
  const now = Date.now();
  const delta = now - lastEcho;

  const dynamicDelay = Math.max(150, 600 - Math.abs(e.movementX + e.movementY));

  if (delta < dynamicDelay) return;

  lastEcho = now;

  const echo = document.createElement('div');
  echo.className = 'self-echo';
  echo.style.left = `${e.clientX}px`;
  echo.style.top = `${e.clientY}px`;
  document.body.appendChild(echo);

  setTimeout(() => echo.remove(), 2000);
};

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return null;
}

export default SelfEchoes;
