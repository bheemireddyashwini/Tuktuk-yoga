import { useState, useEffect } from "react";
import "./../styles/Hero.css";

// Import images
import yogaImage from "../assets/images/yoga.webp";
import yogaImage1 from "../assets/images/yoga1.png";
import yogaImage3 from "../assets/images/yoga5.webp";

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { url: yogaImage }, // First image
    { url: yogaImage1 }, // Second image
    { url: yogaImage3 }, // Fourth image
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
        <button
          onClick={() =>
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Hero;
