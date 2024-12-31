import "./../styles/Gallery.css";

function Gallery() {
  return (
    <div className="content" id="gallery">
      <h2>Gallery</h2>
      <div className="gallery">
        <img src="src/assets/pic1.jpg" alt="Yoga pose 1" />
        <img src="src/assets/pic2.jpg" alt="Yoga pose 2" />
        <img src="src/assets/pic3.jpg" alt="Yoga studio" />
        <img src="src/assets/pic4.jpg" alt="Group class" />
        <img src="src/assets/pic5.jpg" alt="Group class" />
        <img src="src/assets/pic6.jpg" alt="Yoga practice" />
        <img src="src/assets/pic7.jpg" alt="Yoga practice" />
        <img src="src/assets/pic8.jpg" alt="Yoga practice" />
      </div>
    </div>
  );
}

export default Gallery;
