import { useState, useEffect } from "react";

function useFPS() {
  const [fps, setFps] = useState(60);

  useEffect(() => {
    let lastTime = performance.now();
    let frames = 0;

    const update = (now) => {
      frames++;
      const delta = now - lastTime;

      if (delta >= 1000) {
        setFps(Math.round((frames * 1000) / delta));
        frames = 0;
        lastTime = now;
      }

      requestAnimationFrame(update);
    };

    const id = requestAnimationFrame(update);

    return () => cancelAnimationFrame(id);
  }, []);

  return fps;
}

export default useFPS;
