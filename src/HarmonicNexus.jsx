import React, { useEffect, useRef } from "react";
import "./HarmonicNexus.css";

const HarmonicNexus = ({ resonanceLevel, stillnessFactor }) => {
  const nexusRef = useRef(null);

  useEffect(() => {
    if (nexusRef.current) {
      nexusRef.current.style.opacity = `${0.2 + stillnessFactor * 0.8}`;
      nexusRef.current.style.transform = `scale(${1 + resonanceLevel * 0.1})`;
    }
  }, [resonanceLevel, stillnessFactor]);

  return <div ref={nexusRef} className="harmonic-nexus"></div>;
};

export default HarmonicNexus;
