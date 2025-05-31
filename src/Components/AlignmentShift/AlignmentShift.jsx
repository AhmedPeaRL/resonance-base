import React, { useEffect, useState } from 'react';
import './AlignmentShift.css';

const AlignmentShift = ({ breathDuration, stillnessFactor }) => {
  const [animationDuration, setAnimationDuration] = useState(10);

  useEffect(() => {
    const base = 10;
    const modulated = base * (1 + stillnessFactor * 0.5);
    setAnimationDuration(modulated);
  }, [stillnessFactor]);

  return (
    <div
      className="alignment-shift"
      style={{
        animationDuration: `${animationDuration}s`
      }}
    ></div>
  );
};

export default AlignmentShift;
