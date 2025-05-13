import React, { useState, useEffect } from 'react';
import './SilentIntention.css';

const SilentIntention = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    let timer = null;

    const resetTimer = () => {
      clearTimeout(timer);
      setActive(false);
      timer = setTimeout(() => setActive(true), 3000); // 3s of stillness triggers intention
    };

    window.addEventListener('mousemove', resetTimer);
    resetTimer();

    return () => {
      window.removeEventListener('mousemove', resetTimer);
      clearTimeout(timer);
    };
  }, []);

  return active ? <div className="silent-intention"></div> : null;
};

export default SilentIntention;
