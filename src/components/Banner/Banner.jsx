import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa";
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

import { Link } from "react-router-dom";
import { FreeMode, Pagination } from "swiper";
import "./styles.css";

// import required modules

const Banner = () => {
  return (
    <div>
      <div className="grid grid-cols-12 pl-[10%] items-center mt-10">
        <div className="col-span-4 text-white">
          <h1 className="text-5xl font-semibold uppercase">Cox's bazar</h1>
          <p className="text-sm mt-5">
            Cox's Bazar is a city, fishing port, tourism centre and district
            headquarters in southeastern Bangladesh. It is famous mostly for its
            long natural sandy beach, and it ...
          </p>
          <Link>
            <button className="bg-primary mt-7 text-slate-900 font-semibold flex items-center py-3 px-4 gap-5 rounded-sm">
              Booking <FaArrowRight />
            </button>
          </Link>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper col-span-8"
        >
          <SwiperSlide>
            <img src={slide1} alt="" className="rounded-[20px]" />
            <p className=" absolute bottom-4 left-1 text-2xl text-white font-semibold uppercase">
              Cox's Bazar
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
            <p className="absolute bottom-4 left-1 text-2xl text-white font-semibold uppercase">
              Sreemangal
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <p className="absolute bottom-4 left-1 text-2xl text-white font-semibold uppercase">
              Sundarbans
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide1} alt="" className="rounded-[20px]" />
            <p className="absolute bottom-4 left-1 text-2xl text-white font-semibold uppercase">
              Cox's Bazar
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
            <p className="absolute bottom-4 left-1 text-2xl text-white font-semibold uppercase">
              Sreemangal
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <p className="absolute bottom-4 left-1  text-2xl text-white font-semibold uppercase">
              Sundarbans
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex justify-center items-center gap-5 mt-10 ">
        <FaAngleLeft className="bg-white w-8 h-8 rounded-full p-2 swiper-pagination-vertical" />
        <FaAngleRight className="bg-white w-8 h-8 rounded-full p-2 swiper-pagination-vertical" />
      </div>
    </div>
  );
};
export default Banner;
