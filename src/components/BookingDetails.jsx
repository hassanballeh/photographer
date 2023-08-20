import React from "react";

function BookingDetails() {
  let one = {
    name: "Hassan",
    date: "12/10/2023",
    price: 100000,
    place: "Lattakia_Jableh",
    isConfirmed: true,
    isPremium: false,
  };
  return (
    <div className="bg-[#191624] rounded-md mt-5">
      <div className="flex flex-col gap-5 p-4">
        <div className=" flex gap-2">
          <h2 className="text-white text-xl">Name:</h2>
          <p className="text-gray-400 text-lg">{one.name}</p>
        </div>
        <div className=" flex gap-2">
          <h2 className="text-white text-xl">Date:</h2>
          <p className="text-gray-400 text-lg">{one.date}</p>
        </div>
        <div className=" flex gap-2">
          <h2 className="text-white text-xl">Place:</h2>
          <p className="text-gray-400 text-lg">{one.place}</p>
        </div>
        <div className=" flex gap-2">
          <h2 className="text-white text-xl">Price:</h2>
          <p className="text-gray-400 text-lg">{one.price}</p>
        </div>

        {one.isConfirmed && (
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
