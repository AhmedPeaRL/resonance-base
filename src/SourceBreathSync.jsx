import React, { useEffect, useRef } from "react";
import "./SourceBreathSync.css";

export default function SourceBreathSync({ breathDuration, stillnessFactor }) {
  const syncRef = useRef(null);

  useEffect(() => {
    if (syncRef.current) {
      syncRef.current.style.animationDuration = `${breathDuration * (1 + stillnessFactor * 0.5)}s`;
      syncRef.current.style.opacity = 0.1 + stillnessFactor * 0.5;
    }
  }, [breathDuration, stillnessFactor]);

  return (
    <div className="source-breath-sync" ref={syncRef}></div>
  );
}
