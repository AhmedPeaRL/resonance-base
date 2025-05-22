import { useState, useEffect } from 'react';

export default function useBreathRhythm() {
  const [breathDuration, setBreathDuration] = useState(6);

  useEffect(() => {
    let lastMove = Date.now();

    const handleMove = (e) => {
      const now = Date.now();
      const delta = now - lastMove;
      lastMove = now;

      const normalizedSpeed = Math.min(1, 100 / delta); // 0 (slow) to 1 (fast)
      const newDuration = 6 - normalizedSpeed * 3; // Between 3s to 6s

      setBreathDuration(newDuration);
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return breathDuration;
}
