// src/CoreSynchrony.jsx
import React, { useEffect, useState } from "react";
import "./CoreSynchrony.css";

function CoreSynchrony({ proximity, stillnessFactor }) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const newScale = 1 + proximity * 0.5 + stillnessFactor * 0.3;
    setScale(newScale);
  }, [proximity, stillnessFactor]);

  return (
    <div
      className="core-synchrony"
      style={{
        transform: `scale(${scale})`,
        opacity: 0.3 + proximity * 0.5,
        filter: `blur(${(1 - proximity) * 10}px)`,
      }}
    ></div>
  );
}

export default CoreSynchrony;
