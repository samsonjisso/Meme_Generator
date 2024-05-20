import { useState } from "react";
import "./EventListener.css";
export default function EventListener() {
  const [isBlurred, setIsBlurred] = useState(false);

  const handleMouseEnter = () => {
    setIsBlurred(true);
  };

  const handleMouseLeave = () => {
    setIsBlurred(false);
  };

  function handleClick() {
    console.log("I was clicked");
  }
  return (
    <main className="event">
      <img
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="event--image"
        src="/assets/image_1.jpeg"
        style={{ filter: isBlurred ? 'blur(10px)' : 'none' }}
      />
      <button className="event--button" onClick={handleClick}>
        Button
      </button>
    </main>
  );
}
