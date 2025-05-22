import { useEffect, useState } from "react";

export default function useFPS() {
  const [fps, setFps] = useState(60);

  useEffect(() => {
    let lastFrameTime = performance.now();
    let frameCount = 0;

    const update = () => {
      const now = performance.now();
      frameCount++;
      if (now - lastFrameTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastFrameTime = now;
      }
      requestAnimationFrame(update);
    };

    const id = requestAnimationFrame(update);
    return () => cancelAnimationFrame(id);
  }, []);

  return fps;
}
