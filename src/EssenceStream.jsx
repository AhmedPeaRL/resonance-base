import React, { useEffect, useState } from "react";
import "./EssenceStream.css";

const EssenceStream = ({ resonanceLevel, stillnessFactor }) => {
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const stream = {
        id: Date.now(),
        scale: 0.8 + resonanceLevel * 0.1 + stillnessFactor * 0.5,
        opacity: 0.3 + stillnessFactor * 0.4,
        x: window.innerWidth / 2 + (Math.random() * 200 - 100),
        y: window.innerHeight / 2 + (Math.random() * 200 - 100),
        hue: Math.floor(180 + resonanceLevel * 30 + stillnessFactor * 60),
      };
      setStreams((prev) => [...prev.slice(-12), stream]);
    }, 1800 - stillnessFactor * 1200);

    return () => clearInterval(interval);
  }, [resonanceLevel, stillnessFactor]);

  return (
    <>
      {streams.map((s) => (
        <div
          key={s.id}
          className="essence-stream"
          style={{
            left: `${s.x}px`,
            top: `${s.y}px`,
            transform: `scale(${s.scale})`,
            opacity: s.opacity,
            filter: `hue-rotate(${s.hue}deg)`,
          }}
        />
      ))}
    </>
  );
};

export default EssenceStream;
