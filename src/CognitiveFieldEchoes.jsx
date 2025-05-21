import React, { useRef, useEffect } from "react";
import "./CognitiveFieldEchoes.css";

export default function CognitiveFieldEchoes({ stillnessFactor }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const opacity = stillnessFactor * 0.6;
      const scale = 1 + stillnessFactor * 0.3;
      ref.current.style.opacity = opacity.toFixed(2);
      ref.current.style.transform = `scale(${scale})`;
    }
  }, [stillnessFactor]);

  return <div ref={ref} className="cognitive-echoes" />;
}
