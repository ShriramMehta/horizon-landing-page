import React from "react";
// import {ArrowForwardIosIcon} from '@mui/icons-material';ss

const BookSession = () => {
  const repeatDiv = Array(4)
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

  return (
    <div className="flex flex-col max-w-screen-lg h-screen mx-auto">
      <div>Book Session</div>
      <div className="shadow-xl flex flex-col gap-4 p-6">
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center gap-4 max-w-1/2 w-full shadow-lg p-4">
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
          <div className="flex flex-col max-w-full w-full p-4">
            <div className="flex flex-col gap-4">
              <p className="text-[#101828] text-xl font-semibold">
                Available Dates
              </p>
              <div className="flex flex-row w-full gap-4">{repeatDiv}</div>
              <div>
                <svg
                  height="512px"
                  id="Layer_1"
                  style="enable-background:new 0 0 512 512;"
                  version="1.1"
                  viewBox="0 0 512 512"
                  width="512px"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <polygon points="160,128.4 192.3,96 352,256 352,256 352,256 192.3,416 160,383.6 287.3,256 " />
                </svg>
              </div>
            </div>
            <div>Available Time Slots</div>
          </div>
        </div>
        <div>Session Pricing</div>
        <div>
          <hr></hr>
        </div>
        <div>NOte</div>
      </div>
    </div>
  );
};

export default BookSession;
