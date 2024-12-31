
import "./../styles/Gallery.css";

// Importing images
import pic1 from "../assets/images/pic1.jpg";
import pic2 from "../assets/images/pic2.jpg";
import pic3 from "../assets/images/pic3.jpg";
import pic4 from "../assets/images/pic4.jpg";
import pic5 from "../assets/images/pic5.jpg";
import pic6 from "../assets/images/pic6.jpg";
import pic7 from "../assets/images/pic7.jpg";
import pic8 from "../assets/images/pic8.jpg";

function Gallery() {
  return (
    <div className="content" id="gallery">
      <h2>Gallery</h2>
      <div className="gallery">
        <img src={pic1} alt="Yoga pose 1" />
        <img src={pic2} alt="Yoga pose 2" />
        <img src={pic3} alt="Yoga studio" />
        <img src={pic4} alt="Group class" />
        <img src={pic5} alt="Group class" />
        <img src={pic6} alt="Yoga practice" />
        <img src={pic7} alt="Yoga practice" />
        <img src={pic8} alt="Yoga practice" />
      </div>
    </div>
  );
}

export default Gallery;
