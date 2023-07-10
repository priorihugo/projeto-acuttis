import image from "../../assets/images/parallax-2.jpg";
import escritorio from '../../assets/images/escritorio.jpg'

function ParallaxImage() {
  return (
    <div className="parallax-container app-parallax-container">
      <div style={{backgroundSize: 'cover' , backgroundRepeat: 'no-repeat'}} className="parallax">
        <img src={image} />
      </div>
    </div>
  );
}

export default ParallaxImage;
