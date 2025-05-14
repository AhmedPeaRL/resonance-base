import React, { useEffect, useRef } from 'react';
import './FieldConsciousnessFeedback.css';

const FieldConsciousnessFeedback = ({ resonanceLevel, stillnessFactor }) => {
  const feedbackRef = useRef(null);

  useEffect(() => {
    if (feedbackRef.current) {
      feedbackRef.current.style.setProperty('--resonance-intensity', resonanceLevel / 4);
      feedbackRef.current.style.setProperty('--stillness-factor', stillnessFactor);
    }
  }, [resonanceLevel, stillnessFactor]);

  return <div ref={feedbackRef} className="field-consciousness-feedback" />;
};

export default FieldConsciousnessFeedback;
