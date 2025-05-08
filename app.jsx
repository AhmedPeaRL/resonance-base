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
