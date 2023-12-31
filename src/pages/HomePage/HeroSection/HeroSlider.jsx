import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../../../App.css";
import { images_arr } from "../../../assets/data";

const HeroSlider = () => {
  return (
    <>
      <div className="w-full">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}>
          {images_arr.map(pic => {
            return (
              <SwiperSlide key={pic.id}>
                <div className="swiper-img-wrapper">
                  <img src={pic.src} alt={pic.alt} loading="lazy" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default HeroSlider;
