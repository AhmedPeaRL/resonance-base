import React, { useEffect, useRef } from "react";
import "./FloatingOrbs.css";

const NUM_ORBS = 14;

function FloatingOrbs() {
  const containerRef = useRef(null);

  useEffect(() => {
    const orbs = Array.from(containerRef.current.children);
    const animate = () => {
      orbs.forEach((orb, i) => {
        const speed = 0.5 + i * 0.03;
        const angle = (Date.now() / 1000) * speed + i;
        const x = Math.sin(angle) * 20;
        const y = Math.cos(angle) * 20;
        orb.style.transform = `translate(${x}px, ${y}px)`;
      });
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div className="floating-orbs-container" ref={containerRef}>
      {Array.from({ length: NUM_ORBS }).map((_, i) => (
        <div key={i} className="floating-orb" />
      ))}
    </div>
  );
}

export default FloatingOrbs;
