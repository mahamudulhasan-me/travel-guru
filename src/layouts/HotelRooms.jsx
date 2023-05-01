import React from "react";
import { useLoaderData } from "react-router-dom";
import HotelRoomDetails from "../components/HotelRoomDetails/HotelRoomDetails";
import Header from "../components/shared/Header";

const HotelRooms = () => {
  const hotelInfo = useLoaderData();
  return (
    <>
      <Header color="text-black" />
      <div className="grid grid-cols-12 px-[10%] gap-5">
        <div className="col-span-7">
          <p className="text-semibold">252 stays Apr 13-17 3 guests</p>
          <h2 className=" text-2xl font-bold">Stay in Cox’s Bazar</h2>
          <div className="space-y-6">
            {hotelInfo.map((hotel) => (
              <HotelRoomDetails hotelInfo={hotel} key={hotel.id} />
            ))}
          </div>
        </div>
        <div className="col-span-5 mt-12">
          <iframe
            className="w-full h-[calc(100vh-100px)] rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14856.224185879832!2d91.97462611496886!3d21.42704192908818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scox%20bazar%20all%20hotel%20room%20map!5e0!3m2!1sen!2sbd!4v1682936392782!5m2!1sen!2sbd"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default HotelRooms;
