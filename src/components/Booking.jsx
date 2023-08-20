import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Booking({ booking, index }) {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          `https://brightness-y1n2.onrender.com/api/Photographer/${booking.userId}`
        );
        setUserDetails(response.data);
      } catch (error) {
        console.error(
          `Error fetching user details for booking ${booking.userId}:`,
          error
        );
      }
    };

    fetchUserDetails();
  }, [booking.userId]);
  console.log(userDetails);
  const history = useHistory();
  const openCard = () => {
    history.push(`/booking/${booking.userId}`);
  };
  return (
    <a className="flex items-center justify-between px-5 " onClick={openCard}>
      <div className="flex gap-2">
        <span className="text-white text-xl">{index + 1}</span>
        <h3 className="text-white text-xl">
          {userDetails?.name || "Loading..."}
        </h3>
      </div>
      <div>
        <p className="text-lg text-gray-400 ">{booking.place}</p>
      </div>
      <div className="flex gap-2 items-center">
        <div
          className={`w-2 h-2 ${
            booking.status == "pending"
              ? "bg-yellow-400"
              : booking.status == "accepted"
              ? "bg-green-400"
              : "bg-red-600"
          } rounded-[50%] `}
        ></div>
        <p className="text-white text-lg  ">{booking.date}</p>
      </div>
      <div>
        <p
          className={`${
            booking.status == "pending"
              ? "bg-yellow-400"
              : booking.status == "accepted"
              ? "bg-green-400"
              : "bg-red-600"
          } rounded-md px-1 py-2 text-white w-[80px] text-center text-base`}
        >
          {booking.status}
        </p>
      </div>
    </a>
  );
}

export default Booking;
