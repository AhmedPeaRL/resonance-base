import React, { useEffect, useState } from 'react';
import './FieldDistortion.css';

function FieldDistortion() {
  const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div
        className="distortion-ring"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      ></div>

      <div
        className="core-pulse"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      ></div>
    </>
  );
}

export default FieldDistortion;
