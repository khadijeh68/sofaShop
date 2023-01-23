import styles from "./sliderBed.module.css";
import bedTwo from "../../../assets/images/bed/bedTwo.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card from "../../card";

const SliderBed = () => {
  return (
    <>
    <div className={styles.title}>
      <p className={styles.right}>سرویس خواب</p>
      <hr className={styles.divider} />
      <p className={styles.left}>مشاهده همه</p>
    </div>
    <div className={styles.slider_container}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={3}
        spaceBetween={10}
        navigation
        className={styles.swiper_slide}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Card image={bedTwo} category="سرویس خواب دو نفره" />
        </SwiperSlide>
        <SwiperSlide>
          <Card image={bedTwo} category="سرویس خواب دو نفره" />
        </SwiperSlide>
        <SwiperSlide>
          <Card image={bedTwo} category="سرویس خواب دو نفره" />
        </SwiperSlide>
        <SwiperSlide>
          <Card image={bedTwo} category="سرویس خواب دو نفره" />
        </SwiperSlide>
        <SwiperSlide>
          <Card image={bedTwo} category="سرویس خواب دو نفره" />
        </SwiperSlide>
      </Swiper>
    </div>
  </>
  )
};

export default SliderBed;
