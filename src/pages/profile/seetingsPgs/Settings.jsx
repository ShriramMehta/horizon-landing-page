import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { CiSquareInfo } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const SelectedConcerns = ["Stress", "Anxiety", "Depression", "Sleep Help"];

const Settings = () => {
  return (
    <div className="flex flex-col justify-center max-w-screen-xl mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-4 w-[600px] rounded-2xl p-4  bg-gradient-to-t from-[#EDE9FF] via-[#E8DBF9] to-[#E7EDFF]">
          <div className="flex justify-between m-4">
            <div className=" flex flex-col gap-4 items-center">
              <div className="w-24 h-24 rounded-full bg-gray-500"></div>
              <div className="text-[#101828] text-lg font-semibold">
                ABC DEF
              </div>
            </div>
            <div>
              <MdOutlineEdit className="text-2xl mt-6 cursor-pointer text-[#344054]" />
            </div>
          </div>
          <div className="flex flex-col mx-4 mb-4 gap-4 max-w-[500px]">
            <div className="flex gap-20 mx-4">
              <div className="flex items-center gap-4">
                <CiSquareInfo className="text-2xl cursor-pointer text-[#344054]" />
                <p className="text-[#101828] text-lg font-medium">Female</p>
              </div>
              <div className="flex items-center gap-4">
                <IoCallOutline className="text-2xl cursor-pointer text-[#344054]" />
                <p className="text-[#101828] text-lg font-medium">9898987777</p>
              </div>
            </div>
            <div className="flex mx-4 gap-8">
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
        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col gap-4 w-[600px] rounded-2xl p-4  bg-white border border-1 border-gray-200 shadow-xl">
            <div className="flex flex-col gap-8 justify-center">
              <div className="flex gap-4 items-center">
                <FaHeart className="text-xl" />
                <p className="text-[#101828] font-semibold text-xl">
                  Selected concerns
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                {SelectedConcerns.map((item, idx) => (
                  <div
                    key={idx}
                    className="cursor-pointer mx-auto max-w-[110px] w-full max-h-[25px] h-full rounded-[16px] flex justify-center items-center py-[18px] px-[6px] border-[1px] 
                      bg-[#ECE7FE] text-[#4E139F]"
                  >
                    <p className="text-base font-medium text-[#4E139F] text-center">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-[600px] rounded-2xl p-4  bg-white border border-1 border-gray-200 shadow-xl">
            <div className="flex flex-col gap-8 justify-center">
              <div className="flex gap-4 items-center">
                <FaHeart className="text-xl" />
                <p className="text-[#101828] font-semibold text-xl">
                  select your concerns
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                {SelectedConcerns.map((item, idx) => (
                  <div
                    key={idx}
                    className="cursor-pointer mx-auto max-w-[110px] w-full max-h-[25px] h-full rounded-[16px] flex justify-center items-center py-[18px] px-[6px] border-[1px] 
                      bg-[#ECE7FE] text-[#4E139F]"
                  >
                    <p className="text-base font-medium text-[#4E139F] text-center">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
