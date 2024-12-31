import React, { useState, useEffect } from "react";
import "./../styles/Hero.css";

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { url: "src/assets/yoga.webp" }, // Add your first image
    { url: "src/assets/yoga1.png" }, // Add your second image
    { url: "src/assets/yoga2.jpeg" }, // Add your third image
    { url: "src/assets/yoga5.webp" }, // Add your fourth image
  ];

  const colors = ["#a8eb0c", "#e70b54", "#09b2e1", "#ffeb3b"]; // Colors for h2 corresponding to the images

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval
  }, [images.length]);

  return (
    <div className="hero">
      {/* Background */}
      <div
        className="hero-background"
        style={{
          backgroundImage: `url(${images[currentImage].url})`,
          opacity: 1,
        }}
      ></div>

      {/* Content */}
      <div className="hero-content">
        <h2
          id="hero-heading"
          style={{
            color: colors[currentImage], // Change h2 color dynamically
            transition: "color 0.5s ease", // Smooth transition for color
          }}
        >
          Find Your Inner Peace with <br />
          TUKTUK Yoga
        </h2>
        <button onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}>
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Hero;
