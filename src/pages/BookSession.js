import React from "react";
// import {ArrowForwardIosIcon} from '@mui/icons-material';ss

const BookSession = () => {
  const repeatDivCal = Array(4)
    .fill(null)
    .map((_, idx) => (
      <div className="flex flex-col gap-0 justify-center items-center max-w-[76px] w-full max-h-[82px] h-full rounded-[16px] border-[1px] border-[#EAECF0] bg-[#EAECF0]">
        <div className="bg-[#7B3CF3] h-[30px] w-full text-center text-white py-[4px] rounded-tr-[16px] rounded-tl-[16px]">
          Sat
        </div>
        <div className="bg-white text-[#4E139F] pt-1 h-[30px] w-full text-center">
          28
        </div>
        <div className="text-sm text-[#667085] h-[20px] bg-white w-full text-center rounded-br-[16px] rounded-bl-[16px]">
          June
        </div>
      </div>
    ));

  const repeatDivTime = Array(4)
    .fill(null)
    .map((_, idx) => (
      <div className="max-w-[82px] w-full max-h-[30px] h-full rounded-[16px] flex justify-center items-center py-[12px] px-[4px] bg-[#EAECF0] border-[1px] border-[##EAECF0]">
        <p className="text-sm font-normal text-[#4E139F] text-center">
          12.00pm
        </p>
      </div>
    ));

  return (
    <div className="flex flex-col max-w-screen-lg h-screen mx-auto">
      <div>Book Session</div>
      <div className="shadow-xl flex flex-col gap-4 p-6">
        <div className="flex justify-center items-center">
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
                    className="w-[30px] h-[30px]"
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
        </div>
        <div className="flex flex-col gap-4">
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
        <div>
          <hr></hr>
        </div>
        <div>NOte</div>
      </div>
    </div>
  );
};

export default BookSession;
