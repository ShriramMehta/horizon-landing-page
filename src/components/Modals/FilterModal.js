import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router";
import ReactSlider from "react-slider";

const genderData = ["Female", "Male", "Non Binary", "Others"];

const FocusData = [
  "Stress",
  "Anxiety",
  "Depression",
  "Sleep Help",
  "Grief and loss",
  "Self development",
  "Relationships",
  "Family",
  "Work related",
];

const LanguagesData = [
  "English",
  "Hindi",
  "Marathi",
  "Gujarati",
  "Bengali",
  "Tamil",
  "Telgu",
  "Punjabi",
];

const ApprochesData = [
  "CBT",
  "DBT",
  "RBT",
  "Psychodynamic",
  "Humanistic",
  "Mindfulness based",
];



const FilterModal = ({ closeModal }) => {

  
  const [value, setValue] = useState(2);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-60"></div>
      <div className="w-[800px] rounded-[12px] gap-3 bg-white flex flex-col p-[25px] relative">
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
        <div className="flex w-full gap-12">
          <div className="flex flex-col gap-6 w-1/2">
            <div className="text-[#101828] font-semibold text-lg">
              Areas of focus
            </div>
            <div className="flex flex-wrap gap-1">
              {FocusData.map((item, idx) => (
                <div
                  key={idx}
                  className="cursor-pointer mx-auto max-w-[110px] w-full max-h-[30px] h-full rounded-[16px] flex justify-center items-center py-[18px] px-[6px] border-[1px]"
                >
                  <p className="text-xs font-normal text-[#344054] text-center">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 w-1/2">
            <div className="flex justify-between px-4 mb-8">
              <div className="text-[#101828] font-semibold text-lg">
                Years of Experience
              </div>
              <div className="text-[#7B3CF3] text-base font-medium">
                {value} years
              </div>
            </div>
            <div className="slider-container flex justify-center items-center" >
              <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                min={1}
                max={10}
                value={value}
                onChange={(val) => setValue(val)}
              />
            </div>
            <div className="text-sm text-[#344054] flex justify-between w-full px-4">
              <p>1 year</p>
              <p>10 year</p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="flex w-full gap-12">
          <div className="flex flex-col gap-6 w-1/2">
            <div className="text-[#101828] font-semibold text-lg">Gender</div>
            <div className="flex flex-wrap gap-1">
              {genderData.map((item, idx) => (
                <div
                  key={idx}
                  className="cursor-pointer mx-auto max-w-[80px] w-full max-h-[30px] h-full rounded-[16px] flex justify-center items-center py-[14px] px-[4px] border-[1px]"
                >
                  <p className="text-xs font-normal text-[#344054] text-center">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 w-1/2">
            <div className="text-[#101828] font-semibold text-lg">
              Languages
            </div>
            <div className="flex flex-wrap gap-1">
              {LanguagesData.map((item, idx) => (
                <div
                  key={idx}
                  className="cursor-pointer mx-auto max-w-[80px] w-full max-h-[30px] h-full rounded-[16px] flex justify-center items-center py-[14px] px-[4px] border-[1px]"
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
          <div className="flex justify-between">
            {ApprochesData.map((item, idx) => (
              <div key={idx} className="flex gap-2">
                <input type="checkbox" className="cursor-pointer" />
                <label>{item}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center w-full items-center">
          <button className="my-4 bg-gray-300  text-black px-12 py-2 rounded-full mr-2">
            Clear All
          </button>
          <button className="my-4 bg-primaryIndigo hover:bg-purple-600 text-white px-12 py-2 rounded-full mr-2">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
