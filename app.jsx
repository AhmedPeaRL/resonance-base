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

  return (
    <div className="App">
      <canvas ref={canvasRef} className="ripple-canvas" />
      <div className="content">
        <h1 className="resonance-text">Resonance</h1>
      </div>
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
