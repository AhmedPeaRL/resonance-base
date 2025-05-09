import React from 'react';
import './PulseEffect.css'; // ✅ تأكد إنك أضفته

function App() {
  const handleClick = (e) => {
    const pulse = document.createElement('div');
    pulse.className = 'pulse';
    pulse.style.left = `${e.clientX}px`;
    pulse.style.top = `${e.clientY}px`;
    document.body.appendChild(pulse);

    setTimeout(() => {
      pulse.remove();
    }, 800); // مدة الأنيميشن
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: '100vw',
        height: '100vh',
        background: '#0a0a0a',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
    </div>
  );
}

export default App;
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [resonanceLevel, setResonanceLevel] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const intensity = Math.min(
        4,
        Math.floor((e.clientX / window.innerWidth) * 5)
      );
      setResonanceLevel(intensity);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={`background resonance-${resonanceLevel}`}>
      <div className="container">
        <h1 className="title">Resonance Base</h1>
        <p className="subtitle">
          Let your presence shape the space — harmonize in real-time.
        </p>
        <audio
          id="resonance-audio"
          src="https://cdn.pixabay.com/audio/2022/03/15/audio_3fd51f929c.mp3"
          autoPlay
          loop
        />
        <button
          onClick={() => {
            const audio = document.getElementById("resonance-audio");
            if (audio.paused) {
              audio.play();
            } else {
              audio.pause();
            }
          }}
          className="sound-toggle"
        >
          🔊
        </button>
      </div>
    </div>
  );
}

export default App;
