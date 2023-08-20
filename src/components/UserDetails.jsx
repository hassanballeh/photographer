import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function User() {
  const [post, setPost] = useState(null);
  const { postId } = useParams();

  useEffect(() => {
    axios
      .get(`https://brightness-y1n2.onrender.com/api/Photographer/${postId}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
      });
  }, [postId]);
  console.log("postId", postId);
  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#191624] rounded-md mt-5">
      <div className="flex flex-col gap-5 p-4">
        <div className=" flex gap-2">
          <h2 className="text-white text-xl">Name:</h2>
          <p className="text-gray-400 text-lg"></p>
        </div>
        <div className=" flex gap-2">
          <h2 className="text-white text-xl">Password:</h2>
          <p className="text-gray-400  text-lg"></p>
        </div>
        <div className=" flex gap-2">
          <h2 className="text-white text-xl">Email:</h2>
          <p className="text-gray-400 text-lg"></p>
        </div>
        <div className=" flex gap-2">
          <h2 className="text-white text-xl">Adress:</h2>
          <p className="text-gray-400 text-lg"></p>
        </div>
        <div className=" flex gap-2">
          <h2 className="text-white text-xl">PhoneNumber:</h2>
          <p className="text-gray-400 text-lg"></p>
        </div>
        <div className=" flex gap-2">
          <h2 className="text-white text-xl">Rate:</h2>
          <p className="text-gray-400 text-lg"></p>
        </div>
        <div className=" flex gap-2">
          <h2 className="text-white text-xl">Status:</h2>
          <p className="text-gray-400 text-lg"></p>
        </div>
        <div className=" flex gap-2">
          <h2 className="text-white text-xl">Bio:</h2>
          <p className="text-gray-400 text-lg"></p>
        </div>
        {true && (
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

export default User;
