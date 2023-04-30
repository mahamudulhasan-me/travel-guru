import slide1 from "../../assets/Banner.png";
import slide2 from "../../assets/Sreemongol.png";
import slide3 from "../../assets/sundorbon.png";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules

const Banner = () => {
  return (
    <div className="grid grid-cols-12 pl-[10%] items-center">
      <div className="col-span-4 text-white">
        <h1 className="text-5xl font-semibold uppercase">Cox's bazar</h1>
        <p>
          Cox's Bazar is a city, fishing port, tourism centre and district
          headquarters in southeastern Bangladesh. It is famous mostly for its
          long natural sandy beach, and it ...
        </p>
        <button>Booking</button>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        // modules={[FreeMode, Pagination]}
        className="mySwiper col-span-8"
      >
        <SwiperSlide>
          <img src={slide1} alt="" className="rounded-[20px]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Banner;
