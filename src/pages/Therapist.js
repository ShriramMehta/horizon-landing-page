import React from "react";

export const Therapist = () => {
  return (
    <div>
      <div className="max-w-md bg-white shadow-lg rounded-2xl overflow-hidden mt-10 mx-auto">
        <div className="flex flex-col relative mb-10">
          <div className="absolute top-2 left-2 bg-white rounded-full p-2 ">
            <img
              className="w-20 h-20 object-cover rounded-full"
              src="./images/img2.png"
              alt="Therapist Photo"
            />
          </div>
          <h2 className="text-xl font-semibold mx-auto mt-5">Dr. John Smith</h2>
          <p className="text-gray-600 mx-auto">Experience: 10+ years</p>
        </div>
        <div className="p-4">
          <h1 className="text-black font-semibold mb-1">Best help for:</h1>
          <p className="text-gray-600 mb-2">Anxiety and Stress</p>
          <div className="flex flex-row">
            <p className="text-gray-600 mr-7">Hourly Fees: $100</p>
            <p className="text-gray-600">Online via google meet</p>
          </div>
          <div className="mt-4">
            <button className="bg-purple-800 hover:bg-blue-600 text-white px-4 py-2 rounded-full mr-2">
              Book a Session
            </button>
            <button className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-full">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
