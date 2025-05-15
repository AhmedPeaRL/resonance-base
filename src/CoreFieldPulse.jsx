import React, { useEffect, useState } from "react";
import "./CoreFieldPulse.css";

const CoreFieldPulse = ({ resonanceLevel, stillnessFactor }) => {
  const [pulses, setPulses] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const pulse = {
        id: Date.now(),
        scale: 0.8 + resonanceLevel * 0.2,
        opacity: 0.3 + stillnessFactor * 0.6,
      };
      setPulses((prev) => [...prev.slice(-10), pulse]);
    }, 3000 - stillnessFactor * 2000);

    return () => clearInterval(interval);
  }, [resonanceLevel, stillnessFactor]);

  return (
    <>
      {pulses.map((p) => (
        <div
          key={p.id}
          className="core-field-pulse"
          style={{
            transform: `scale(${p.scale})`,
            opacity: p.opacity,
          }}
        />
      ))}
    </>
  );
};

export default CoreFieldPulse;
