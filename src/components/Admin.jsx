import React from "react";
import Users from "./Users";

function Admin() {
  return (
    <div className="px-20 py-6 flex flex-col gap-5">
      <div>
        <h1 className="text-indigo-600 text-4xl font-extrabold text-center">
          Brightnees Dashboard
        </h1>
      </div>
      <div>
        <h4 className="text-2xl font-bold text-[#333]">Users State</h4>
      </div>
      <Users />
    </div>
  );
}

export default Admin;
