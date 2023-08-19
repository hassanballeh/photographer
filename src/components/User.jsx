import React from "react";

function User({ name, email, date, state }) {
  return (
    <a
      className="bg-[#191624] flex gap-5 justify-between rounded-md p-3 items-center"
      href="/user"
    >
      <div>
        <h2 className="text-white text-xl">{name}</h2>
        <h4 className="text-gray-400 text-base">{email}</h4>
      </div>
      <div className=" flex gap-2 items-center">
        <div
          className={`w-2 h-2 ${
            state == "Pending"
              ? "bg-yellow-400"
              : state == "Accepted"
              ? "bg-green-400"
              : "bg-red-600"
          } rounded-[50%] `}
        ></div>
        <p className="text-gray-400 text-lg  ">{date}</p>
      </div>
      <div>
        <p
          className={`${
            state == "Pending"
              ? "bg-yellow-400"
              : state == "Accepted"
              ? "bg-green-400"
              : "bg-red-600"
          } rounded-md px-1 py-2 text-white w-[80px] text-center text-base`}
        >
          {state}
        </p>
      </div>
    </a>
  );
}

export default User;
