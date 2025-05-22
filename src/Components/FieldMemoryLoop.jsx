import React, { useEffect, useState } from "react";
import "./FieldMemoryLoop.css";

const FieldMemoryLoop = ({ resonanceLevel, stillnessFactor }) => {
  const [memoryTraces, setMemoryTraces] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const trace = {
        id: Date.now(),
        intensity: resonanceLevel,
        opacity: stillnessFactor,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      };

      setMemoryTraces((prev) => [...prev.slice(-20), trace]);
    }, 2000 - stillnessFactor * 1500);

    return () => clearInterval(interval);
  }, [resonanceLevel, stillnessFactor]);

  return (
    <>
      {memoryTraces.map((trace) => (
        <div
          key={trace.id}
          className="memory-trace"
          style={{
            left: `${trace.x}px`,
            top: `${trace.y}px`,
            opacity: trace.opacity,
            transform: `scale(${1 + trace.intensity * 0.5})`,
          }}
        />
      ))}
    </>
  );
};

export default FieldMemoryLoop;
