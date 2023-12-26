import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFilter } from "@fortawesome/free-solid-svg-icons";
import FilterModal from "./FilterModal";
import therapistService from "../../../services/therapistService";

const Therapist = () => {
  const navigate = useNavigate();
  const [filteredTherapists, setFilteredTherapists] = useState([]);
  const [therapistData, setTherapistData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await therapistService.getAllThearapists();
        // console.log(response);
        if (response.data.success) {
          // Parse the JSON-formatted strings into arrays
          const therapistsData = response.data.data.map((item) => {
            try {
              // Replace escaped double quotes with regular double quotes
              const fixedJsonString = item?.concernSpecialisation.replace(
                /\\"/g,
                '"'
              );
              return {
                ...item,
                concernSpecialisation: JSON.parse(fixedJsonString),
              };
            } catch (error) {
              console.error(
                `Error parsing JSON for therapist with ID ${item?.therapistId}:`,
                error
              );
              // return item; // Return the original item if parsing fails
              return null; // Return the original item if parsing fails
            }
          });
          setFilteredTherapists(therapistsData);
          setTherapistData(therapistsData);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const applyFilters = async (filters) => {
    console.log(filters);
    // const filteredData = therapistData.filter((therapist) => {
    //   return (
    //     therapist.specialisationInThearapyTypes.includes(filters.areaOfFocus) &&
    //     parseFloat(therapist?.yearsOfExperience) >= filters.experience
    //     (filters.gender === "" || therapist.gender === filters.gender) &&
    //     // (filters.languages.length === 0 || filters.languages.includes(therapist.languages)) &&
    //     // (filters.approach.length === 0 || filters.approach.some(approach => therapist.approach.includes(approach)))
    //   );
    // });
    try {
      const response = await therapistService.getFilteredTherapists(filters);
      if (response.data.success) {
        // Parse the JSON-formatted strings into arrays
        const therapistsData = response.data.data.map((item) => {
          try {
            // Replace escaped double quotes with regular double quotes
            const fixedJsonString = item?.concernSpecialisation.replace(
              /\\"/g,
              '"'
            );
            return {
              ...item,
              concernSpecialisation: JSON.parse(fixedJsonString),
            };
          } catch (error) {
            console.error(
              `Error parsing JSON for therapist with ID ${item?.therapistId}:`,
              error
            );
            // return item; // Return the original item if parsing fails
            return null; // Return the original item if parsing fails
          }
        });
        setFilteredTherapists(therapistsData);
        setTherapistData(therapistsData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() === "") {
      // If search term is empty, set filteredTherapists to the original data
      setFilteredTherapists(therapistData);
    } else {
      // If there is a search term, filter the data based on the name
      const filtered = therapistData.filter((therapist) =>
        String(therapist.name).toLowerCase().includes(term.toLowerCase())
      );
      setFilteredTherapists(filtered);
    }
  };

  return (
    <div className="mx-auto p-3 max-w-screen-xl h-full flex flex-col md:flex-col gap-2 justify-center md:gap-2 mx-auto items-center">
      <div className="p-3 flex flex-row gap-4 w-full md:w-1/4 md:mb-2 md:pb-2">
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
      <div className="overflow-auto h-screen flex p-3 flex-row gap-8 md:gap-4 justify-center xl:justify-center flex-wrap w-full">
        {filteredTherapists.length > 0 &&
          filteredTherapists.map((item, idx) => (
            <div
              key={idx}
              className="w-full bg-[#F7F7F7] shadow-xl rounded-2xl overflow-hidden"
            >
              <div className="flex flex-col">
                <div className="py-8 flex  flex-col md:flex-row justify-center items-center gap-6 md:gap-12 max-w-1/2 w-full h-5/6 p-4">
                  <img
                    className="w-40 h-40 object-cover rounded-xl"
                    src={item?.imgUrl}
                    alt="Therapist Photo"
                  />
                  <div className="max-w-1/2 w-full flex flex-col justify-center gap-1">
                    <p className="text-[#101828] text-xl font-bold mb-4">
                      {item?.name}
                    </p>
                    <p className="text-[#475467] text-base font-normal">
                      Experience:{" "}
                      <span className="font-semibold">
                        {item?.yearsOfExperience}+ years
                      </span>
                    </p>
                    <p className="text-[#475467] text-base font-normal">
                      Starting at <span className="font-semibold">Rs. 800</span>
                    </p>
                    <div className="flex items-center  w-full">
                      <p className="text-[#475467] text-base font-normal w-1/6">
                        Best help for:
                      </p>
                      <div className="flex flex-wrap gap-2 w-5/6">
                        {item?.concernSpecialisation
                          .slice(0, 5)
                          .map((specialization, index) => (
                            <div
                              key={index}
                              className="cursor-pointer max-w-[115px] w-full max-h-[50px] h-full rounded-[16px] flex justify-center items-center py-[12px] px-[4px] border-[1px] bg-white text-black border-[#4E139F]"
                            >
                              <p className="text-xs text-black font-medium text-[#344054] text-center">
                                {specialization}
                              </p>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-1/4">
                    <span className="text-[#475467] text-base font-normal">
                      Mode: <span className="font-semibold">Online</span>
                    </span>
                  </div>
                </div>
                <div className="px-2 pb-8">
                  {/* <div className="flex md:gap-4 items-center">
                    <h1 className="text-black font-semibold mx-8 text-xl w-1/6">
                      Best help for:
                    </h1>
                    <div className="ml-10 flex flex-wrap gap-2 w-full">
                      {item?.concernSpecialisation
                        .slice(0, 5)
                        .map((item, index) => (
                          <div
                            key={index}
                            className={
                              "cursor-pointer max-w-[115px] w-full max-h-[50px] h-full rounded-[16px] flex justify-center items-center py-[12px] px-[4px] border-[1px] bg-white text-black border-[#4E139F]"
                            }
                          >
                            <p className="text-xs text-black font-medium text-[#344054] text-center">
                              {item}
                            </p>
                          </div>
                        ))}
                    </div>
                  </div> */}
                  <button
                    className="my-4 bg-primaryIndigo hover:bg-blue-600 text-white px-4 py-2 rounded-full mr-2"
                    onClick={() =>
                      navigate(`/book-session/${item?.therapistId}`)
                    }
                  >
                    Book a Session
                  </button>
                  <button
                    onClick={() =>
                      navigate(`/view-details/${item?.therapistId}`)
                    }
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
