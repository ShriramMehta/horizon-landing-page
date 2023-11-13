import React from "react";
import { useNavigate } from "react-router";

const Therapist = () => {
  const navigate = useNavigate();

  function handleBookSession() {
    const token = localStorage.getItem("token");
    if (token) {
      console.log("user is logged in");
      navigate("/bookSession");
    } else {
      console.log("user is not looged in");
      navigate("/login");
    }
  }

  return (
    <div className="md:flex mx-auto">
      <div className="w-full md:w-1/3 bg-white shadow-lg rounded-2xl overflow-hidden mt-10 mx-auto">
        <div className="flex flex-col relative mb-5">
          <div className="absolute top-3 left-3 bg-white rounded-full p-2 ">
            <img
              className="w-36 h-36 object-cover"
              src="./images/img2.png"
              alt="Therapist Photo"
            />
          </div>
          <h2 className="text-xl font-semibold ml-52 mt-10 ">Dr. John Smith</h2>
          <p className="text-gray-600 mx-auto ml-48 mb-4">
            Experience: 10+ years
          </p>
          <p className="text-gray-600 mx-auto ml-48">Hourly Fees: $100</p>
        </div>
        <div className="p-4">
          <h1 className="text-black font-semibold mb-1 mt-2">Best help for:</h1>
          <p className="text-gray-600 mb-2">
            Stress,Relationship,Self development,Anxiety,Work related,Sleep help
          </p>
          <p className="text-gray-600 mx-auto">
            Appoitment mode:Online via google meet
          </p>

          {/* <div className="flex flex-row">
            <p className="text-gray-600 mr-7">Hourly Fees: $100</p>
        <p className="text-gray-600 mx-auto ml-48">Appoitment mode:Online via google meet</p>

          </div> */}
          <div className="mt-4">
            <button
              className="bg-primaryIndigo hover:bg-blue-600 text-white px-4 py-2 rounded-full mr-2"
              onClick={() => {
                handleBookSession();
              }}
            >
              Book a Session
            </button>
            <button
              onClick={() => navigate("/viewDetails")}
              className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-full"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 bg-white shadow-lg rounded-2xl overflow-hidden mt-10 mx-auto">
        <div className="flex flex-col relative mb-0">
          <div className="absolute top-3 left-3 bg-white rounded-full p-2 ">
            <img
              className="w-36 h-36 object-cover"
              src="./images/img2.png"
              alt="Therapist Photo"
            />
          </div>
          <h2 className="text-xl font-semibold ml-48 mt-10 ">Dr. John Smith</h2>
          <p className="text-gray-600 mx-auto ml-48 mb-2">
            Experience: 10+ years
          </p>
          <p className="text-gray-600 mx-auto ml-48">Hourly Fees: $100</p>
          <p className="text-gray-600 mx-auto ml-48">Appoitment mode:</p>
          <p className="text-gray-600 mx-auto ml-48">Online via google meet</p>
        </div>
        <div className="p-4">
          <h1 className="text-black font-semibold mb-1">Best help for:</h1>
          <p className="text-gray-600 mb-2">
            Stress,Relationship,Self development,Anxiety,Work related,Sleep help
          </p>
          {/* <div className="flex flex-row">
            <p className="text-gray-600 mr-7">Hourly Fees: $100</p>
        <p className="text-gray-600 mx-auto ml-48">Appoitment mode:Online via google meet</p>

          </div> */}
          <div className="mt-4">
            <button className="bg-primaryIndigo hover:bg-lightBlue text-white px-4 py-2 rounded-full mr-2">
              Book a Session
            </button>
            <button className="bg-white hover:bg-gray-200 text-black border border-black px-4 py-2 rounded-full">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Therapist;
