import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Slider = ({ images }) => {
  return (
    <Swiper
      modules={[Navigation, Keyboard]}
      spaceBetween={10}
      slidesPerView={5}
      navigation
      keyboard={true}
      loop={true}
      speed={700}
      effect="slide"
      easing="ease"
      scrollbar={{ draggable: true, hide: false }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img className="slider-images" src={image} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
