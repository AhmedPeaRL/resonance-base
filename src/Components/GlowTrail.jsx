import React, { useEffect } from 'react';
import './GlowTrail.css';

function GlowTrail() {
  useEffect(() => {
    const handleMove = (e) => {
      const trail = document.createElement('div');
      trail.className = 'trail';
      trail.style.left = `${e.clientX}px`;
      trail.style.top = `${e.clientY}px`;
      document.body.appendChild(trail);

      setTimeout(() => {
        trail.remove();
      }, 1000); // اختفاء الذيل بعد ثانية
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return null;
}

export default GlowTrail;
