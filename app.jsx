import React, { useState, useEffect, useRef } from "react";
import FloatingOrbs from "./FloatingOrbs";
import GlowTrail from "./GlowTrail";
import FieldDistortion from "./FieldDistortion";
import PhaseEchoes from "./PhaseEchoes";
import CoreHarmonics from "./CoreHarmonics";
import SelfEchoes from "./SelfEchoes";
import FieldBreach from "./FieldBreach";
import ConsciousnessGlimmer from "./ConsciousnessGlimmer";
import SilentIntention from "./SilentIntention";
import AlignmentShift from "./AlignmentShift";
import WhisperFlow from "./WhisperFlow";
import useBreathRhythm from "./useBreathRhythm";
import CoreSynchrony from "./CoreSynchrony";
import "./CoreSynchrony.css";
import HarmonicBinding from "./HarmonicBinding";
import "./HarmonicBinding.css";
import PhaseLocking from "./PhaseLocking";
import "./PhaseLocking.css";
import PresenceImprint from "./PresenceImprint";
import "./PresenceImprint.css";
import FieldMemory from "./FieldMemory";
import "./FieldMemory.css";
import FieldConsciousness from "./FieldConsciousness";
import "./FieldConsciousness.css";

import "./App.css";
import "./PulseEffect.css";
import "./EchoParticles.css";
import "./FeedbackResonance.css";
import "./BreathingLoop.css";
import "./CoherenceBreath.css";

function App() {
  const breathDuration = useBreathRhythm();
  const [resonanceLevel, setResonanceLevel] = useState(0);
  const [stillnessFactor, setStillnessFactor] = useState(0);
  const bgRef = useRef(null);

  // === Mouse Movement Resonance ===
  useEffect(() => {
    const handleMouseMove = (e) => {
      const intensity = Math.min(4, Math.floor((e.clientX / window.innerWidth) * 5));
      setResonanceLevel(intensity);

      // Particle Effect
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = `${e.clientX + (Math.random() * 40 - 20)}px`;
      particle.style.top = `${e.clientY + (Math.random() * 40 - 20)}px`;
      document.body.appendChild(particle);
      setTimeout(() => particle.remove(), 1000);

      // Feedback Resonance Proximity
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

      // Reset stillness on move
      lastMoveTime = Date.now();
    };

    let lastMoveTime = Date.now();

    const stillnessInterval = setInterval(() => {
      const delta = (Date.now() - lastMoveTime) / 5000;
      setStillnessFactor(Math.min(delta, 1));
    }, 1000);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(stillnessInterval);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // === Pulse Click Effect + Chime ===
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
    <HarmonicBinding
  resonanceLevel={resonanceLevel}
  stillnessFactor={stillnessFactor}
/>
 <CoreSynchrony
  proximity={resonanceLevel / 4}
  stillnessFactor={stillnessFactor}
/>
 <AlignmentShift breathDuration={breathDuration} stillnessFactor={stillnessFactor} />
      <FieldBreach />
      <SilentIntention />
      <ConsciousnessGlimmer />
      <SelfEchoes />
      <CoreHarmonics />
      <FieldDistortion />
      <PhaseEchoes />
      <FloatingOrbs />
      <GlowTrail />
      <PhaseLocking
  resonanceLevel={resonanceLevel}
  stillnessFactor={stillnessFactor}
/>
     <PresenceImprint
  resonanceLevel={resonanceLevel}
  stillnessFactor={stillnessFactor}
/>
    <FieldMemory
  resonanceLevel={resonanceLevel}
  stillnessFactor={stillnessFactor}
/>
    <FieldConsciousness
  resonanceLevel={resonanceLevel}
  stillnessFactor={stillnessFactor}
/>

      {/* 🟢 همسة التشافي */}
      {stillnessFactor >= 0.9 && <WhisperFlow />}

      <div className="container dynamic-glow">
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
    </div>
  );
}

export default App;
