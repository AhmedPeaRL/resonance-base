import React, { useEffect, useState } from "react";
import "./PhaseSelfReflection.css";

function PhaseSelfReflection({ resonanceLevel, stillnessFactor }) {
  const [reflections, setReflections] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const reflection = {
        id: Date.now(),
        intensity: resonanceLevel,
        stillness: stillnessFactor,
        x: window.innerWidth / 2 + (Math.random() * 150 - 75),
        y: window.innerHeight / 2 + (Math.random() * 150 - 75),
      };

      setReflections((prev) => [...prev, reflection]);

      setTimeout(() => {
        setReflections((prev) => prev.filter((r) => r.id !== reflection.id));
      }, 5000);
    }, 3000);

    return () => clearInterval(interval);
  }, [resonanceLevel, stillnessFactor]);

  return (
    <>
      {reflections.map((r) => (
        <div
          key={r.id}
          className="self-reflection"
          style={{
            left: r.x,
            top: r.y,
            transform: `translate(-50%, -50%) scale(${1 + r.stillness})`,
            opacity: 0.3 + r.intensity * 0.15,
          }}
        ></div>
      ))}
    </>
  );
}

export default PhaseSelfReflection;
