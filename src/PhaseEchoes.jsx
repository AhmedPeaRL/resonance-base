import React, { useEffect } from 'react';
import './PhaseEcho.css';

function PhaseEchoes() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const echo = document.createElement('div');
      echo.className = 'phase-echo';
      echo.style.left = `${e.clientX + (Math.random() * 20 - 10)}px`;
      echo.style.top = `${e.clientY + (Math.random() * 20 - 10)}px`;
      document.body.appendChild(echo);

      setTimeout(() => {
        echo.remove();
      }, 1200); // بعد انتهاء الأنيميشن
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return null;
}

export default PhaseEchoes;
