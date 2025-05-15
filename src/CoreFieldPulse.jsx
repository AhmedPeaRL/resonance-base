import React, { useEffect, useRef } from "react";
import "./CoreFieldPulse.css";

export default function CoreFieldPulse({ breathDuration, resonanceLevel, stillnessFactor }) {
  const pulseRef = useRef(null);

  useEffect(() => {
    if (pulseRef.current) {
      pulseRef.current.style.animationDuration = `${breathDuration * (1 + stillnessFactor)}s`;
      pulseRef.current.style.opacity = 0.2 + resonanceLevel * 0.2 + stillnessFactor * 0.4;
    }
  }, [breathDuration, resonanceLevel, stillnessFactor]);

  return (
    <div className="core-field-pulse" ref={pulseRef}></div>
  );
}
