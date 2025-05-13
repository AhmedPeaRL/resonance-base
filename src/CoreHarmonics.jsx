import React from 'react';
import './CoreHarmonics.css';

const CoreHarmonics = () => {
  return (
    <div className="core-harmonics" style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      zIndex: 0,
      background: 'radial-gradient(circle at center, rgba(0,255,180,0.1), transparent)',
    }}></div>
  );
};

export default CoreHarmonics;
