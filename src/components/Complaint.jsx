import React from "react";

function Complaint() {
  return (
    <div className="border-[#191624] border-[2px] border-solid rounded-md mt-5">
      <div className="px-5 py-2 flex flex-col gap-2">
        <div>
          <h2 className="border-b-[1px] border-gray-400 border-solid w-fit text-lg ">
            Title
          </h2>
        </div>
        <div>
          <p className="text-[#191624] text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
            veritatis et pariatur adipisci, fugit aut aliquid magnam provident!
            Quia pariatur dignissimos repellendus laborum dolore quas autem ut
            perspiciatis delectus atque.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Complaint;
