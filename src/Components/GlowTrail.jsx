import React, { useEffect } from "react";
import "../styles/GlowTrail.css";

let trail = [];

const GlowTrail = () => {
  useEffect(() => {
    const createDot = (x, y) => {
      const dot = document.createElement("div");
      dot.className = "trail";
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      document.body.appendChild(dot);
      trail.push(dot);

      if (trail.length > 20) {
        const oldDot = trail.shift();
        if (oldDot) oldDot.remove();
      }

      setTimeout(() => {
        dot.remove();
        trail = trail.filter((d) => d !== dot);
      }, 800);
    };

    const handleMove = (e) => {
      createDot(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return null;
};

export default GlowTrail;
