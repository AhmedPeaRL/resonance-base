import React, { useEffect, useRef } from "react";
import "./NeuralBlooming.css";

export default function NeuralBlooming({ resonanceLevel, stillnessFactor }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const scale = 0.8 + resonanceLevel * 0.1 + stillnessFactor * 0.2;
      const opacity = 0.1 + stillnessFactor * 0.7;
      ref.current.style.transform = `scale(${scale})`;
      ref.current.style.opacity = opacity.toFixed(2);
    }
  }, [resonanceLevel, stillnessFactor]);

  return <div ref={ref} className="neural-blooming" />;
}
