import React, { useEffect, useState } from "react";
import "./FieldMemory.css";

function FieldMemory({ resonanceLevel, stillnessFactor }) {
  const [memoryRipples, setMemoryRipples] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const ripple = {
        id: Date.now(),
        strength: resonanceLevel * stillnessFactor,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      };
      setMemoryRipples((prev) => [...prev, ripple]);

      setTimeout(() => {
        setMemoryRipples((prev) => prev.filter((r) => r.id !== ripple.id));
      }, 4000); // ripple exists for 4s
    }, 3000); // new ripple every 3s (dynamic rhythm)

    return () => clearInterval(interval);
  }, [resonanceLevel, stillnessFactor]);

  return (
    <>
      {memoryRipples.map((ripple) => (
        <div
          key={ripple.id}
          className="field-memory"
          style={{
            left: ripple.x,
            top: ripple.y,
            opacity: r.style.opacity,
            transform: `translate(-50%, -50%) scale(${0.5 + ripple.strength})`,
          }}
        ></div>
      ))}
    </>
  );
}

export default FieldMemory;
