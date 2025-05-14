// src/HarmonicBinding.jsx
import React, { useEffect, useState } from "react";
import "./HarmonicBinding.css";

function HarmonicBinding({ resonanceLevel, stillnessFactor }) {
  const [bindings, setBindings] = useState([]);

  useEffect(() => {
    const newBinding = {
      id: Date.now(),
      strength: resonanceLevel * (0.5 + stillnessFactor * 0.5),
      decay: 0,
    };

    setBindings((prev) => [...prev, newBinding]);

    const interval = setInterval(() => {
      setBindings((prev) =>
        prev
          .map((b) => ({ ...b, decay: b.decay + 0.02 }))
          .filter((b) => b.decay < 1)
      );
    }, 100);

    return () => clearInterval(interval);
  }, [resonanceLevel, stillnessFactor]);

  return (
    <>
      {bindings.map((b) => (
        <div
          key={b.id}
          className="harmonic-binding"
          style={{
            opacity: 1 - b.decay,
            transform: `scale(${1 + b.strength * b.decay})`,
            filter: `blur(${b.decay * 10}px)`,
          }}
        ></div>
      ))}
    </>
  );
}

export default HarmonicBinding;
