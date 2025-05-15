import React, { useEffect, useState } from "react";
import "./SourceAlignment.css";

const SourceAlignment = ({ resonanceLevel, stillnessFactor }) => {
  const [alignmentPhase, setAlignmentPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAlignmentPhase((prev) => (prev + 1) % 360);
    }, 100 + (1 - stillnessFactor) * 300);

    return () => clearInterval(interval);
  }, [stillnessFactor]);

  const glowIntensity = 0.2 + resonanceLevel * 0.2 + stillnessFactor * 0.5;

  return (
    <div
      className="source-alignment"
      style={{
        background: `radial-gradient(circle at center, rgba(0, 255, 200, ${glowIntensity}) 0%, transparent 70%)`,
        transform: `rotate(${alignmentPhase}deg)`,
      }}
    />
  );
};

export default SourceAlignment;
