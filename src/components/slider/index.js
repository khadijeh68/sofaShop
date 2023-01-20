import sofa from "../../assets/images/sofa.jpg";
import gano from "../../assets/images/categories/rahati/gano.png";
import chester from "../../assets/images/categories/chester/chester.jpg";
import classic from "../../assets/images/categories/classic/classic.jpg";
import L from "../../assets/images/categories/L/LSofa.jpg";
import LChester from "../../assets/images/categories/chester/LChester.jpeg";
import styles from "./slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card from "../card";

const Slide = () => {
  return (
    <>
    <div className={styles.title}>
    <p className={styles.right}>مبلمان</p>
    <hr className={styles.divider}/>
    <p className={styles.left}>مشاهده همه</p>
    </div>
     <div className={styles.slider_container}>
      <Swiper
        modules={[Navigation,Pagination , Scrollbar, A11y]}
        slidesPerView={3}
        spaceBetween={10}
        navigation
        breakpoints={{
          340:{
            width: 200,
            slidesPerview: 1,
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
          <Card image={gano} category=" راحتی"/>
        </SwiperSlide>
        <SwiperSlide >
          <Card image={classic} category=" کلاسیک"/>
        </SwiperSlide>
        <SwiperSlide>
          <Card image={chester} category=" چستر"/>
        </SwiperSlide>
        <SwiperSlide>
          <Card image={LChester} category=" مدل ال چستر"/>
        </SwiperSlide>
        <SwiperSlide>
          <Card image={L} category="مدل ال"/>
        </SwiperSlide>  
      </Swiper>
    </div>
    </>
   
  );
};

export default Slide;
