import React, { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import useScrollToTop from "../hooks/useScrollToTop";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";
import { Link } from "react-router-dom";
import { SlidesImages, SwiperContainer } from "../pages/AllPages";

const Slider = ({ images }) => {
  const { handleClick } = useScrollToTop("instant");
  const [slidesPerView, setSlidesPerView] = useState(getInitialSlidesPerView());

  function getInitialSlidesPerView() {
    return window.innerWidth < 767 ? 3 : 4;
  }

  useEffect(() => {
    function handleResize() {
      setSlidesPerView(window.innerWidth < 767 ? 2 : 4);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <SwiperContainer>
      <Swiper
        className="SwipperClassed"
        modules={[Navigation, Keyboard]}
        spaceBetween={10}
        slidesPerView={slidesPerView}
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
            <div style={{ width: "100%" }} onClick={handleClick}>
              <Link to={`/${product.category}/products/${product.id}`} replace>
                <SlidesImages src={product.image} alt="" />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
};

export default Slider;
