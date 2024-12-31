import { useState } from "react";
import "./../styles/Header.css";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="logo-container">
        <img src="pic4.jpg" alt="TUK TUK Yoga Logo" /> {/* Updated path to public folder */}
        <h1>TUKTUK Yoga</h1>
      </div>

      {/* Burger menu button */}
      <button
        className={`burger-menu-btn ${isOpen ? "clicked" : ""}`} // Add clicked class when open
        onClick={toggleMenu}
      >
        <GiHamburgerMenu />
      </button>

      {/* Navigation */}
      <nav className={isOpen ? "nav-open" : ""}>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#price">Price</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
