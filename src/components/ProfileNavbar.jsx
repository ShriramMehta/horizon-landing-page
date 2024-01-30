import React, { useState } from "react";
import moment from "moment";
import { CiSearch } from "react-icons/ci";
import { GrNotification } from "react-icons/gr";
import { MdKeyboardArrowDown } from "react-icons/md";
import clsx from "clsx";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const handleNavigate = useNavigate();
  const { user, logOutUser } = useAuth();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    console.log("clicked")
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    logOutUser();
    handleNavigate("/signin");
  };

  return (
    <div className="  w-full mb-2">
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-semibold text-2xl sm:text-4xl  sm:mb-0">
          {/* Hi, {user?.user?.name.split(" ")[0]}! */}
        </h1>
        {/* <div className="relative max-w-xl mr-2 mt-2 sm:mt-0 hidden lg:block">
          <input
            type="text"
            placeholder="Search Anything"
            className="pl-4 pr-10 py-1 bg-white rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <div className="absolute right-3 top-2.5">
            <CiSearch size={20} color="#6B7280" />
          </div>
        </div> */}

        <div className="flex items-center space-x-2 lg:space-x-4 relative ">
          {/* <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center cursor-pointer">
            <GrNotification size={16} color="#6B7280" />
          </div> */}

          <div
            className="flex items-center space-x-4 cursor-pointer"
            onClick={toggleDropdown}
          >
            {/* <div className="h-10 w-10 sm:h-12 sm:w-12 bg-white rounded-full cursor-pointer" /> */}

            {isDropdownOpen && (
              <div className="absolute top-10 z-50 sm:top-14 font-normal bg-white rounded shadow-sm mt-2 py-2 w-40 md:w-52 right-0 text-sm">
                <div onClick={()=> handleNavigate('/profile/settings')} className="cursor-pointer px-3 py-1.5 hover:bg-gray-200">
                  Settings
                </div>
                <div onClick={()=> handleNavigate('/contact')} className="cursor-pointer px-3 py-1.5 hover:bg-gray-200">
                  Help & Support
                </div>
                <div
                  className="cursor-pointer px-3 py-1.5 hover:bg-red-100 text-red-400"
                  onClick={handleLogout}
                >
                  Log Out
                </div>
              </div>
            )}

            <div className="cursor-pointer ">
              <p className="text-[#272727] font-semibold text-sm sm:text-base tracking-[0.00563rem]">
                {user?.user?.name}
              </p>
              <p className="text-xs sm:text-sm font-normal">Settings</p>
            </div>
            <MdKeyboardArrowDown
              size={16}
              color="#6B7280"
              className={clsx(
                "hidden lg:block transition-transform duration-300 ease-in-out",
                {
                  "rotate-180": isDropdownOpen,
                }
              )}
            />
          </div>
        </div>
      </div>
      {/* <p className="text-sm sm:text-lg mt-0 sm:mt-2">
        {moment().format("dddd, D MMMM YYYY")}
      </p> */}
    </div>
  );
}
