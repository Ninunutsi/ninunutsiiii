import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import useScrollToTop from "../hooks/useScrollToTop";

const Slider = ({ images, imagesPerView }) => {
  const {handleClick} = useScrollToTop("auto")

  return (
    <Swiper
      modules={[Navigation, Keyboard]}
      spaceBetween={10}
      slidesPerView={imagesPerView}
      navigation
      keyboard={true}
      loop={true}
      speed={700}
      effect="slide"
      easing="ease"
      scrollbar={{ draggable: true, hide: false }}
    >
      {images.map((product) => (
        <SwiperSlide key={product.id}>
          <div style={{width: "100%"}} onClick={handleClick}>
          <Link to={`/${product.category}/products/${product.id}`} replace>
            <img className="slider-images" src={product.image} alt="" />
          </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
