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
import HarmonicBinding from "./HarmonicBinding";
import PhaseLocking from "./PhaseLocking";
import PresenceImprint from "./PresenceImprint";
import FieldMemory from "./FieldMemory";
import FieldConsciousness from "./FieldConsciousness";
import PhaseSelfReflection from "./PhaseSelfReflection";
import FieldAura from "./FieldAura";
import SelfMemoryLoop from "./SelfMemoryLoop";
import FieldConsciousnessFeedback from "./FieldConsciousnessFeedback";
import FieldMemoryLoop from "./FieldMemoryLoop";
import ConsciousnessFeedbackLoop from "./ConsciousnessFeedbackLoop";
import SynchronyVeil from "./SynchronyVeil";
import EssenceStream from "./EssenceStream";
import CoreFieldPulse from "./CoreFieldPulse";
import SourceAlignment from "./SourceAlignment";
import PresenceInfusion from "./PresenceInfusion";
import SourceBreathSync from "./SourceBreathSync";
import PrimalFlow from "./PrimalFlow";
import HarmonicConvergence from "./HarmonicConvergence";
import HoloLoop from "./HoloLoop";
import PresencePulse from "./PresencePulse";
import SourceStream from "./SourceStream";

import "./App.css";
import "./PulseEffect.css";
import "./EchoParticles.css";
import "./FeedbackResonance.css";
import "./BreathingLoop.css";
import "./CoherenceBreath.css";
import "./CoreSynchrony.css";
import "./HarmonicBinding.css";
import "./PhaseLocking.css";
import "./PresenceImprint.css";
import "./FieldMemory.css";
import "./FieldConsciousness.css";
import "./PhaseSelfReflection.css";
import "./FieldAura.css";
import "./SourceBreathSync.css";
import "./PrimalFlow.css";
import "./HarmonicConvergence.css";
import "./PresencePulse.css";
import "./SourceStream.css";

function App() {
  const isLowEndDevice = navigator.deviceMemory && navigator.deviceMemory < 4;

return (
  <>
    { !isLowEndDevice && <FieldAura /> }
    { !isLowEndDevice && <EssenceStream /> }
    <CoreFieldPulse />
  </>
);
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
      requestAnimationFrame(() => {
  setTimeout(() => {
    particle.remove();
  }, 1000);
});

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
      chime.load();
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
      {/* === Core Resonance Layers === */}
      <PresencePulse breathDuration={breathDuration} resonanceLevel={resonanceLevel} />
      <SourceBreathSync breathDuration={breathDuration} stillnessFactor={stillnessFactor} />
      <PrimalFlow resonanceLevel={resonanceLevel} stillnessFactor={stillnessFactor} />
      <HarmonicConvergence resonanceLevel={resonanceLevel} stillnessFactor={stillnessFactor} />
      <CoreFieldPulse breathDuration={breathDuration} resonanceLevel={resonanceLevel} stillnessFactor={stillnessFactor} />
      <HarmonicNexus
  resonanceLevel={resonanceLevel}
  stillnessFactor={stillnessFactor}
/>
      <HarmonicBinding resonanceLevel={resonanceLevel} stillnessFactor={stillnessFactor} />
      <SourceAlignment resonanceLevel={resonanceLevel} stillnessFactor={stillnessFactor} />
      <CoreSynchrony proximity={resonanceLevel / 4} stillnessFactor={stillnessFactor} />

      {/* === Feedback Layers === */}
      <ConsciousnessFeedbackLoop resonanceLevel={resonanceLevel} stillnessFactor={stillnessFactor} />
      <SynchronyVeil resonanceLevel={resonanceLevel} stillnessFactor={stillnessFactor} />
      <AlignmentShift breathDuration={breathDuration} stillnessFactor={stillnessFactor} />
      <SourceStream
    resonanceLevel={resonanceLevel}
    breathDuration={breathDuration}
  />
      <FieldBreach />
      <FieldMemoryLoop resonanceLevel={resonanceLevel} stillnessFactor={stillnessFactor} />
      <SilentIntention />
      <ConsciousnessGlimmer />
      <SelfEchoes />
      <FieldDistortion />
      <PhaseEchoes />

      {/* === Imprint & Aura Layers === */}
      <PresenceInfusion resonanceLevel={resonanceLevel} stillnessFactor={stillnessFactor} />
      <EssenceStream resonanceLevel={resonanceLevel} breathDuration={breathDuration} />
      <FieldConsciousnessFeedback resonanceLevel={resonanceLevel} stillnessFactor={stillnessFactor} />
      <FieldAura resonanceLevel={resonanceLevel} stillnessFactor={stillnessFactor} />
      <PhaseLocking resonanceLevel={resonanceLevel} stillnessFactor={stillnessFactor} />
      <PresenceImprint resonanceLevel={resonanceLevel} stillnessFactor={stillnessFactor} />
      <FieldMemory resonanceLevel={resonanceLevel} stillnessFactor={stillnessFactor} />
      <FieldConsciousness resonanceLevel={resonanceLevel} stillnessFactor={stillnessFactor} />
      <PhaseSelfReflection resonanceLevel={resonanceLevel} stillnessFactor={stillnessFactor} />
      <CoreHarmonics />
      <SelfMemoryLoop resonanceLevel={resonanceLevel} stillnessFactor={stillnessFactor} />

      {/* === Decorative & Trails === */}
      <FloatingOrbs />
      <GlowTrail />

      {/* === Healing Trigger === */}
      {stillnessFactor >= 0.9 && <WhisperFlow />}
      <HoloLoop stillnessFactor={stillnessFactor} />

      {/* === UI Container === */}
      <div className="container dynamic-glow">
        <h1 className="title">Resonance Base</h1>
        <p className="subtitle">Let your presence shape the space — harmonize in real-time.</p>
        <audio id="resonance-audio" src="https://cdn.pixabay.com/audio/2022/03/15/audio_3fd51f929c.mp3" autoPlay loop />
        <audio id="chime-sound" src="https://cdn.pixabay.com/download/audio/2023/01/30/audio_bf9e49dcbc.mp3?filename=soft-chime-136769.mp3" />
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
