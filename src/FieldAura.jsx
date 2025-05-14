import React, { useEffect, useRef } from "react";
import "./FieldAura.css";

const FieldAura = ({ resonanceLevel, stillnessFactor }) => {
  const auraRef = useRef(null);

  useEffect(() => {
    if (auraRef.current) {
      auraRef.current.style.opacity = `${0.2 + resonanceLevel * 0.15}`;
      auraRef.current.style.transform = `scale(${1 + stillnessFactor * 0.5})`;
    }
  }, [resonanceLevel, stillnessFactor]);

  return <div ref={auraRef} className="field-aura" />;
};

export default FieldAura;
