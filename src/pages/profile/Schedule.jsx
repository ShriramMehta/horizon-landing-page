import React, { useState } from "react";
import { BsDot } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { FiClock } from "react-icons/fi";
import { TbCopy } from "react-icons/tb";
// import { Textarea } from "@material-tailwind/component";
import TextField from "@mui/material/TextField";
import { FaRegStar } from "react-icons/fa";

const Schedule = () => {
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <div className="flex flex-col gap-16 max-w-screen-xl mx-auto mb-8">
      <div className="flex flex-col gap-8 mx-6">
        <h1 className="text-[#101828] text-2xl font-semibold">
          Upcoming Sessions
        </h1>
        <div className="py-4 px-8 flex gap-4 flex-col p-4 bg-white border-1 border-gray-300 border rounded-xl shadow-lg">
          <div className="bg-[#ECFDF3] rounded-full flex flex-row justify-center gap-0 items-center max-w-fit py-1 px-1">
            <BsDot className="text-3xl text-[#027A48] font-bold " />
            <p className="text-[#027A48] mr-2 font-bold">Upcoming</p>
          </div>
          <div className="flex gap-12 items-center mt-2">
            <div>
              <img
                className="w-28 h-28 object-cover rounded-full shadow-lg"
                src="/images/img2.png"
                alt="Therapist Photo"
              />
            </div>
            <div className="flex flex-col gap-2 justify-center">
              <h1 className="text-[#101828] text-xl font-semibold">
                Session with Shivangi Khatter
              </h1>
              <h2 className="text-[#475467] text-xl font-medium">
                Stress, Depression, Anxiety, Sleep Help
              </h2>
            </div>
          </div>
          <div className="flex gap-4 items-center mt-4">
            <div className="flex gap-2 items-center">
              <CiCalendar className="text-[#344054] text-2xl" />
              <div className="text-[#040000] font-semibold text-lg">
                Sat, 17 June
              </div>
            </div>
            <div className="text-[#475467] font-medium text-lg">
              Afternoon, 12pm
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex gap-2 items-center">
              <FiClock className="text-[#344054] text-2xl" />
              <div className="text-[#040000] font-semibold text-lg">1 hour</div>
            </div>
            <div className="text-[#475467] font-medium text-lg">
              Online via Google Meet
            </div>
          </div>
          <div className="flex gap-4 items-center mt-4">
            <button className="flex gap-4 py-3 px-4 border border-1 border-gray-300 rounded-xl items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 256 211"
              >
                <path
                  fill="#00832D"
                  d="m144.822 105.322l24.957 28.527l33.562 21.445l5.838-49.792l-5.838-48.669l-34.205 18.839z"
                />
                <path
                  fill="#0066DA"
                  d="M0 150.66v42.43c0 9.688 7.864 17.554 17.554 17.554h42.43l8.786-32.059l-8.786-27.925l-29.11-8.786z"
                />
                <path
                  fill="#E94235"
                  d="M59.984 0L0 59.984l30.876 8.765l29.108-8.765l8.626-27.545z"
                />
                <path fill="#2684FC" d="M.001 150.679h59.983V59.983H.001z" />
                <path
                  fill="#00AC47"
                  d="M241.659 25.398L203.34 56.834v98.46l38.477 31.558c5.76 4.512 14.186.4 14.186-6.922V32.18c0-7.403-8.627-11.495-14.345-6.781"
                />
                <path
                  fill="#00AC47"
                  d="M144.822 105.322v45.338H59.984v59.984h125.804c9.69 0 17.553-7.866 17.553-17.554v-37.796z"
                />
                <path
                  fill="#FFBA00"
                  d="M185.788 0H59.984v59.984h84.838v45.338l58.52-48.49V17.555c0-9.69-7.864-17.554-17.554-17.554"
                />
              </svg>
              <div className="text-[#000000] text-lg font-normal">
                Copy Meeting Link
              </div>
            </button>{" "}
            <button className="flex gap-4 py-3 px-4 border border-1 border-gray-300 rounded-xl items-center ">
              <TbCopy className="text-[#475467] text-3xl" />
              <div className="text-[#000000] text-lg font-normal">
                Copy Meeting Link
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 mx-6">
        <h1 className="text-[#101828] text-2xl font-semibold">
          Previous Sessions
        </h1>
        <div className="w-full flex flex-row items-center justify-center gap-8">
          <div className="py-4 px-8 max-w-[600px] flex gap-4 flex-col p-4 bg-white border-1 border-gray-300 border rounded-xl shadow-lg">
            <div className="bg-[#FFFAEB] rounded-full flex flex-row justify-center gap-0 items-center max-w-fit py-2 px-2">
              <p className="text-[#DC6803] font-bold">Cancelled</p>
            </div>
            <div className="flex gap-8 items-center mt-2">
              <img
                className="w-28 h-28 object-cover rounded-full shadow-lg"
                src="/images/img2.png"
                alt="Therapist Photo"
              />
              <div className="flex flex-col gap-2 justify-center">
                <h1 className="text-[#101828] text-xl font-semibold">
                  Session with Shivangi Khatter
                </h1>
                <h2 className="text-[#475467] text-xl font-medium">
                  Stress, Depression, Anxiety, Sleep Help
                </h2>
              </div>
            </div>
            <div className="flex gap-4 items-center mt-4">
              <div className="flex gap-2 items-center">
                <CiCalendar className="text-[#344054] text-2xl" />
                <div className="text-[#040000] font-semibold text-lg">
                  Sat, 17 June
                </div>
              </div>
              <div className="text-[#475467] font-medium text-lg">
                Afternoon, 12pm
              </div>
            </div>
            <div className="flex gap-4 items-center mb-4">
              <div className="flex gap-2 items-center">
                <FiClock className="text-[#344054] text-2xl" />
                <div className="text-[#040000] font-semibold text-lg">
                  1 hour
                </div>
              </div>
              <div className="text-[#475467] font-medium text-lg">
                Online via Google Meet
              </div>
            </div>
          </div>
          <div className="py-4 px-8 max-w-[600px] flex gap-4 flex-col p-4 bg-white border-1 border-gray-300 border rounded-xl shadow-lg">
            {showFeedback ? (
              <div className="flex flex-col gap-4 justify-center">
                <div className="flex justify-between gap-16 items-center">
                  <div className="text-[#101828] text-lg font-semibold">
                    Please let us know how your session went!{" "}
                  </div>
                  <button
                    onClick={() => {
                      setShowFeedback(false);
                    }}
                    className="bg-[#F0F0FE] text-[#0E0079] font-bold rounded-full flex flex-row justify-center gap-0 items-center max-w-fit h-5 w-5 p-4"
                  >
                    X
                  </button>
                </div>
                <div className="flex justify-center items-center">
                <TextField
          id="filled-multiline-static"
          label="Write your feedback here"
          multiline
          rows={4}
          variant="outlined"
          className="w-full rounded-xl"
        />
                </div>
                <div className="my-2 text-center w-full text-[#344054] text-lg font-semibold">
                  Rate Your session
                </div>
                <div className="flex gap-8 items-center justify-center">
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
                <button
          type="button"
          className="my-2 text-[#FFFFFF] bg-gray-300 hover:bg-purple-200 hover:text-[#FFFFFF] rounded-lg text-sm w-full ms-auto inline-flex py-2 justify-center items-center dark:hover:bg-purple-600 dark:hover:text-white"
          data-modal-hide="default-modal"
        >Submit Review</button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div className="bg-[#F0F0FE] rounded-full flex flex-row justify-center gap-0 items-center max-w-fit py-2 px-2">
                    <p className="text-[#0E0079] font-bold">Completed</p>
                  </div>
                  <button
                    onClick={() => {
                      setShowFeedback(true);
                    }}
                    className="bg-[#F0F0FE] rounded-full flex flex-row justify-center gap-0 items-center max-w-fit py-2 px-2"
                  >
                    <p className="text-[#0E0079] font-bold">Feedback</p>
                  </button>
                </div>
                <div className="flex gap-8 items-center mt-2">
                  <img
                    className="w-28 h-28 object-cover rounded-full shadow-lg"
                    src="/images/img2.png"
                    alt="Therapist Photo"
                  />
                  <div className="flex flex-col gap-2 justify-center">
                    <h1 className="text-[#101828] text-xl font-semibold">
                      Session with Shivangi Khatter
                    </h1>
                    <h2 className="text-[#475467] text-xl font-medium">
                      Stress, Depression, Anxiety, Sleep Help
                    </h2>
                  </div>
                </div>
                <div className="flex gap-4 items-center mt-4">
                  <div className="flex gap-2 items-center">
                    <CiCalendar className="text-[#344054] text-2xl" />
                    <div className="text-[#040000] font-semibold text-lg">
                      Sat, 17 June
                    </div>
                  </div>
                  <div className="text-[#475467] font-medium text-lg">
                    Afternoon, 12pm
                  </div>
                </div>
                <div className="flex gap-4 items-center mb-4">
                  <div className="flex gap-2 items-center">
                    <FiClock className="text-[#344054] text-2xl" />
                    <div className="text-[#040000] font-semibold text-lg">
                      1 hour
                    </div>
                  </div>
                  <div className="text-[#475467] font-medium text-lg">
                    Online via Google Meet
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
