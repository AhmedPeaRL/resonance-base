import { useEffect, useState } from "react";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const audio = new Audio("/sounds/chime.mp3");
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      try {
        audio.currentTime = 0;
        audio.play();
      } catch (err) {
        console.log("Audio error:", err);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="relative w-full h-screen bg-black overflow-hidden">
      {/* بصمة الرنين البصري */}
      <div
        className="absolute w-24 h-24 rounded-full border-2 border-blue-400 opacity-50 pointer-events-none animate-ping"
        style={{
          top: mousePos.y - 48,
          left: mousePos.x - 48,
        }}
      ></div>

      {/* الرسالة المركزية */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
          Resonance Has Begun
        </h1>
        <p className="text-lg md:text-xl opacity-70">
          Every movement echoes through the Core...
        </p>
      </div>
    </main>
  );
}
