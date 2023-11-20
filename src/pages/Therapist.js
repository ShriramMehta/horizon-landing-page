import React, { useState } from "react";
import { useNavigate } from "react-router";
import TherapistFilterModal from "../components/TherapistFilterModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFilter } from "@fortawesome/free-solid-svg-icons";


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
    exp: "5+ years",
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
    name: "Dr. Siddhi ABC",
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
  const [filteredTherapists, setFilteredTherapists] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  function handleBookSession() {
    navigate("/bookSession");
  }
  function handleViewDetials() {
    navigate("/viewDetails");
  }

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filtered = TherapistData.filter((therapist) =>
      String(therapist.name).toLowerCase().includes(term.toLowerCase())
    );
    setFilteredTherapists(filtered);
  };

  return (
    <div className="p-3 max-w-screen-xl h-full flex flex-col justify-center items-center gap-12 mx-auto">
      <div className="flex flex-row gap-4 w-full justify-center">
      <div className="relative">
        <input
          placeholder="Search Thearpist"
          className="relative border px-10 py-3 rounded-[16px] border-black"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-[10px] top-[16px] text-gray-500"
        />
      </div>
      <div className="cursor-pointer relative flex gap-3 items-center border-black border px-4 py-2 rounded-[16px]">
        <FontAwesomeIcon
          icon={faFilter}
          className="text-gray-500"
        />
        <p>Filters</p>
      </div>
      </div>
      <div className="flex p-3 flex-row gap-8 md:gap-4 justify-center xl:justify-between flex-wrap w-full">
        {filteredTherapists.length > 0
          ? filteredTherapists.map((item, idx) => (
              <div
                key={idx}
                className="max-w-[400px] w-full bg-white shadow-xl rounded-2xl overflow-hidden"
              >
                <div className="flex flex-col">
                  <div className="flex justify-center items-center gap-4 max-w-1/2 w-full h-5/6 p-4">
                    <img
                      className="w-36 h-36 object-cover"
                      src={item.img}
                      alt="Therapist Photo"
                    />
                    <div className="max-w-1/2 w-full flex flex-col gap-1">
                      <p className="text-[#101828] text-lg font-semibold">
                        {item.name}
                      </p>
                      <p className="text-[#475467] text-base font-normal">
                        Experience: {item.exp}
                      </p>
                      <p className="text-[#475467] text-base font-normal">
                        Hourly Fees: {item.fees}
                      </p>
                      <p className="text-[#475467] text-base font-normal">
                        Appoitment mode:Online via google meet
                      </p>
                    </div>
                  </div>
                  <div className="px-4">
                    <h1 className="text-black font-semibold">Best help for:</h1>
                    <p className="text-gray-600 mb-2">{item.special}</p>
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
            ))
          : TherapistData.map((item, idx) => (
              <div
                key={idx}
                className="max-w-[400px] w-full bg-white shadow-xl rounded-2xl overflow-hidden"
              >
                <div className="flex flex-col">
                  <div className="flex justify-center items-center gap-4 max-w-1/2 w-full h-5/6 p-4">
                    <img
                      className="w-36 h-36 object-cover"
                      src={item.img}
                      alt="Therapist Photo"
                    />
                    <div className="max-w-1/2 w-full flex flex-col gap-1">
                      <p className="text-[#101828] text-lg font-semibold">
                        {item.name}
                      </p>
                      <p className="text-[#475467] text-base font-normal">
                        Experience: {item.exp}
                      </p>
                      <p className="text-[#475467] text-base font-normal">
                        Hourly Fees: {item.fees}
                      </p>
                      <p className="text-[#475467] text-base font-normal">
                        Appoitment mode:Online via google meet
                      </p>
                    </div>
                  </div>
                  <div className="px-4">
                    <h1 className="text-black font-semibold">Best help for:</h1>
                    <p className="text-gray-600 mb-2">{item.special}</p>
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
            ))}
      </div>
    </div>
  );
};

export default Therapist;
