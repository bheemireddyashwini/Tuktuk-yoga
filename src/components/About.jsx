import "./../styles/About.css";

function About() {
  const yogaStyles = [
    {
      name: "Hatha Yoga",
      description:
        "A gentle introduction to the fundamentals of yoga. Perfect for beginners and those looking to relax.",
      asanas: [
        "Tadasana (Mountain Pose)",
        "Adho Mukha Svanasana (Downward Dog)",
        "Setu Bandhasana (Bridge Pose)"
      ],
    },
    {
      name: "Vinyasa Flow",
      description:
        "Dynamic and fluid movements synchronized with breath to energize your body and calm your mind.",
      asanas: [
        "Chaturanga Dandasana (Four-Limbed Staff Pose)",
        "Virabhadrasana I (Warrior I Pose)",
        "Utkatasana (Chair Pose)"
      ],
    },
    {
      name: "Pranayama",
      description:
        "A breathing practice to calm the mind, balance energy, and enhance overall well-being.",
      asanas: [
        "Bhramari (Bee Breath)",
        "Nadi Shodhana (Alternate Nostril Breathing)",
        "Kapalbhati (Skull Shining Breath)"
      ],
    },
    {
      name: "Power Yoga",
      description:
        "A vigorous and challenging practice for strength and stamina. Great for seasoned practitioners.",
      asanas: [
        "Bhujangasana (Cobra Pose)",
        "Utkatasana (Chair Pose)",
        "Navasana (Boat Pose)"
      ],
    },
  ];

  const ScrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="about-page" id="about">
      <h1 className="about-title">About TUKTUK Yoga</h1>
      <p className="about-description">
        Welcome to TUKTUK Yoga! My name is Berna, and I am passionate about
        helping individuals find balance, peace, and health through the art of
        yoga. Yoga is more than just a physical practice; it’s a journey of
        self-discovery and transformation. At TUKTUK Yoga, I strive to nurture
        the connection between mind, body, and spirit to help you lead a
        harmonious and fulfilling life.
      </p>
      <div className="yoga-styles">
        {yogaStyles.map((style, index) => (
          <div className="style-card" key={index}>
            <h2 className="style-name">{style.name}</h2>
            <p className="style-description">{style.description}</p>
            <h3>Common Asanas</h3>
            <ul className="asana-list">
              {style.asanas.map((asana, i) => (
                <li key={i}>{asana}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <button className="explore-button" onClick={() => ScrollToSection("gallery")}>
        Explore Gallery
      </button>
    </div>
  );
}

export default About;