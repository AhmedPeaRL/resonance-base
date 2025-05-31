import React, { useEffect, useRef, useState } from "react";
import "./SelfMemoryLoop.css";

const SelfMemoryLoop = ({ stillnessFactor, resonanceLevel }) => {
  const containerRef = useRef(null);
  const [imprints, setImprints] = useState([]);

  useEffect(() => {
    if (stillnessFactor >= 0.7) {
      const newImprint = {
        id: Date.now(),
        size: 50 + resonanceLevel * 30 + Math.random() * 20,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: 0.2 + Math.random() * 0.3,
      };

      setImprints((prev) => [...prev.slice(-20), newImprint]); // ⬅️ حافظ على آخر 20 imprint بس
    }
  }, [stillnessFactor, resonanceLevel]);

  return (
    <div ref={containerRef} className="self-memory-container">
      {imprints.map((imprint) => (
        <div
          key={imprint.id}
          className="memory-imprint"
          style={{
            width: imprint.size,
            height: imprint.size,
            left: imprint.x,
            top: imprint.y,
            opacity: imprint.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default SelfMemoryLoop;
