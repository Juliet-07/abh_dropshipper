import React from "react";
import Image from "next/image";
import Sidebar from "./sidebar";

const Profile = () => {
  return (
    <>
      <Sidebar>
        <div className="flex-grow p-6">
          {/* Profile Header */}
          <div className="flex justify-between items-center mb-6">
            <button className="flex items-center space-x-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>Profile</span>
            </button>
            <button className="text-red-600 border border-red-600 px-4 py-2 rounded-md">
              Log out
            </button>
          </div>

          {/* Profile Banner */}
          <div className="bg-gray-100 h-36 rounded-lg relative">
            <Image
              src="/path-to-banner-image.png"
              alt="Profile Banner"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          {/* Profile Picture */}
          <div className="relative flex justify-center mt-[-50px]">
            <div className="w-24 h-24 bg-gray-200 rounded-full border-4 border-white flex items-center justify-center">
              <Image
                src="/path-to-profile-picture.png"
                alt="Profile"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button className="bg-gray-200 px-4 py-2 rounded-md">
              Upload Photo
            </button>
          </div>

          {/* Profile Details */}
          <div className="mt-6">
            <div className="flex space-x-8 border-b pb-4">
              <button className="text-green-600 font-medium border-b-2 border-green-600 pb-2">
                Personal Info
              </button>
              <button className="text-gray-500">Shipping Address</button>
            </div>

            <div className="mt-6 bg-white p-4 rounded-lg shadow-md space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-gray-900">Name</h3>
                <span className="font-semibold text-gray-700">
                  Roselyn Klein
                </span>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-gray-900">Email</h3>
                <span className="font-semibold text-gray-700">
                  johndoe@gmail.com
                </span>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-gray-900">Phone</h3>
                <span className="font-semibold text-gray-700">08123122311</span>
              </div>
              <div className="flex justify-end mt-4">
                <button className="text-gray-600 font-medium">Edit</button>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default Profile;
