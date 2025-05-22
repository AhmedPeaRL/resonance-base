
import React, { useEffect } from "react";
import "./FloatingOrbs.css";

const FloatingOrbs = () => {
  useEffect(() => {
    const orbs = document.querySelectorAll(".orb");
    orbs.forEach((orb, i) => {
      const duration = 10 + Math.random() * 20;
      orb.style.animationDuration = `${duration}s`;
      orb.style.left = `${Math.random() * 100}%`;
      orb.style.top = `${Math.random() * 100}%`;
    });
  }, []);

  return (
    <>
      {[...Array(7)].map((_, i) => (
        <div key={i} className="orb" />
      ))}
    </>
  );
};

export default FloatingOrbs;
