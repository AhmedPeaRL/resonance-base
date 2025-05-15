import React, { useEffect, useState } from "react";
import "./PresenceInfusion.css";

const PresenceInfusion = ({ resonanceLevel, stillnessFactor }) => {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((prev) => (prev + 1) % 100);
    }, 50 + (1 - stillnessFactor) * 200);

    return () => clearInterval(interval);
  }, [stillnessFactor]);

  const opacity = 0.1 + resonanceLevel * 0.1 + stillnessFactor * 0.3;
  const scale = 1 + (pulse / 100) * 0.05;

  return (
    <div
      className="presence-infusion"
      style={{
        opacity,
        transform: `scale(${scale})`,
      }}
    />
  );
};

export default PresenceInfusion;
