import React from "react";
import "swiper/css";
import "swiper/css/effect-creative";
import "./SwiperStyle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import { Data } from "../../assets/imgData/ImageData";
import SubmitBtn from "../Buttons/SubmitBtn";

const SwiperSlider = () => {
  const getImageData = Data;
  return (
    <div className="swiper-slide">
      <div className="swiper_content">
        <Swiper
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-20%", 0, -1],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative]}
          className="mySwiper"
        >
          {getImageData
            .filter((img, index) => {
              return img ? index < 4 : null;
            })
            .map((img) => {
              return (
                <SwiperSlide key={img.id}>
                  <img src={img.image} alt="nature" />
                </SwiperSlide>
              );
            })}
        </Swiper>
        <SubmitBtn name={"Submit"} nav={""} />
      </div>
      <div className="swiper_content">
        <Swiper
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-20%", 0, -1],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative]}
          className="mySwiper"
        >
          {getImageData
            .filter((img, index) => {
              return img ? index > 4 && index < 9 : null;
            })
            .map((img) => {
              return (
                <SwiperSlide key={img.id}>
                  <img src={img.image} alt="nature" />
                </SwiperSlide>
              );
            })}
        </Swiper>
        <SubmitBtn name={"Woman"} nav={"woman"} />
      </div>
      <div className="swiper_content">
        <Swiper
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-20%", 0, -1],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative]}
          className="mySwiper"
        >
          {getImageData
            .filter((img, index) => {
              return img ? index > 9 && index < 14 : null;
            })
            .map((img) => {
              return (
                <SwiperSlide key={img.id}>
                  <img src={img.image} alt="nature" />
                </SwiperSlide>
              );
            })}
        </Swiper>
        <SubmitBtn name={"Kids"} nav={"kids"} />
      </div>
    </div>
  );
};

export default SwiperSlider;
