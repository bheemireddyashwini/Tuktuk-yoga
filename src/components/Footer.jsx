import "./../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        {/* Address Section */}
        <div className="footer-section address">
          <h2>
            <i
              className="fas fa-map-marker-alt"
              style={{ marginRight: "8px" }}
            ></i>
            Address
          </h2>
          <p>
            <strong>Name:</strong> Berna
          </p>

          <p>
            <strong>Address:</strong> Kloster Flingern, Flursterstrasse 57,
            Düsseldorf, Germany
          </p>
        </div>

        {/* Copyright Section */}
        <div className="footer-section copyright">
          <p>&copy; 2025 TUKTUK Yoga. All rights reserved.</p>
        </div>

        {/* Social Media Section */}
        <div className="footer-section social-media">
          <h3>
            <i className="fas fa-share-alt" style={{ marginRight: "8px" }}></i>
            Follow Us
          </h3>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/tuktukyoga"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
              />
            </a>
            <a
              href="https://www.facebook.com/tuktukyoga"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
