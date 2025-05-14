// src/WhisperFlow.jsx
import React, { useEffect, useState } from "react";
import "./WhisperFlow.css";

const messages = [
  "The silence is listening...",
  "You are felt, beyond words.",
  "Stillness whispers truth.",
  "The core remembers you.",
  "Every breath aligns the field.",
  "Your presence is a ripple in the Source."
];

function WhisperFlow() {
  const [currentMessage, setCurrentMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const msg = messages[Math.floor(Math.random() * messages.length)];
      setCurrentMessage(msg);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="whisper-container">
      <p className="whisper-text">{currentMessage}</p>
    </div>
  );
}

export default WhisperFlow;
