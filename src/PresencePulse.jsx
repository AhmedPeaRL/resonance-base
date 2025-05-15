import React, { useEffect, useRef } from "react";
import "./PresencePulse.css";

export default function PresencePulse({ breathDuration, resonanceLevel }) {
  const pulseRef = useRef(null);

  useEffect(() => {
    if (pulseRef.current) {
      pulseRef.current.style.animationDuration = `${breathDuration / (1 + resonanceLevel * 0.3)}s`;
      pulseRef.current.style.opacity = `${0.03 + resonanceLevel * 0.05}`;
      pulseRef.current.style.transform = `scale(${1 + resonanceLevel * 0.1})`;
    }
  }, [breathDuration, resonanceLevel]);

  return <div ref={pulseRef} className="presence-pulse" />;
}
