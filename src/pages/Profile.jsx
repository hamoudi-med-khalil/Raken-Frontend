import React from "react";
import MyOrdersPages from "./MyOrdersPages";

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          {/* Left side */}

          <div className=" w-full md:w-1/3 lg:w-1/4 border p-4 shadow-md rounded-2xl ">
            <h1 className="font-bold text-2xl md:text-3xl  mb-2">Admin User</h1>
            <p className="text-lg text-gray-600 mb-4">admin@exemple.com</p>
            <button className=" w-full bg-red-500 text-white py-1 rounded text-center">
              Logout
            </button>
          </div>
          {/* Right Side */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <MyOrdersPages />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
