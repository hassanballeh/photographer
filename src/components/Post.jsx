import React from "react";

function Post({ title, img, description }) {
  return (
    <div className="flex gap-10 justify-between items-center ">
      <div className="w-[500px]">
        <h2 className="text-xl text-[#191624] font-bold">{title}</h2>
        <p className="text-gray-500 text-lg">{description}</p>
      </div>
      <div className="">
        <img src={img} alt={title} className="w-[400px] rounded-md" />
      </div>
    </div>
  );
}

export default Post;
