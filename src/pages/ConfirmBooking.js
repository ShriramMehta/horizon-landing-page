import React from "react";
import { useNavigate } from "react-router";

const ConfirmBooking = () => {
  const navigate = useNavigate();

  function handleClick() {
    // navigate('/payment')
    console.log("Open modal");
  }

  return (
    <div className="flex flex-col max-w-screen-lg h-full mx-auto">
      <div className="shadow-xl flex flex-col gap-4 p-6">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-1/2 w-full h-5/6 shadow-lg p-4 pb-8">
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
              <div>
                <hr></hr>
              </div>
              <div className="w-full flex flex-col gap-4 justify-center items-center">
                <div className="w-full flex flex-row gap-2 justify-start items-center">
                  <img src="./images/calendar.png" alt="calender" />
                  <p className="text-[#101828] text-base font-semibold">
                    Sat, 28 June
                  </p>
                  <p className="text-[#475467] text-base">Afternoon, 12pm</p>
                </div>
                <div className="w-full flex flex-row gap-2 justify-start items-center">
                  <img src="./images/clock.png" alt="calender" />
                  <p className="text-[#101828] text-base font-semibold">
                    1 hour
                  </p>
                  <p className="text-[#475467] text-base">
                    Online via Google Meet
                  </p>
                </div>
                <div className="w-full flex flex-row gap-2 justify-start items-center">
                  <img src="./images/currency-rupee.png" alt="rupee" />
                  <p className="text-[#101828] text-base font-semibold">
                    800
                  </p>{" "}
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
              <div className="w-full md:w-auto mt-5">
                <button
                  onClick={() => handleClick()}
                  className="w-full justify-center text-center bg-primaryIndigo hover:bg-lightBlue text-white px-4 py-2 rounded-full mr-2 flex justify-between items-center"
                >
                  Pay Rs. 800
                  <img
                    src="./images/Chevron right white.png"
                    alt="right"
                    // className="w-[30px] h-[30px]"
                  />
                </button>{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col max-w-full w-full gap-4 p-6">
            <div className="flex flex-col gap-4">
              <p className="text-[#101828] text-xl font-semibold">
                Choose Payment Method
              </p>
              <div className="flex flex-row items-center justify-start w-full gap-4 mt-4">
                <div className="w-5/6 flex flex-col gap-2">
                  <p className="text-[#101828] text-base font-semibold">UPI </p>
                  <div className="w-full cursor-pointer flex gap-3 px-[12px] py-[8px] border-[1px] border-[#EAECF0] rounded-[8px] hover:bg-[#A581FF] hover:border-[#A581FF] hover:text-white">
                    <img src="./images/GPay Icon.png" alt="gpay" />
                    <p>Google Pay</p>
                  </div>
                  <div className="w-full cursor-pointer flex gap-3 px-[12px] py-[8px] border-[1px] border-[#EAECF0] rounded-[8px] hover:bg-[#A581FF] hover:border-[#A581FF] hover:text-white">
                    <img src="./images/Phone Pay Icon.png" alt="phonepay" />
                    <p>Phone Pay</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start w-full gap-4 mt-3">
              <div className="w-5/6 flex flex-col gap-2">
                <p className="text-[#101828] text-base font-semibold">
                  Card Payment{" "}
                </p>
                <div className="w-full flex justify-between cursor-pointer flex gap-3 px-[12px] py-[8px] border-[1px] border-[#EAECF0] rounded-[8px]">
                  <p className="text-[#101828]">Debit/Credit Card</p>
                  <img
                    src="./images/Chevron right.png"
                    alt="right"
                    className="w-[25px] h-[25px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start w-full gap-4 mt-3">
              <div className="w-5/6 flex flex-col gap-2">
                <p className="text-[#101828] text-base font-semibold">
                  Net Banking{" "}
                </p>
                <div className="w-full cursor-pointer flex gap-3 px-[12px] py-[8px] border-[1px] border-[#EAECF0] rounded-[8px] flex justify-between">
                  <p className="text-[#101828]">Select Bank</p>
                  <img
                    src="./images/Chevron right.png"
                    alt="right"
                    className="w-[25px] h-[25px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBooking;
