import React, { useState } from "react";
import { useHistory } from "react-router-dom";
function AdminAuth() {
  const history = useHistory();
  const [postData, setPostData] = useState({
    password: "",
  });
  const handelSubmit = (e) => {
    e.preventDefault();
    if (postData.password == "12345678") {
      history.push("/");
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  };
  return (
    <div className="bg-[#191624] h-[100vh]">
      <div className="h-full flex items-center justify-center pt-30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
              Admin
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600"></p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handelSubmit}>
            <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-3">
              <div>
                <input
                  type="password"
                  required
                  className="appearance-none  w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  name="password"
                  value={postData.password}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminAuth;
