import React, { useState } from "react";
import Post from "./Post";
function Posts() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageName, setSelectedImageName] = useState("");
  const [postData, setPostData] = useState({
    title: "",
    description: "",
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setSelectedImageName(file.name);
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    setPostData({
      title: "",
      description: "",
    });
  };

  return (
    <div className="px-20 flex flex-col items-center justify-center py-6 gap-y-28">
      <div className="w-[500px]">
        <h1 className="text-indigo-600 text-3xl font-extrabold pb-6">
          Create Your Post
        </h1>
        <form className="flex flex-col gap-3" onSubmit={handelSubmit}>
          <div>
            <input
              type="text"
              name="title"
              id=""
              value={postData.title}
              placeholder="Title"
              onChange={(e) =>
                setPostData({ ...postData, title: e.target.value })
              }
              className="appearance-none w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
          </div>
          <div>
            <textarea
              rows={10}
              value={postData.description}
              placeholder="Description"
              onChange={(e) =>
                setPostData({ ...postData, description: e.target.value })
              }
              className="appearance-none w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <div className=" flex gap-1 items-center">
              <label
                htmlFor="upload-input"
                className="py-4 px-2 border border-transparent text-sm font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer text-white"
              >
                Upload image
              </label>
              <span className="text-gray-500 text-xs">{selectedImageName}</span>
            </div>
            <input
              id="upload-input"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
          <button
            type="submit"
            className="relative outline-none border-none   py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 "
          >
            Create
          </button>
        </form>
      </div>
      <div className="flex flex-col items-start  w-full">
        <div>
          <h2 className="text-indigo-600 text-4xl font-extrabold ">
            Your Posts
          </h2>
        </div>
        <div className="flex flex-col  gap-10 w-full">
          <Post
            title="Vacation"
            img="https://img.freepik.com/free-photo/traveler-photographer-studio-portrait-handsome-bearded_613910-12325.jpg?w=900&t=st=1691172090~exp=1691172690~hmac=0d80ab8ecf811ae8d761dcadaa3aa0a148f27612ab888722dd8b103b8898b9f2"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laboriosam debitis sit perspiciatis atque, perferendis laudantium consequatur distinctio eligendi. Repudiandae amet distinctio suscipit natus quia nisi officia ad nesciunt minus!"
          />
          <Post
            title="Vacation"
            img="https://img.freepik.com/free-photo/traveler-photographer-studio-portrait-handsome-bearded_613910-12325.jpg?w=900&t=st=1691172090~exp=1691172690~hmac=0d80ab8ecf811ae8d761dcadaa3aa0a148f27612ab888722dd8b103b8898b9f2"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laboriosam debitis sit perspiciatis atque, perferendis laudantium consequatur distinctio eligendi. Repudiandae amet distinctio suscipit natus quia nisi officia ad nesciunt minus!"
          />
        </div>
      </div>
    </div>
  );
}

export default Posts;
