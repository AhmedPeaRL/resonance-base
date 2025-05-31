import React, { useEffect, useRef } from "react";
import "./HarmonicConvergence.css";

export default function HarmonicConvergence({ resonanceLevel, stillnessFactor }) {
  const netRef = useRef(null);

  useEffect(() => {
    if (netRef.current) {
      netRef.current.style.opacity = 0.05 + resonanceLevel * 0.1;
      netRef.current.style.filter = `blur(${5 + stillnessFactor * 30}px)`;
      netRef.current.style.animationDuration = `${20 - resonanceLevel * 3 + stillnessFactor * 10}s`;
    }
  }, [resonanceLevel, stillnessFactor]);

  return <div className="harmonic-net" ref={netRef}></div>;
}
