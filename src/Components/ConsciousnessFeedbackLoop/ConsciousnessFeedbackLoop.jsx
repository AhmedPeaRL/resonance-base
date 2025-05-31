import React, { useEffect, useState } from "react";
import "./ConsciousnessFeedbackLoop.css";

const ConsciousnessFeedbackLoop = ({ resonanceLevel, stillnessFactor }) => {
  const [feedbackRipples, setFeedbackRipples] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const ripple = {
        id: Date.now(),
        scale: 1 + resonanceLevel * 0.3,
        opacity: 0.3 + stillnessFactor * 0.7,
        x: window.innerWidth / 2 + (Math.random() * 60 - 30),
        y: window.innerHeight / 2 + (Math.random() * 60 - 30),
      };
      setFeedbackRipples((prev) => [...prev.slice(-15), ripple]);
    }, 2500 - resonanceLevel * 400);

    return () => clearInterval(interval);
  }, [resonanceLevel, stillnessFactor]);

  return (
    <>
      {feedbackRipples.map((ripple) => (
        <div
          key={ripple.id}
          className="feedback-ripple"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            transform: `scale(${ripple.scale})`,
            opacity: ripple.opacity,
          }}
        />
      ))}
    </>
  );
};

export default ConsciousnessFeedbackLoop;
