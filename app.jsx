import { useEffect, useRef } from "react";

export default function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().catch((e) => console.log("Autoplay blocked:", e));
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white relative overflow-hidden">
      {/* دائرة الرنين */}
      <div className="absolute w-32 h-32 rounded-full bg-cyan-500 opacity-30 animate-ping"></div>

      {/* صوت الرنين */}
      <audio ref={audioRef} src="https://cdn.pixabay.com/audio/2022/03/15/audio_3fd51f929c.mp3" preload="auto" />

      {/* نص الرنين */}
      <h1 className="text-5xl font-bold animate-pulse text-center text-teal-300 drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]">
        Resonance
      </h1>
    </div>
  );
}
import React, { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const canvasRef = useRef(null);
  const ripples = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      ripples.current.push({ x, y, radius: 0, alpha: 1 });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ripples.current = ripples.current
        .map((ripple) => {
          ripple.radius += 2;
          ripple.alpha -= 0.015;
          return ripple;
        })
        .filter((ripple) => ripple.alpha > 0);

      ripples.current.forEach(({ x, y, radius, alpha }) => {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(100, 255, 255, ${alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
      <canvas ref={canvasRef} className="ripple-canvas" />
      <h1 className="resonance-text">Resonance</h1>
      <audio autoPlay loop>
        <source
          src="https://cdn.pixabay.com/audio/2022/03/15/audio_3fd51f929c.mp3"
          type="audio/mpeg"
        />
      </audio>
    </div>
  );
}

export default App;
