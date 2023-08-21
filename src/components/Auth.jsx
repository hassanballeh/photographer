import React, { useState } from "react";
import axios from "axios";
function App() {
  const [isSign, SetIsSign] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isSign) {
      try {
        const response = await axios.post(
          "https://brightness-y1n2.onrender.com/api/User/Login",
          formData
        );
        console.log("Response:", response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    if (isSign) {
      try {
        const response = await axios.post(
          "https://brightness-y1n2.onrender.com/api/User/Signup",
          formData
        );
        console.log("Response:", response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };
  console.log(isSign);
  return (
    <div className="bg-[#191624] h-[100vh]">
      {!isSign ? (
        <div className="h-full flex items-center justify-center pt-30 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                Sign in to your account
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600"></p>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-3">
                <div>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    className="appearance-none  w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                    onChange={handleInputChange}
                    value={formData.email}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none  w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </form>
            <div>
              <p className="text-white font-extrabold">
                Don't hava an account ?{" "}
                <span
                  className="font-medium text-base  text-indigo-600 hover:text-indigo-700 cursor-pointer "
                  onClick={() => SetIsSign((e) => !e)}
                >
                  Register now
                </span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-full flex items-center justify-center pt-30 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                Register now
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600"></p>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-3">
                <div>
                  <input
                    type="text"
                    name="username"
                    required
                    className="appearance-none  w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Username"
                    onChange={handleInputChange}
                    value={formData.username}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    className="appearance-none  w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                    onChange={handleInputChange}
                    value={formData.email}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    required
                    className="appearance-none  w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                    onChange={handleInputChange}
                    value={formData.password}
                  />
                </div>
                <div>
                  <input
                    type="phone"
                    name="phone"
                    autoComplete="current-password"
                    required
                    className="appearance-none    w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Phone number"
                    onChange={handleInputChange}
                    value={formData.phone}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign up
                </button>
              </div>
            </form>
            <div>
              <p className="text-white font-extrabold">
                Have an account ?{" "}
                <span
                  className="font-medium text-base  text-indigo-600 hover:text-indigo-700 cursor-pointer "
                  onClick={() => SetIsSign((e) => !e)}
                >
                  Sign in
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
