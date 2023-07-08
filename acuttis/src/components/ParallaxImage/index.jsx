import image from "../../assets/images/parallax-2.jpg";

function ParallaxImage() {
  return (
    <div className="parallax-container app-parallax-container">
      <div className="parallax">
        <img src={image} />
      </div>
    </div>
  );
}

export default ParallaxImage;
