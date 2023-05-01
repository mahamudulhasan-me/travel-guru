/* eslint-disable react/prop-types */
import { Rating } from "@smastrom/react-rating";
import React from "react";

const HotelRoomDetails = (props) => {
  const {
    room_name,
    image,
    bedrooms,
    bathrooms,
    wifi,
    air_conditioning,
    kitchen,
    cancellation_flexibility,
    rating,
    total_rating,
    price,
  } = props.hotelInfo;
  return (
    <div className="grid grid-cols-12 gap-5 shadow-sm">
      <img src={image} alt="" className="col-span-5 rounded-md" />
      <div className="col-span-7 space-y-2">
        <h4 className="text-lg font-semibold">{room_name}</h4>
        <p>
          {bedrooms} bedrooms, {bathrooms} bathrooms
        </p>
        <div className="flex gap-2">
          {wifi && <p>wifi,</p>}
          {air_conditioning && <p>air conditioning,</p>}
          {kitchen && <p>kitchen</p>}
        </div>
        {cancellation_flexibility && <p>Cancel Flexibility Available</p>}
        <div className="flex gap-5">
          <p className="flex font-semibold">
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />{" "}
            {rating}({total_rating})
          </p>
          <p>
            <span className="font-semibold">{price}</span>/night
          </p>
        </div>
      </div>
    </div>
  );
};

export default HotelRoomDetails;
