import React, { useEffect, useState } from 'react';
import './FieldBreach.css';

const FieldBreach = () => {
  const [pos, setPos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setPos({ x, y });

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const dist = Math.hypot(x - centerX, y - centerY);

      const maxDist = Math.hypot(centerX, centerY);
      const proximity = 1 - dist / maxDist; // 0 to 1

      const dynamicScale = 1 + proximity * 1.5; // Expands up to 2.5x
      setScale(dynamicScale);
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div
      className="field-breach"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transform: `translate(-50%, -50%) scale(${scale})`,
        opacity: Math.min(0.15 + scale * 0.1, 0.3),
      }}
    ></div>
  );
};

export default FieldBreach;
