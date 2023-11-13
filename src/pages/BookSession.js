import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router";

const AvailableDates = [
  {
    day: "Sat",
    date: "11",
    month: "June",
  },
  {
    day: "Mon",
    date: "13",
    month: "June",
  },
  {
    day: "Thur",
    date: "16",
    month: "June",
  },
  {
    day: "Sat",
    date: "18",
    month: "June",
  },
];

const AvailableTime = [
  {
    time: "10.00am",
  },
  {
    time: "12.00pm",
  },
  {
    time: "2.00pm",
  },
  {
    time: "8.00pm",
  },
];

const BookSession = () => {
  const navigate = useNavigate();
  const [selectedDateIdx, setselectedDateIdx] = useState(null);
  const [selectedTimeIdx, setselectedTimeIdx] = useState(null);

  const handleClick = () => {
    console.log(selectedDateIdx, selectedTimeIdx);
    navigate("/confirmBooking")
    // if (selectedDateIdx !== null && selectedTimeIdx !== null) {
    //   navigate(`/confirmBooking/${selectedDateIdx}/${selectedTimeIdx}`);
    // }
  };

  const repeatDivCal = AvailableDates.map((item, idx) => (
    <div
      key={idx}
      className={`cursor-pointer flex flex-col gap-0 justify-center items-center max-w-[76px] w-full max-h-[82px] h-full rounded-[16px] border-[1px] ${
        selectedDateIdx === idx
          ? "bg-[#4E139F] text-[#4E139F] border-[#4E139F]"
          : ""
      }`}
      onClick={() => {
        setselectedDateIdx(idx);
        setselectedTimeIdx(null); // Reset selected time
      }}
    >
      <div
        className={`bg-[#7B3CF3] h-[30px] w-full text-center text-white py-[4px] rounded-tr-[16px] rounded-tl-[16px]`}
      >
        {item.day}
      </div>
      <div
        className={`bg-white text-[#4E139F] pt-1 h-[30px] w-full text-center ${
          selectedDateIdx === idx ? "bg-[#ECE7FE] text-[#4E139F]" : ""
        }`}
      >
        {item.date}
      </div>
      <div
        className={`text-sm text-[#667085] h-[20px] bg-white w-full text-center rounded-br-[16px] rounded-bl-[16px] ${
          selectedDateIdx === idx ? "bg-[#ECE7FE] text-[#4E139F]" : ""
        }`}
      >
        {item.month}
      </div>
    </div>
  ));

  const repeatDivTime = AvailableTime.map((item, idx) => (
    <div
      key={idx}
      className={`cursor-pointer max-w-[82px] w-full max-h-[30px] h-full rounded-[16px] flex justify-center items-center py-[12px] px-[4px] border-[1px] ${
        selectedTimeIdx === idx
          ? "bg-[#ECE7FE] text-white border-[#4E139F]"
          : "bg-white"
      }`}
      onClick={() => setselectedTimeIdx(idx)}
    >
      <p
        className={`text-sm font-normal text-[#4E139F] text-center ${
          selectedTimeIdx === idx ? "text-[#4E139F]" : ""
        }`}
      >
        {item.time}
      </p>
    </div>
  ));

  return (
    <div className="flex flex-col max-w-screen-lg h-screen mx-auto">
      <div className="shadow-xl flex flex-col gap-4 p-6">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="flex justify-center items-center gap-4 max-w-1/2 w-full h-5/6 shadow-lg p-4">
            <img
              className="w-36 h-36 object-cover rounded-full shadow-lg"
              src="./images/img2.png"
              alt="Therapist Photo"
            />
            <div className="max-w-1/2 w-full flex flex-col gap-4">
              <p className="text-[#101828] text-lg font-semibold">
                Session with Shivangi Khatter
              </p>
              <p className="text-[#475467] text-base font-normal">
                Stress, Depression, Anxiety, Sleep Help
              </p>
            </div>
          </div>
          <div className="flex flex-col max-w-full w-full p-4 gap-4">
            <div className="flex flex-col gap-4">
              <p className="text-[#101828] text-xl font-semibold">
                Available Dates
              </p>
              <div className="flex flex-row items-center justify-start w-full gap-4">
                {repeatDivCal}
                <div className="flex justify-end mx-auto">
                  <img
                    src="./images/Chevron right.png"
                    alt="right"
                    className="w-[100px] md:w-[30px] h-[30px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-[#101828] text-lg font-semibold">
                Available Time Slots
              </p>
              <div className="flex flex-row items-center justify-start w-full gap-4">
                {repeatDivTime}
              </div>
            </div>
          </div>
          <div>
            <hr></hr>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-end md:mr-[30px] gap-12 items-center">
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <p className="text-[#101828] text-xl font-semibold">
              Session Pricing
            </p>
            <div className="flex gap-4">
              <div className="flex flex-row justify-center items-center font-semibold text-[#101828]">
                <img src="./images/currency-rupee.png" alt="rupee" />
                <span>800/hr</span>
              </div>
              <div className="max-w-[130px] w-full max-h-[30px] h-full rounded-[16px] flex justify-center items-center py-[2px] px-[6px] bg-[#F0F0FE] border-[1px] border-[##EAECF0]">
                <div className="flex flex-row justify-start items-center gap-2">
                  <p className="text-xs font-semibold text-[#4E139F] text-center">
                    Student Status
                  </p>
                  <img src="./images/Check Circle.png" alt="check" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-auto">
            <button
              onClick={handleClick}
              className="text-center bg-primaryIndigo hover-bg-lightBlue text-white px-4 py-2 rounded-full mr-2 flex justify-center items-center w-full md:w-auto"
              disabled={selectedDateIdx === null || selectedTimeIdx === null}
            >
              Book a Session
              <img src="./images/Chevron right white.png" alt="right" />
            </button>
          </div>
        </div>
        <div className="my-2 md:my-0 text-sm text-[#667085] h-[20px] bg-white w-full text-center rounded-br-[16px] rounded-bl-[16px]">
          Please Note: You will receive the Google Meet link for the session
          after the payment is completed.
        </div>
      </div>
    </div>
  );
};

export default BookSession;
