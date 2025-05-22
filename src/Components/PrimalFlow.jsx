import React, { useEffect, useRef } from "react";
import "./PrimalFlow.css";

export default function PrimalFlow({ resonanceLevel, stillnessFactor }) {
  const flowRef = useRef(null);

  useEffect(() => {
    if (flowRef.current) {
      flowRef.current.style.opacity = 0.1 + resonanceLevel * 0.15;
      flowRef.current.style.filter = `blur(${10 + stillnessFactor * 40}px)`;
      flowRef.current.style.animationDuration = `${10 - resonanceLevel * 1.5 + stillnessFactor * 5}s`;
    }
  }, [resonanceLevel, stillnessFactor]);

  return <div className="primal-flow" ref={flowRef}></div>;
}
