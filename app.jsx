import React, { useState, useEffect, useRef } from "react";
import useFPS from "./useFPS";

import FloatingOrbs from "./FloatingOrbs";
import GlowTrail from "./GlowTrail";
import CoreFieldPulse from "./CoreFieldPulse";
import FieldAura from "./FieldAura";
import EssenceStream from "./EssenceStream";
// باقي imports كالمعتاد...

import "./App.css";

function App() {
  const breathDuration = 6;
  const fps = useFPS();

  const [resonanceLevel, setResonanceLevel] = useState(0);
  const [stillnessFactor, setStillnessFactor] = useState(0);
  const bgRef = useRef(null);

  const isLowFPS = fps < 30;
  const isCriticalFPS = fps < 20;

  useEffect(() => {
    let lastMove = Date.now();

    const handleMouseMove = (e) => {
      const intensity = Math.min(4, Math.floor((e.clientX / window.innerWidth) * 5));
      setResonanceLevel(intensity);
      lastMove = Date.now();

      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = `${e.clientX + (Math.random() * 40 - 20)}px`;
      particle.style.top = `${e.clientY + (Math.random() * 40 - 20)}px`;
      document.body.appendChild(particle);
      setTimeout(() => particle.remove(), 1000);

      if (bgRef.current) {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);
        const maxDist = Math.hypot(centerX, centerY);
        const proximity = 1 - dist / maxDist;

        if (proximity > 0.7) {
          bgRef.current.classList.add("feedback-deep");
        } else {
          bgRef.current.classList.remove("feedback-deep");
        }
      }
    };

    const stillnessInterval = setInterval(() => {
      const delta = (Date.now() - lastMove) / 5000;
      setStillnessFactor(Math.min(delta, 1));
    }, 1000);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(stillnessInterval);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleClick = (e) => {
    const pulse = document.createElement("div");
    pulse.className = "pulse";
    pulse.style.left = `${e.clientX}px`;
    pulse.style.top = `${e.clientY}px`;
    document.body.appendChild(pulse);
    setTimeout(() => pulse.remove(), 800);

    const chime = document.getElementById("chime-sound");
    if (chime) {
      chime.currentTime = 0;
      chime.volume = 0.3;
      chime.play().catch((err) => console.log("Chime play error:", err));
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
        animation: `breathFlow ${breathDuration}s ease-in-out infinite`,
      }}
    >
      {/* Dynamic Layer Control */}
      {!isCriticalFPS && <FieldAura />}
      {!isLowFPS && <EssenceStream />}
      <CoreFieldPulse />

      {/* ثابتين مهما كان */}
      <FloatingOrbs />
      <GlowTrail />

      {/* Main UI */}
      <div className="container dynamic-glow">
        <h1 className="title">Resonance Base</h1>
        <p className="subtitle">Let your presence shape the space — harmonize in real-time.</p>
        <audio
          id="resonance-audio"
          src="https://cdn.pixabay.com/audio/2022/03/15/audio_3fd51f929c.mp3"
          autoPlay
          loop
        />
        <audio
          id="chime-sound"
          src="https://cdn.pixabay.com/download/audio/2023/01/30/audio_bf9e49dcbc.mp3?filename=soft-chime-136769.mp3"
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

      {/* Debug FPS overlay */}
      <div style={{ position: 'fixed', bottom: 10, left: 10, color: '#0ff', fontSize: '14px', opacity: 0.7 }}>
        FPS: {fps}
      </div>
    </div>
  );
}

export default App;
