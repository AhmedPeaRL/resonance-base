import React, { useEffect, useState } from "react";
import "./FieldConsciousness.css";

function FieldConsciousness({ resonanceLevel, stillnessFactor }) {
  const [consciousRipples, setConsciousRipples] = useState([]);

  useEffect(() => {
    if (stillnessFactor > 0.5) {
      const interval = setInterval(() => {
        const ripple = {
          id: Date.now(),
          intensity: resonanceLevel * stillnessFactor,
          x: window.innerWidth / 2 + (Math.random() * 200 - 100),
          y: window.innerHeight / 2 + (Math.random() * 200 - 100),
        };
        setConsciousRipples((prev) => [...prev, ripple]);

        setTimeout(() => {
          setConsciousRipples((prev) => prev.filter((r) => r.id !== ripple.id));
        }, 6000);
      }, 5000 - stillnessFactor * 3000);

      return () => clearInterval(interval);
    }
  }, [resonanceLevel, stillnessFactor]);

  return (
    <>
      {consciousRipples.map((ripple) => (
        <div
          key={ripple.id}
          className="conscious-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: `translate(-50%, -50%) scale(${0.8 + ripple.intensity})`,
          }}
        ></div>
      ))}
    </>
  );
}

export default FieldConsciousness;
