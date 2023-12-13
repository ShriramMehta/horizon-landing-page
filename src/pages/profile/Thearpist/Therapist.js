import React, { useState } from "react";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFilter } from "@fortawesome/free-solid-svg-icons";
import FilterModal from "./FilterModal";

const TherapistData = [
  {
    img: "./images/img2.png",
    name: "Dr. John Smith",
    exp: 1,
    fees: "$100",
    special: [
      "Stress",
      "Relationship",
      "Self development",
      "Anxiety",
      "Work related",
      "Sleep help",
    ],
  },
  {
    img: "./images/img2.png",
    name: "Dr. John Smith",
    exp: 5,
    fees: "$100",
    special: ["Self development", "Anxiety", "Work related", "Sleep help"],
  },
  {
    img: "./images/img2.png",
    name: "Dr. John Smith",
    exp: 4,
    fees: "$100",
    special: ["Stress", "Relationship", "Anxiety", "Work related"],
  },
  {
    img: "./images/img2.png",
    name: "Dr. John Smith",
    exp: 10,
    fees: "$100",
    special: [
      "Stress",
      "Relationship",
      "Self development",
      "Anxiety",
      "Work related",
      "Sleep help",
    ],
  },
  {
    img: "./images/img2.png",
    name: "Dr. Siddhi ABC",
    exp: 8,
    fees: "$100",
    special: [
      "Stress",
      "Relationship",
      "Self development",
      "Anxiety",
      "Work related",
      "Sleep help",
    ],
  },
  {
    img: "./images/img2.png",
    name: "Dr. John Smith",
    exp: 6,
    fees: "$100",
    special: ["Stress", "Relationship", "Anxiety", "Sleep help"],
  },
];

const Therapist = () => {
  const navigate = useNavigate();
  const [filteredTherapists, setFilteredTherapists] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [openModal, setOpenModal] = useState(false);

  function handleBookSession() {
    navigate("/bookSession");
  }
  function handleViewDetials() {
    navigate("/viewDetails");
  }

  const applyFilters = (filters) => {
    console.log(filters.experience);
    console.log(filters.areaOfFocus);
    const filteredData = TherapistData.filter((therapist) => {
      return (
        // therapist.special.includes(filters.areaOfFocus) &&
        parseFloat(therapist.exp) >= filters.experience
        // (filters.gender === "" || therapist.gender === filters.gender) &&
        // (filters.languages.length === 0 || filters.languages.includes(therapist.languages)) &&
        // (filters.approach.length === 0 || filters.approach.some(approach => therapist.approach.includes(approach)))
      );
    });

    setFilteredTherapists(filteredData);
  };

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() === "") {
      // If search term is empty, set filteredTherapists to the original data
      setFilteredTherapists(TherapistData);
    } else {
      // If there is a search term, filter the data based on the name
      const filtered = TherapistData.filter((therapist) =>
        String(therapist.name).toLowerCase().includes(term.toLowerCase())
      );
      setFilteredTherapists(filtered);
    }
  };

  return (
    <div className="mx-auto p-3 max-w-screen-xl h-full flex flex-row gap-20 mx-auto">
      <div className="p-3 flex flex-row gap-4 w-1/4 h-fit">
        <div className="relative">
          <input
            placeholder="Search Thearpist"
            className="relative border px-10 py-3 rounded-[32px] border-black"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-[10px] top-[16px] text-gray-500"
          />
        </div>
        <div
          onClick={() => setOpenModal(true)}
          className="cursor-pointer relative flex justify-center flex-col gap-1 border-primaryIndigo border px-4 py-1 rounded-full"
        >
          <FontAwesomeIcon icon={faFilter} className="text-primaryIndigo" />
          {/* <p>Filters</p> */}
        </div>
        {openModal && (
          <FilterModal closeModal={setOpenModal} applyFilters={applyFilters} />
        )}
      </div>
      <div className="flex p-3 flex-row gap-8 md:gap-4 justify-center xl:justify-center flex-wrap w-full">
        {filteredTherapists.length > 0
          ? filteredTherapists.map((item, idx) => (
            <div
            key={idx}
            className="w-full bg-[#F7F7F7] shadow-xl rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col">
              <div className="flex justify-center items-center gap-12 max-w-1/2 w-full h-5/6 p-4">
                <img
                  className="w-40 h-40 object-cover"
                  src={item.img}
                  alt="Therapist Photo"
                />
                <div className="max-w-1/2 w-full flex flex-col gap-1">
                  <p className="text-[#101828] text-xl font-bold my-4">
                    {item.name}
                  </p>
                  <p className="text-[#475467] text-base font-normal">
                    Experience: <span className="font-semibold">{"  "}{item.exp}+ years</span>
                  </p>
                  <p className="text-[#475467] text-base font-normal">
                    Hourly Fees:  <span className="font-semibold">{"  "} {item.fees}</span>
                  </p>
                  <p className="text-[#475467] text-base font-normal">
                    Mode: <span className="font-semibold">{"  "}Online via google meet</span>
                  </p>
                </div>
              </div>
              <div className="px-4">
                <div className="flex gap-4 items-center">
                <h1 className="text-black font-semibold mx-8">Expertise:</h1>
                <div className="flex flex-wrap gap-2 w-full">
                  {item.special.map((specialization, index) => (
                    <div
                      key={index}
                      className={
                        "cursor-pointer max-w-[90px] w-full max-h-[35px] h-full rounded-[16px] flex justify-center items-center py-[12px] px-[4px] border-[1px] bg-white text-black border-[#4E139F]"
                      }
                    >
                      <p className="text-xs text-black font-medium text-[#344054] text-center">
                        {specialization}
                      </p>
                    </div>
                  ))}
                </div>
                </div>
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
                className="w-full bg-[#F7F7F7] shadow-xl rounded-2xl overflow-hidden"
              >
                <div className="flex flex-col">
                  <div className="flex justify-center items-center gap-12 max-w-1/2 w-full h-5/6 p-4">
                    <img
                      className="w-40 h-40 object-cover"
                      src={item.img}
                      alt="Therapist Photo"
                    />
                    <div className="max-w-1/2 w-full flex flex-col gap-1">
                      <p className="text-[#101828] text-xl font-bold my-4">
                        {item.name}
                      </p>
                      <p className="text-[#475467] text-base font-normal">
                        Experience: <span className="font-semibold">{"  "}{item.exp}+ years</span>
                      </p>
                      <p className="text-[#475467] text-base font-normal">
                        Hourly Fees:  <span className="font-semibold">{"  "} {item.fees}</span>
                      </p>
                      <p className="text-[#475467] text-base font-normal">
                        Mode: <span className="font-semibold">{"  "}Online via google meet</span>
                      </p>
                    </div>
                  </div>
                  <div className="px-4">
                    <div className="flex gap-4 items-center">
                    <h1 className="text-black font-semibold mx-8">Expertise:</h1>
                    <div className="flex flex-wrap gap-2 w-full">
                      {item.special.map((specialization, index) => (
                        <div
                          key={index}
                          className={
                            "cursor-pointer max-w-[90px] w-full max-h-[35px] h-full rounded-[16px] flex justify-center items-center py-[12px] px-[4px] border-[1px] bg-white text-black border-[#4E139F]"
                          }
                        >
                          <p className="text-xs text-black font-medium text-[#344054] text-center">
                            {specialization}
                          </p>
                        </div>
                      ))}
                    </div>
                    </div>
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
