import React, { useEffect, useState } from "react";
import "./SynchronyVeil.css";

const SynchronyVeil = ({ resonanceLevel, stillnessFactor }) => {
  const [veilRipples, setVeilRipples] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const ripple = {
        id: Date.now(),
        scale: 1 + stillnessFactor * 1.5,
        opacity: 0.15 + resonanceLevel * 0.05,
        x: window.innerWidth / 2 + (Math.random() * 120 - 60),
        y: window.innerHeight / 2 + (Math.random() * 120 - 60),
      };
      setVeilRipples((prev) => [...prev.slice(-10), ripple]);
    }, 3500 - stillnessFactor * 2000);

    return () => clearInterval(interval);
  }, [resonanceLevel, stillnessFactor]);

  return (
    <>
      {veilRipples.map((ripple) => (
        <div
          key={ripple.id}
          className="veil-ripple"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            transform: `scale(${ripple.scale})`,
            opacity: ripple.opacity,
          }}
        />
      ))}
    </>
  );
};

export default SynchronyVeil;
