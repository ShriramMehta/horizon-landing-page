import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { CiSquareInfo } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { CiFileOn } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import { useNavigate } from "react-router";
import { useAuth } from "../../../hooks/useAuth";

let concerns = [
  "Stress",
  "Anxiety",
  "Depression",
  "Sleep Help",
  "Grief and loass",
  "Self Esteem",
  "Family",
  "Burnout",
  "Realtionships",
];

const Settings = () => {
  const navigate = useNavigate();

  const { user, logOutUser } = useAuth();
  const [selectedConcerns, setSelectedConcerns] = React.useState([
    "Stress",
    "Anxiety",
    "Depression",
    "Sleep Help",
  ]);

  const handleLogout = () => {
    logOutUser();
    navigate("/signin");
  };

  const handleConcernSelect = (concern) => {
    // Remove the selected concern from the 'concerns' array
    const updatedConcerns = concerns.filter((item) => item !== concern);

    // Add the selected concern to the 'selectedConcerns' array
    setSelectedConcerns([...selectedConcerns, concern]);

    // Update the 'concerns' array without the selected concern
    concerns = updatedConcerns;
  };

  return (
    <div className="flex flex-col justify-center max-w-screen-xl mx-auto my-16 w-full">
      <div className="w-full flex justify-center gap-16 items-center">
        <div className="flex flex-col justify-center gap-4 max-w-[550px] rounded-2xl px-4 py-2 h-[400px]  bg-gradient-to-t from-[#EDE9FF] via-[#E8DBF9] to-[#E7EDFF]">
          <div className="flex justify-between gap-24 mb-6">
            <div className=" flex flex-col gap-4 items-center">
              <div className="w-24 h-24 rounded-full bg-gray-500"></div>
              <div className="text-[#101828] text-lg font-semibold">
                ABC DEF
              </div>
            </div>
            <div>
              <MdOutlineEdit className="text-2xl mr-8 mt-4 cursor-pointer text-[#344054]" />
            </div>
          </div>
          <div className="flex flex-col mx-2 mt-2 gap-4">
            <div className="flex gap-20 ">
              <div className="flex items-center gap-4">
                <CiSquareInfo className="text-2xl cursor-pointer text-[#344054]" />
                <p className="text-[#101828] text-lg font-medium">Female</p>
              </div>
              <div className="flex items-center gap-4">
                <IoCallOutline className="text-2xl cursor-pointer text-[#344054]" />
                <p className="text-[#101828] text-lg font-medium">9898987777</p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex items-center gap-6">
                <CiCalendar className="text-2xl cursor-pointer text-[#344054]" />
                <p className="text-[#101828] text-lg font-medium">
                  05 May 2001
                </p>
              </div>
              <div className="flex items-center gap-4">
                <CiMail className="text-2xl cursor-pointer text-[#344054]" />
                <p className="text-[#101828] text-lg font-medium">
                  anishakumar@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 max-w-[550px] rounded-2xl p-4  bg-white shadow-xl">
          <div className="flex flex-col gap-4  justify-center border border-1 border-gray-200 p-4">
            <div className="flex gap-4 items-center">
              <FaHeart className="text-xl" />
              <p className="text-[#101828] font-semibold text-xl">
                Selected concerns
              </p>
            </div>
            <div className="flex flex-wrap max-w-[500px] gap-2 items-center">
              {selectedConcerns.map((item, idx) => (
                <div
                  key={idx}
                  className="cursor-pointer mx-auto max-w-[110px] w-full max-h-[25px] h-full rounded-[16px] flex justify-center items-center py-[18px] px-[6px] border-[1px] 
              bg-[#ECE7FE] text-[#4E139F]"
                >
                  <p className="text-sm font-medium text-[#4E139F] text-center">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center mx-2">
            <div className="flex gap-4 items-center">
              <FaHeart className="text-xl" />
              <p className="text-[#101828] font-semibold text-xl my-2">
                select your concerns
              </p>
            </div>
            <div className="flex flex-wrap max-w-[500px] gap-2 items-center ">
              {concerns.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => handleConcernSelect(item)}
                  className="cursor-pointer mx-auto max-w-[110px] w-full max-h-[25px] h-full rounded-[16px] flex justify-center items-center py-[18px] px-[6px] border-[1px] bg-[#FFFFFF] border-[#D0D5DD]"
                >
                  <p className="text-sm font-medium text-[#344054] text-center">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
