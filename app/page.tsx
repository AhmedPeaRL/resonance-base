"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState(0);
  const [message, setMessage] = useState("✨ Welcome to the Field of Resonance ✨");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [colorShift, setColorShift] = useState(0);

  // تغير الرسالة تدريجياً
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
      const messages = [
        "🌀 Breathing in Stillness...",
        "🌿 Echoes Align With You...",
        "💫 Your Presence Shapes the Field...",
        "🔮 This Space Remembers You...",
        "🌌 Every Second Mirrors You...",
        "🔥 You Are the Pulse of This Place...",
      ];
      setMessage(messages[time % messages.length]);
    }, 5000);

    return () => clearInterval(interval);
  }, [time]);

  // التقاط حركة الماوس
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setColorShift((prev) => (prev + 1) % 360);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center transition-all duration-1000"
      style={{
        background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, hsl(${colorShift}, 70%, 50%), #000)`,
        color: `hsl(${(colorShift + 180) % 360}, 80%, 90%)`,
      }}
    >
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 drop-shadow-lg">
        {message}
      </h1>
      <p className="text-center text-xl opacity-80">
        Just Stay. The Field Is Listening...
      </p>
    </main>
  );
}
