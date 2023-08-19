import React from "react";

function Booking({ name, date, location, action, index }) {
  return (
    <a className="flex items-center justify-between px-5 " href="/oneBooking">
      <div className="flex gap-2">
        <span className="text-white text-xl">{index + 1}</span>
        <h3 className="text-white text-xl">{name}</h3>
      </div>
      <div>
        <p className="text-lg text-gray-400 ">{location}</p>
      </div>
      <div className="flex gap-2 items-center">
        <div
          className={`w-2 h-2 ${
            action == "pending"
              ? "bg-yellow-400"
              : action == "accepted"
              ? "bg-green-400"
              : "bg-red-600"
          } rounded-[50%] `}
        ></div>
        <p className="text-white text-lg  ">{date}</p>
      </div>
      <div>
        <p
          className={`${
            action == "pending"
              ? "bg-yellow-400"
              : action == "accepted"
              ? "bg-green-400"
              : "bg-red-600"
          } rounded-md px-1 py-2 text-white w-[80px] text-center text-base`}
        >
          {action}
        </p>
      </div>
    </a>
  );
}

export default Booking;
