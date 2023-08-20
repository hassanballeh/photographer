import React, { useState, useEffect } from "react";
import Booking from "./Booking";
import axios from "axios";

function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(
          "https://brightness-y1n2.onrender.com/api/Booking/"
        );
        setBookings(response.data.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  let all1 = [
    {
      name: "Ali",
      location: "Lattakia-Jableh",
      date: "12/9/2023",
      action: "pending",
    },
    {
      name: "Ali",
      location: "Lattakia-Jableh",
      date: "12/9/2023",
      action: "pending",
    },
    {
      name: "Ali",
      location: "Lattakia-Jableh",
      date: "12/9/2023",
      action: "rejected",
    },
    {
      name: "Ali",
      location: "Lattakia-Jableh",
      date: "12/9/2023",
      action: "pending",
    },
    {
      name: "Ali",
      location: "Lattakia-Jableh",
      date: "12/9/2023",
      action: "pending",
    },
    {
      name: "Ali",
      location: "Lattakia-Jableh",
      date: "12/9/2023",
      action: "rejected",
    },
    {
      name: "Ali",
      location: "Lattakia-Jableh",
      date: "12/9/2023",
      action: "accepted",
    },
    {
      name: "Ali",
      location: "Lattakia-Jableh",
      date: "12/9/2023",
      action: "pending",
    },
    {
      name: "Ali",
      location: "Lattakia-Jableh",
      date: "12/9/2023",
      action: "rejected",
    },
    {
      name: "Ali",
      location: "Lattakia-Jableh",
      date: "12/9/2023",
      action: "accepted",
    },
  ];
  const [selectedFilter, setSelectedFilter] = useState("all");
  const filterData =
    selectedFilter == "all"
      ? bookings
      : selectedFilter == "pending"
      ? bookings.filter((e) => e.action == "pending")
      : selectedFilter == "accepted"
      ? bookings.filter((e) => e.action == "accepted")
      : selectedFilter == "rejected"
      ? bookings.filter((e) => e.action == "rejected")
      : null;

  return (
    <div className="flex flex-col gap-4 items-center justify-center py-6 w-full">
      <div className="flex justify-between items-center w-full px-10">
        <button
          onClick={() => setSelectedFilter("all")}
          className="text-xl bg-gray-400 font-bold text-white w-28 py-2 rounded-md"
        >
          All
        </button>
        <button
          onClick={() => setSelectedFilter("pending")}
          className="text-white text-xl bg-yellow-400  w-28 py-2 rounded-md"
        >
          Pending
        </button>
        <button
          onClick={() => setSelectedFilter("accepted")}
          className="text-white text-xl bg-green-400 w-28 py-2 rounded-md"
        >
          Accepted
        </button>
        <button
          onClick={() => setSelectedFilter("rejected")}
          className="text-white text-xl bg-red-600 w-28 py-2 rounded-md"
        >
          Rejected
        </button>
      </div>
      <div className=" w-full bg-gradient-to-tl from-indigo-600 to-[#191624] min-h-[90vh] py-[15px] rounded-md">
        <div className=" flex flex-col gap-4">
          <div>
            <h2 className="text-white text-center text-3xl font-extrabold">
              Bookings
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            {filterData.map((booking, i) => (
              <Booking key={booking.id} booking={booking} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bookings;
