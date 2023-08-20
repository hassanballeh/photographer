import React, { useState } from "react";
import Booking from "./Booking";

function Bookings() {
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
      ? all1
      : selectedFilter == "pending"
      ? all1.filter((e) => e.action == "pending")
      : selectedFilter == "accepted"
      ? all1.filter((e) => e.action == "accepted")
      : selectedFilter == "rejected"
      ? all1.filter((e) => e.action == "rejected")
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
            {bookings.map((booking, i) => (
              <Booking
                name={booking.name}
                date={booking.date}
                location={booking.location}
                action={booking.action}
                key={i}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bookings;
