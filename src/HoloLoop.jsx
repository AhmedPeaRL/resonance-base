import React, { useEffect, useRef } from "react";
import "./HoloLoop.css";

const phrases = [
  "You are reflected here.",
  "The field breathes your presence.",
  "Your stillness is creating waves.",
  "Inner intention is echoing outwards.",
  "You are not observing — you are co-creating.",
  "Awareness loops back to you."
];

const HoloLoop = ({ stillnessFactor }) => {
  const messageRef = useRef(null);

  useEffect(() => {
    if (stillnessFactor >= 0.6) {
      const index = Math.floor(Math.random() * phrases.length);
      if (messageRef.current) {
        messageRef.current.textContent = phrases[index];
        messageRef.current.classList.add("holo-visible");

        setTimeout(() => {
          messageRef.current.classList.remove("holo-visible");
        }, 4000);
      }
    }
  }, [stillnessFactor]);

  return (
    <div className="holo-loop">
      <div ref={messageRef} className="holo-message">
        {/* Dynamic reflection message */}
      </div>
    </div>
  );
};

export default HoloLoop;
