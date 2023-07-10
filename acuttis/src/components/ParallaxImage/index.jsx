import image from "../../assets/images/parallax-2.jpg";
import escritorio from '../../assets/images/escritorio.jpg'

function ParallaxImage() {
  return (
    <div className="parallax-container app-parallax-container">
      <div style={{width: '100%' , backgroundSize: 'cover' , backgroundRepeat: 'no-repeat' ,  }} className="parallax">
        <img style={{width: '100%'}} src={escritorio} />
      </div>
    </div>
  );
}

export default ParallaxImage;
