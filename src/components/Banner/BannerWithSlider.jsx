import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import "./styles.css";
const BannerWithSlider = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const placeName = useLoaderData();
  //   const [placeName, setPlaceName] = useState([]);
  //   useEffect(() => {
  //     fetch(`http://localhost:5000/place`)
  //       .then((response) => response.json())
  //       .catch((place) => console.log(place));
  //   }, []);

  return (
    <div>
      <div className="grid grid-cols-12 items-center  mt-14 pl-[10%] gap-5 text-white">
        <div className="col-span-4">
          <Slider asNavFor={nav1} ref={(slider) => setNav1(slider)}>
            {placeName.map((place) => (
              <>
                <div>
                  <h1 className="text-5xl font-semibold uppercase">
                    {place.name}
                  </h1>
                  <p className="text-sm mt-5">
                    {showMore ? place?.details : place?.details?.slice(0, 200)}
                    ...
                    {!showMore && (
                      <span
                        className="text-primary font-semibold cursor-pointer"
                        onClick={() => setShowMore(!showMore)}
                      >
                        See More
                      </span>
                    )}
                  </p>
                  <Link to={`/booking/${place.id}`}>
                    <button className="bg-primary mt-7 text-slate-900 font-semibold flex items-center py-3 px-4 gap-5 rounded-sm">
                      Booking <FaArrowRight />
                    </button>
                  </Link>
                </div>
              </>
            ))}
          </Slider>
        </div>
        <div className="col-span-8 secondSlide">
          <Slider
            asNavFor={nav2}
            ref={(slider) => setNav2(slider)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
            className="secondSlide"
          >
            {placeName.map((place) => (
              <>
                <div className="relative rounded-lg h-80 mx-3">
                  <Link to={`/booking/${place.id}`}>
                    <img
                      src={place.image}
                      alt=""
                      className="rounded-lg h-full bg-cover "
                    />
                    <p className="absolute bottom-4 left-1 text-xl text-slate-200 font-semibold uppercase">
                      {place.name}
                    </p>
                  </Link>
                </div>
              </>
            ))}
          </Slider>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5 mt-10 ">
        <FaAngleLeft className="bg-white w-8 h-8 rounded-full p-2 " />
        <FaAngleRight className="bg-white w-8 h-8 rounded-full p-2 " />
      </div>
    </div>
  );
};
export default BannerWithSlider;
