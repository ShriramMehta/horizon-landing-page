import React from "react";
import { useNavigate } from "react-router";

const TherapistData = [
  {
    img: "./images/img2.png",
    name: "Dr. John Smith",
    exp: "10+ years",
    fees: "$100",
    special:
      "Stress,Relationship,Self development,Anxiety,Work related,Sleep help",
  },
  {
    img: "./images/img2.png",
    name: "Dr. John Smith",
    exp: "10+ years",
    fees: "$100",
    special:
      "Stress,Relationship,Self development,Anxiety,Work related,Sleep help",
  },
  {
    img: "./images/img2.png",
    name: "Dr. John Smith",
    exp: "10+ years",
    fees: "$100",
    special:
      "Stress,Relationship,Self development,Anxiety,Work related,Sleep help",
  },
  {
    img: "./images/img2.png",
    name: "Dr. John Smith",
    exp: "10+ years",
    fees: "$100",
    special:
      "Stress,Relationship,Self development,Anxiety,Work related,Sleep help",
  },
  {
    img: "./images/img2.png",
    name: "Dr. John Smith",
    exp: "10+ years",
    fees: "$100",
    special:
      "Stress,Relationship,Self development,Anxiety,Work related,Sleep help",
  },
  {
    img: "./images/img2.png",
    name: "Dr. John Smith",
    exp: "10+ years",
    fees: "$100",
    special:
      "Stress,Relationship,Self development,Anxiety,Work related,Sleep help",
  },
];

const Therapist = () => {
  const navigate = useNavigate();

  function handleBookSession() {
    // const token = localStorage.getItem("token");
    // if (token) {
    //   console.log("user is logged in");
    //   navigate("/bookSession");
    // } else {
    //   console.log("user is not looged in");
    //   navigate("/login");
    // }
    navigate("/bookSession");
  }
  function handleViewDetials() {
    // const token = localStorage.getItem("token");
    // if (token) {
    //   console.log("user is logged in");
    //   navigate("/bookSession");
    // } else {
    //   console.log("user is not looged in");
    //   navigate("/login");
    // }
    navigate("/viewDetails");
  }

  return (
    <div className="p-3 max-w-screen-xl h-full flex flex-col justify-center items-center gap-12 mx-auto">
      <div>Filter</div>
      <div className="flex p-3 flex-row gap-8 md:gap-4 justify-center xl:justify-between flex-wrap w-full">
        <div className="max-w-[400px] w-full bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="flex flex-col">
            <div className="flex justify-center items-center gap-4 max-w-1/2 w-full h-5/6 p-4">
              <img
                className="w-36 h-36 object-cover"
                src="./images/img2.png"
                alt="Therapist Photo"
              />
              <div className="max-w-1/2 w-full flex flex-col gap-1">
                <p className="text-[#101828] text-lg font-semibold">
                  Dr. John Smith
                </p>
                <p className="text-[#475467] text-base font-normal">
                  Experience: 10+ years
                </p>
                <p className="text-[#475467] text-base font-normal">
                  Hourly Fees: $100
                </p>
                <p className="text-[#475467] text-base font-normal">
                  Appoitment mode:Online via google meet
                </p>
              </div>
            </div>
            <div className="px-4">
              <h1 className="text-black font-semibold">Best help for:</h1>
              <p className="text-gray-600 mb-2">
                Stress, Relationship, Self development, Anxiety, Work related,
                Sleep help
              </p>
              <button
                className="my-4 bg-primaryIndigo hover:bg-blue-600 text-white px-4 py-2 rounded-full mr-2"
                onClick={() => {
                  handleBookSession();
                }}
              >
                Book a Session
              </button>
              <button
                onClick={() => navigate("/viewDetails")}
                className="my-4 bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-full"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-[400px] w-full bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="flex flex-col">
            <div className="flex justify-center items-center gap-4 max-w-1/2 w-full h-5/6 p-4">
              <img
                className="w-36 h-36 object-cover"
                src="./images/img2.png"
                alt="Therapist Photo"
              />
              <div className="max-w-1/2 w-full flex flex-col gap-1">
                <p className="text-[#101828] text-lg font-semibold">
                  Dr. John Smith
                </p>
                <p className="text-[#475467] text-base font-normal">
                  Experience: 10+ years
                </p>
                <p className="text-[#475467] text-base font-normal">
                  Hourly Fees: $100
                </p>
                <p className="text-[#475467] text-base font-normal">
                  Appoitment mode:Online via google meet
                </p>
              </div>
            </div>
            <div className="px-4">
              <h1 className="text-black font-semibold">Best help for:</h1>
              <p className="text-gray-600 mb-2">
                Stress, Relationship, Self development, Anxiety, Work related,
                Sleep help
              </p>
              <button
                className="my-4 bg-primaryIndigo hover:bg-blue-600 text-white px-4 py-2 rounded-full mr-2"
                onClick={() => {
                  handleBookSession();
                }}
              >
                Book a Session
              </button>
              <button
                onClick={() => navigate("/viewDetails")}
                className="my-4 bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-full"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-[400px] w-full bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="flex flex-col">
            <div className="flex justify-center items-center gap-4 max-w-1/2 w-full h-5/6 p-4">
              <img
                className="w-36 h-36 object-cover"
                src="./images/img2.png"
                alt="Therapist Photo"
              />
              <div className="max-w-1/2 w-full flex flex-col gap-1">
                <p className="text-[#101828] text-lg font-semibold">
                  Dr. John Smith
                </p>
                <p className="text-[#475467] text-base font-normal">
                  Experience: 10+ years
                </p>
                <p className="text-[#475467] text-base font-normal">
                  Hourly Fees: $100
                </p>
                <p className="text-[#475467] text-base font-normal">
                  Appoitment mode:Online via google meet
                </p>
              </div>
            </div>
            <div className="px-4">
              <h1 className="text-black font-semibold">Best help for:</h1>
              <p className="text-gray-600 mb-2">
                Stress, Relationship, Self development, Anxiety, Work related,
                Sleep help
              </p>
              <button
                className="my-4 bg-primaryIndigo hover:bg-blue-600 text-white px-4 py-2 rounded-full mr-2"
                onClick={() => {
                  handleBookSession();
                }}
              >
                Book a Session
              </button>
              <button
                onClick={() => {
                  handleViewDetials();
                }}
                className="my-4 bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-full"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Therapist;
