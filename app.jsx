import React, { useState, useEffect } from "react";
import FloatingOrbs from "./FloatingOrbs";
import GlowTrail from "./GlowTrail";
import "./App.css";
import "./PulseEffect.css";
import "./EchoParticles.css";
import "./FeedbackResonance.css";
import { useRef } from "react";
import "./BreathingLoop.css";
import FieldDistortion from "./FieldDistortion";
import PhaseEchoes from "./PhaseEchoes";
import useBreathRhythm from './useBreathRhythm';
import './CoherenceBreath.css';

function App() {
 const breathDuration = useBreathRhythm();
 const [resonanceLevel, setResonanceLevel] = useState(0);
const bgRef = useRef(null);

useEffect(() => {
  const handleMouseMove = (e) => {
    const intensity = Math.min(
      4,
      Math.floor((e.clientX / window.innerWidth) * 5)
    );
    setResonanceLevel(intensity);

    // Particle Effect
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = `${e.clientX + (Math.random() * 40 - 20)}px`;
    particle.style.top = `${e.clientY + (Math.random() * 40 - 20)}px`;
    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 1000);

    // === Feedback Resonance Effect ===
    if (bgRef.current) {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);

      const maxDist = Math.hypot(centerX, centerY);
      const proximity = 1 - dist / maxDist; // 0 (far) to 1 (centered)

      if (proximity > 0.7) {
        bgRef.current.classList.add("feedback-deep");
      } else {
        bgRef.current.classList.remove("feedback-deep");
      }
    }
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

  // ✅ Play Chime Sound via existing <audio>
  const chime = document.getElementById("chime-sound");
  if (chime) {
    chime.currentTime = 0;
    chime.volume = 0.3;
    chime.play().catch(err => console.log("Chime play error:", err));
  }
};


  return (
   <div
  ref={bgRef}
  onClick={handleClick}
  className={`background feedback-active coherence-breath resonance-${resonanceLevel}`}
  style={{
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    background: "#0a0a0a",
    cursor: "pointer",
    position: "relative",
    animationDuration: `${breathDuration}s`, // 🟢 هنا السحر
  }}
>

      <FieldDistortion />
      <PhaseEchoes />
      <FloatingOrbs />
      <GlowTrail />

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
