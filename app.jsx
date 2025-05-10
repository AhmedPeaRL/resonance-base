import React, { useState, useEffect } from "react";
import FloatingOrbs from "./FloatingOrbs";
import "./App.css";
import "./PulseEffect.css";
import "./EchoParticles.css"; //

function App() {
  const [resonanceLevel, setResonanceLevel] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const intensity = Math.min(
        4,
        Math.floor((e.clientX / window.innerWidth) * 5)
      );
      setResonanceLevel(intensity);

      // === Echo Particle ===
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = `${e.clientX + (Math.random() * 40 - 20)}px`;
      particle.style.top = `${e.clientY + (Math.random() * 40 - 20)}px`;
      document.body.appendChild(particle);
      setTimeout(() => {
        particle.remove();
      }, 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleClick = (e) => {
    const pulse = document.createElement("div");
    pulse.className = "pulse";
    pulse.style.left = `${e.clientX}px`;
    pulse.style.top = `${e.clientY}px`;
    document.body.appendChild(pulse);

    setTimeout(() => {
      pulse.remove();
    }, 800);
  };

  return (
    <div
 onClick={handleClick}
      className={`background resonance-${resonanceLevel}`}
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "#0a0a0a",
        cursor: "pointer",
      }}
    >
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
      return (
  <div
    onClick={handleClick}
    className={`background resonance-${resonanceLevel}`}
    style={{
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      background: "#0a0a0a",
      cursor: "pointer",
      position: "relative",
    }}
  >
    <FloatingOrbs
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
