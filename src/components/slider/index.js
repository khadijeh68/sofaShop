import { Carousel } from "react-bootstrap";
import sofa from "../../assets/images/sofa.jpg";
import Sofas from "../../assets/images/Sofas.jpg";
import firstImg from "../../assets/images/firstImg.png";
import style from "./slider.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Slide() {
  return (
    <Carousel fade variant="dark" className={style.carousel}>
      <Carousel.Item>
        <img className={style.slider} src={sofa} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className={style.slider} src={firstImg} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className={style.slider} src={Sofas} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;
