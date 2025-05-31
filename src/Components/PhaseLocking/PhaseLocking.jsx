import React, { useEffect, useState } from "react";
import "./PhaseLocking.css";

function PhaseLocking({ resonanceLevel, stillnessFactor }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const delta = 0.01 + stillnessFactor * 0.02;
      setPhase((prev) => (prev + delta) % 1);
    }, 50);

    return () => clearInterval(interval);
  }, [stillnessFactor]);

  return (
    <div
      className="phase-lock-overlay"
      style={{
        opacity: stillnessFactor * 0.3,
        transform: `rotate(${phase * 360}deg) scale(${1 + resonanceLevel * 0.05})`,
      }}
    ></div>
  );
}

export default PhaseLocking;
