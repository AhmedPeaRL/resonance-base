import React, { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const canvasRef = useRef(null);
  const audioRef = useRef(null);
  const ripples = useRef([]);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleMouseMove = (e) => {
      ripples.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        alpha: 1,
        speed: 2 + Math.random() * 1.5,
      });
    };

    const handleClick = (e) => {
      for (let i = 0; i < 5; i++) {
        ripples.current.push({
          x: e.clientX + Math.random() * 20 - 10,
          y: e.clientY + Math.random() * 20 - 10,
          radius: 0,
          alpha: 1,
          speed: 1 + Math.random() * 3,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ripples.current = ripples.current
        .map((r) => {
          r.radius += r.speed;
          r.alpha -= 0.015;
          return r;
        })
        .filter((r) => r.alpha > 0);

      ripples.current.forEach(({ x, y, radius, alpha }) => {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 255, 255, ${alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  };

  return (
    <div className="App">
  <div className="glow-layer" />

      <canvas ref={canvasRef} className="ripple-canvas" />
     <div className="glow-layer" />
  <div className="content">
        <h1 className="resonance-text">Resonance</h1>
        <button className="mute-btn" onClick={toggleMute}>
          {isMuted ? "🔇 Mute Off" : "🔊 Mute On"}
        </button>
      </div>
      <audio ref={audioRef} autoPlay loop>
        <source
          src="https://cdn.pixabay.com/audio/2023/05/09/audio_b030db315d.mp3"
          type="audio/mpeg"
        />
      </audio>
    </div>
  );
}
const [presenceTime, setPresenceTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPresenceTime(prev => prev + 1);
    }, 1000); // كل ثانية

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <div className="background">
       {ripples.map(ripple => (
  <div
    key={ripple.id}
    className="ripple"
    style={{
      left: ripple.x,
      top: ripple.y,
    }}
  />
))}
 <div className={`aura aura-1 ${presenceTime > 5 ? 'visible' : ''}`} />
        <div className={`aura aura-2 ${presenceTime > 10 ? 'visible' : ''}`} />
        <div className={`aura aura-3 ${presenceTime > 20 ? 'visible' : ''}`} />
      </div>
      <h1 className="main-text">Welcome to Core Resonance</h1>
    </div>
  );
}
const [ripples, setRipples] = useState([]);

const createRipple = (x, y) => {
  const newRipple = {
    id: Date.now(),
    x,
    y,
  };
  setRipples(prev => [...prev, newRipple]);
  setTimeout(() => {
    setRipples(prev => prev.filter(r => r.id !== newRipple.id));
  }, 800); // ripple disappears after 0.8 sec
};

useEffect(() => {
  const handleMove = (e) => {
    const x = e.clientX || (e.touches && e.touches[0].clientX);
    const y = e.clientY || (e.touches && e.touches[0].clientY);
    if (x && y) createRipple(x, y);
  };

  window.addEventListener('mousemove', handleMove);
  window.addEventListener('touchmove', handleMove);

  return () => {
    window.removeEventListener('mousemove', handleMove);
    window.removeEventListener('touchmove', handleMove);
  };
}, []);
export default App;
