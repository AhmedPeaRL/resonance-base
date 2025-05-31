import React, { useEffect, useState } from "react";
import "./EssenceStream.css";

const EssenceStream = ({ resonanceLevel, breathDuration }) => {
  const [flowPhase, setFlowPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlowPhase((prev) => (prev + 1) % 100);
    }, breathDuration * 100);

    return () => clearInterval(interval);
  }, [breathDuration]);

  const opacity = 0.05 + resonanceLevel * 0.1;
  const gradientPos = `${flowPhase}%`;

  return (
    <div
      className="essence-stream"
      style={{
        background: `radial-gradient(circle at ${gradientPos} center, rgba(0, 255, 200, ${opacity}), transparent 60%)`,
      }}
    />
  );
};

export default EssenceStream;
