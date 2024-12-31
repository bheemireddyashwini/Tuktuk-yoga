import "./../styles/Gallery.css";

function Gallery() {
  return (
    <div className="content" id="gallery">
      <h2>Gallery</h2>
      <div className="gallery">
        <img src="pic1.jpg" alt="Yoga pose 1" />
        <img src="pic2.jpg" alt="Yoga pose 2" />
        <img src="pic3.jpg" alt="Yoga studio" />
        <img src="pic4.jpg" alt="Group class" />
        <img src="pic5.jpg" alt="Group class" />
        <img src="pic6.jpg" alt="Yoga practice" />
        <img src="pic7.jpg" alt="Yoga practice" />
        <img src="pic8.jpg" alt="Yoga practice" />
      </div>
    </div>
  );
}

export default Gallery;
