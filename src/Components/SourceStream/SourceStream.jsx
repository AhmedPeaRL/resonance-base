import React, { useEffect, useRef } from "react";
import "./SourceStream.css";

const SourceStream = ({ resonanceLevel, breathDuration }) => {
  const streamRef = useRef(null);

  useEffect(() => {
    if (streamRef.current) {
      streamRef.current.style.animationDuration = `${breathDuration * (1.5 - resonanceLevel * 0.1)}s`;
    }
  }, [breathDuration, resonanceLevel]);

  return <div ref={streamRef} className="source-stream" />;
};

export default SourceStream;
