import sofa from "../../assets/images/sofa.jpg";
import Sofas from "../../assets/images/Sofas.jpg";
import firstImg from "../../assets/images/firstImg.png";
import styles from "./slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card from "../card";

const Slide = () => {
  return (
    <div className={styles.slider_container}>
      <Swiper
        modules={[Pagination, Navigation, Scrollbar, A11y]}
        slidesPerView={3}
        spaceBetween={10}
        navigation
        breakpoints={{
          340:{
            width: 200,
            slidesPerview: 1
          },
          768:{
            width: 768,
            slidesPerview: 2,
          },
          1040:{
            width: 1040,
            slidesPerview: 3,
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Card image={sofa} category="مبل راحتی"/>
        </SwiperSlide>
        <SwiperSlide>
          <Card image={Sofas} category="مبل کلاسیک"/>
        </SwiperSlide>
        <SwiperSlide>
          <Card image={firstImg} category="مبل ال"/>
        </SwiperSlide>

        <SwiperSlide>
          <Card image={sofa} category="مبل راحتی"/>
        </SwiperSlide>
        <SwiperSlide>
          <Card image={Sofas} category="مبل کلاسیک"/>
        </SwiperSlide>
        <SwiperSlide>
          <Card image={firstImg} category="مبل ال"/>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Slide;
