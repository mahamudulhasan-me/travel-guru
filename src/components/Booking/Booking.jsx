import React from "react";
import { useLoaderData } from "react-router-dom";

const Booking = () => {
  const bookingPlace = useLoaderData();
  return (
    <div className="grid grid-cols-12 justify-center  my-14 px-[15%]">
      <div className="col-span-7 mr-10">
        <h1 className="text-5xl font-semibold uppercase text-white">
          {bookingPlace.name}
        </h1>
        <p className="text-sm mt-5 text-slate-100 text-justify">
          {bookingPlace.details}
        </p>
      </div>
      <div className="col-span-5 bg-white rounded-lg p-5">
        <form className="space-y-5">
          <div>
            <label htmlFor="">Origin</label>
            <br />
            <input type="text" name="origin" id="" />
          </div>
          <div>
            <label htmlFor="">Destination</label>
            <br />
            <input type="text" name="origin" id="" />
          </div>
          <div className="flex gap-2">
            <div>
              <label htmlFor="">From</label> <br />
              <input type="date" name="" id="" />
            </div>
            <div>
              <label htmlFor="">To</label> <br />
              <input type="date" name="" id="" />
            </div>
          </div>
          <div>
            <input
              type="submit"
              value="Start Booking"
              className=" text-center w-full font-semibold py-3  bg-primary"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
