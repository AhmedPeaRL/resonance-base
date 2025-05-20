import React, { useRef, useEffect } from "react";
import "./HarmonicNexus.css";

export default function HarmonicNexus({ resonanceLevel, stillnessFactor, fps }) {
  const nexusRef = useRef(null);

  useEffect(() => {
    if (nexusRef.current) {
      const intensity = Math.round((resonanceLevel + stillnessFactor * 4) * 10);
      nexusRef.current.style.opacity = (0.2 + stillnessFactor * 0.6).toFixed(2);
      nexusRef.current.style.filter = `blur(${2 - stillnessFactor}px) brightness(${0.8 + resonanceLevel * 0.05})`;
      nexusRef.current.style.transform = `scale(${0.8 + stillnessFactor * 0.3}) rotate(${fps}deg)`;
    }
  }, [resonanceLevel, stillnessFactor, fps]);

  return <div ref={nexusRef} className="harmonic-nexus" />;
}
