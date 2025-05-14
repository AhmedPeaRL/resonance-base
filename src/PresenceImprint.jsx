import React, { useEffect, useState } from "react";
import "./PresenceImprint.css";

function PresenceImprint({ resonanceLevel, stillnessFactor }) {
  const [imprints, setImprints] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const newImprint = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
        size: 100 + resonanceLevel * 50,
      };
      setImprints((prev) => [...prev, newImprint]);

      setTimeout(() => {
        setImprints((prev) => prev.filter((imp) => imp.id !== newImprint.id));
      }, 3000); // imprint stays 3s
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [resonanceLevel]);

  return (
    <>
      {imprints.map((imp) => (
        <div
          key={imp.id}
          className="presence-imprint"
          style={{
            left: imp.x,
            top: imp.y,
            width: `${imp.size}px`,
            height: `${imp.size}px`,
            opacity: stillnessFactor * 0.6,
          }}
        ></div>
      ))}
    </>
  );
}

export default PresenceImprint;
