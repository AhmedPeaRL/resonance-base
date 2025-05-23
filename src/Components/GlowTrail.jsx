import React, { useEffect } from "react";
import "./GlowTrail.css";

function GlowTrail() {
  useEffect(() => {
    const trail = document.createElement("div");
    trail.className = "glow-trail";
    document.body.appendChild(trail);

    const moveTrail = (e) => {
      trail.style.left = `${e.clientX}px`;
      trail.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveTrail);

    return () => {
      window.removeEventListener("mousemove", moveTrail);
      trail.remove();
    };
  }, []);

  return null;
}

export default GlowTrail;
