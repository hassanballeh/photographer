import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function BookingDetails() {
  const [booking, setBooking] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    axios
      .get(`https://brightness-y1n2.onrender.com/api/Photographer/${userId}`)
      .then((response) => {
        setBooking(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
      });
  }, [userId]);

  if (!booking) {
    return <div>Loading...</div>;
  }
  return (
    <div className="bg-[#191624] rounded-md mt-5">
      <div className="flex flex-col gap-5 p-4">
        <div className=" flex gap-2">
          <h2 className="text-white text-xl">Name:</h2>
          <p className="text-gray-400 text-lg">{booking.name}</p>
        </div>
        <div className=" flex gap-2">
          <h2 className="text-white text-xl">Date:</h2>
          <p className="text-gray-400 text-lg">{booking.date}</p>
        </div>
        <div className=" flex gap-2">
          <h2 className="text-white text-xl">Place:</h2>
          <p className="text-gray-400 text-lg">{booking.place}</p>
        </div>
        <div className=" flex gap-2">
          <h2 className="text-white text-xl">Price:</h2>
          <p className="text-gray-400 text-lg">{booking.price}</p>
        </div>

        {booking.isConfirmed && (
          <div className="flex gap-3 self-end">
            <button className="rounded-md px-1 py-2 text-white w-[80px] text-center text-base bg-green-400">
              Confirm
            </button>
            <button className="rounded-md px-1 py-2 text-white w-[80px] text-center text-base bg-red-600">
              Reject
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingDetails;
