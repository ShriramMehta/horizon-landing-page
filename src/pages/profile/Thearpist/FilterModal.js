import React, { useState, useEffect } from "react";
import "react-phone-number-input/style.css";
import Slider from "@mui/material/Slider";

import {
  ApprochesData,
  FocusData,
  LanguagesData,
  genderData,
} from "../../../constants/filtersData";

const FilterModal = ({ closeModal, applyFilters }) => {
  const [experience, setExperience] = useState(1);
  const [gender, setGender] = useState("");
  const [languages, setLanguages] = useState([]);
  const [areaOfFocus, setAreaOfFocus] = useState([]);
  const [selectedApproaches, setSelectedApproaches] = useState([]);

  const progressBarStyle = {
    width: `${(experience / 10) * 90 + 10}%`,
  };

  const handleCheckboxChange = (selectedApproach) => {
    // Check if the approach is already selected
    if (selectedApproaches.includes(selectedApproach)) {
      // If already selected, remove it from the selected approaches
      setSelectedApproaches((prevApproaches) =>
        prevApproaches.filter((approach) => approach !== selectedApproach)
      );
    } else {
      // If not selected, add it to the selected approaches
      setSelectedApproaches((prevApproaches) => [
        ...prevApproaches,
        selectedApproach,
      ]);
    }
  };

  const handleAreaofFocus = (selectedItems) => {
    if (areaOfFocus.includes(selectedItems)) {
      // If already selected, remove it from the selected languages
      setAreaOfFocus((prevItem) =>
        prevItem.filter((lang) => lang !== selectedItems)
      );
    } else {
      // If not selected, add it to the selected languages
      setAreaOfFocus((prevItem) => [...prevItem, selectedItems]);
    }
  };

  const handleLanguageClick = (selectedLanguage) => {
    // Check if the language is already selected
    if (languages.includes(selectedLanguage)) {
      // If already selected, remove it from the selected languages
      setLanguages((prevLanguages) =>
        prevLanguages.filter((lang) => lang !== selectedLanguage)
      );
    } else {
      // If not selected, add it to the selected languages
      setLanguages((prevLanguages) => [...prevLanguages, selectedLanguage]);
    }
  };

  const handleApplyFilters = () => {
    const filters = {
      genders: gender,
      languages,
      concerns: areaOfFocus,
      yearsOfExperience: experience,
      approaches: selectedApproaches,
    };

    applyFilters(filters);
    console.log(filters);
    closeModal(false);
  };

  const handleClearAll = () => {
    setExperience(1);
    setGender("");
    setLanguages([]);
    setAreaOfFocus([]);
    setSelectedApproaches([]);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="overflow-y-scroll md:fixed inset-0 bg-black opacity-60"></div>
      <div className="w-[400px] md:w-[800px] rounded-[12px] gap-3 bg-white flex flex-col p-[25px] relative">
        <div className="flex w-full items-center">
          <div className="text-[#101828] text-lg font-medium w-full text-center">
            Filter
          </div>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-purple-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-purple-600 dark:hover:text-white"
            data-modal-hide="default-modal"
            onClick={() => closeModal(false)}
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <hr></hr>
        <div className="flex flex-col md:flex-row justify-center w-full gap-4 md:gap-12">
          <div className="flex flex-col gap-6 md:w-1/2">
            <div className="text-[#101828] font-semibold text-lg">
              Areas of focus
            </div>
            <div className="flex flex-wrap gap-1">
              {FocusData.map((item, idx) => (
                <div
                  key={idx}
                  className={`cursor-pointer mx-auto max-w-[110px] w-full max-h-[30px] h-full rounded-[16px] flex justify-center items-center py-[18px] px-[6px] border-[1px] ${
                    areaOfFocus.includes(item)
                      ? "bg-[#ECE7FE] text-white border-[#4E139F]"
                      : "bg-white"
                  }`}
                  onClick={() => handleAreaofFocus(item)}
                >
                  <p className="text-xs font-normal text-[#344054] text-center">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 md:w-1/2">
            <div className="flex justify-between px-4 mb-8">
              <div className="text-[#101828] font-semibold text-lg">
                Years of Experience
              </div>
              <div className="text-[#7B3CF3] text-base font-medium">
                {experience} years
              </div>
            </div>
            <Slider
              className="w-full"
              value={experience}
              onChange={(event, val) => setExperience(val)}
              valueLabelDisplay="auto"
              valueLabelFormat={(val) => `${val} year${val !== 1 ? "s" : ""}`}
              min={1}
              max={10}
              defaultValue={1}
              sx={{ color: "#7b3cf3" }}
            />
            <div className="text-sm text-[#344054] flex justify-between w-full px-4">
              <p>1 year</p>
              <p>10 year</p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="flex flex-col  md:flex-row w-full gap-12">
          <div className="flex flex-col gap-6 md:w-1/2">
            <div className="text-[#101828] font-semibold text-lg">Gender</div>
            <div className="flex flex-wrap gap-1">
              {genderData.map((item, idx) => (
                <div
                  key={idx}
                  className={`cursor-pointer max-w-[82px] w-full max-h-[30px] h-full rounded-[16px] flex justify-center items-center py-[12px] px-[4px] border-[1px] ${
                    gender === item
                      ? "bg-[#ECE7FE] text-white border-[#4E139F]"
                      : "bg-white"
                  }`}
                  onClick={() => setGender(item)}
                >
                  <p className="text-xs font-normal text-[#344054] text-center">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 md:w-1/2">
            <div className="text-[#101828] font-semibold text-lg">
              Languages
            </div>
            <div className="flex flex-wrap gap-1">
              {LanguagesData.map((item, idx) => (
                <div
                  key={idx}
                  className={`cursor-pointer mx-auto max-w-[80px] w-full max-h-[30px] h-full rounded-[16px] flex justify-center items-center py-[14px] px-[4px] border-[1px] ${
                    languages.includes(item)
                      ? "bg-[#ECE7FE] text-white border-[#4E139F]"
                      : "bg-white"
                  }`}
                  onClick={() => handleLanguageClick(item)}
                >
                  <p className="text-xs font-normal text-[#344054] text-center">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="flex flex-col gap-6 w-full">
          <div className="text-[#101828] font-semibold text-lg">Approch</div>
          <div className="flex flex-col gap-2 md:flex-row justify-between">
            {ApprochesData.map((item, idx) => (
              <div key={idx} className="flex justify-between gap-2">
                <label>{item}</label>
                <input
                  type="checkbox"
                  className="cursor-pointer"
                  onChange={() => handleCheckboxChange(item)}
                  checked={selectedApproaches.includes(item)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center w-full items-center">
          <button
            onClick={() => handleClearAll()}
            className="my-4 bg-gray-300  text-black px-12 py-2 rounded-full mr-2"
          >
            Clear All
          </button>
          <button
            onClick={() => handleApplyFilters()}
            className="my-4 bg-primaryIndigo hover:bg-purple-600 text-white px-12 py-2 rounded-full mr-2"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
