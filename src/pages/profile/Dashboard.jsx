import React from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { FiMoon } from "react-icons/fi";
import { RiEmotionHappyLine } from "react-icons/ri";
import { ImHappy } from "react-icons/im";
import { RiEmotionNormalLine } from "react-icons/ri";
import { RiEmotionUnhappyLine } from "react-icons/ri";
import { RiEmotionSadLine } from "react-icons/ri";

const Dashboard = () => {
  return (
    <div className="max-w-screen-xl flex flex-col">
      <div>
        <div>Hi Username!</div>
        <div className="w-full bg-[#D0BFFF] my-8 rounded-xl px-12 py-8 items-center flex justify-between">
          <div className="flex flex-col gap-4 mx-auto ">
            <div className="text-xl font-bold text-[#101828]">
              Take your first step today!
            </div>
            <div className="text-lg font-medium text-[#667085]">
              Book a session with therapists matched to your selected concerns
            </div>
          </div>
          <div className="mx-auto flex gap-4 justify-center items-center text-white cursor-pointer bg-[#7B3CF3] px-8 py-2 font-medium rounded-xl">
            <p>See my therapist </p>
            <span className="text-2xl"> {" > "}</span>
          </div>
        </div>
      </div>
      <div>
        <div>Flow for you!</div>
        <div className="mt-4 flex justify-center gap-12 w-full">
          <div className="bg-[#EEF296] flex justify-between gap-16 items-center py-6 px-4 rounded-xl w-1/2">
            <div className="flex flex-col gap-4">
              <MdOutlineWbSunny />
              <p className="text-xl font-bold">
                Anxiety Relief Exercises
                <p className="text-lg font-medium text-[#383f4d]">
                  Quick & Powerful relationships
                </p>
              </p>
            </div>
            <div>
              <img
                src="./images/beach.jpg"
                className="rounded-xl max-w-[300px] max-h-[150px] "
                alt="mountain"
              />
            </div>
          </div>
          <div className="bg-[#DFCCFB] flex justify-between gap-16 items-center py-6 px-4 rounded-xl w-1/2">
            <div className="flex flex-col gap-4">
              <FiMoon />
              <p className="text-xl font-bold">
                Conflict Resolution
                <p className="text-lg font-medium text-[#383f4d]">
                  Build healthy relationships
                </p>
              </p>
            </div>
            <div>
              <img
                src="./images/Mountain.jpg"
                className="rounded-xl max-w-[300px] max-h-[150px] "
                alt="mountain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="mt-4">Thoughts for you!</div>
        <div className="w-full bg-[#DFCCFB] my-8 rounded-xl px-12 py-8 items-center flex justify-between">
          <div className="flex flex-col gap-4 mx-auto ">
            <div className="text-xl font-bold text-[#101828]">
              Take your first step today!
            </div>
            <div className="text-lg font-medium text-[#667085]">
              Book a session with therapists matched to your selected concerns
            </div>
          </div>
          <div className="mx-auto flex gap-4 justify-center items-center text-white cursor-pointer bg-[#7B3CF3] px-8 py-2 font-medium rounded-xl">
            <p>See my therapist </p>
            <span className="text-2xl"> {" > "}</span>
          </div>
        </div>
        <div className="shadow-xl w-full bg-[#EEEDED] my-8 rounded-xl px-12 py-8 items-center flex justify-between">
          <div className="flex flex-col gap-4">
            <div className="text-xl font-bold text-[#101828]">
              How are you feeling today?
            </div>
            <div className="mt-4 flex justify-center mx-auto gap-16 items-center w-full">
              <div className="flex flex-col justify-center items-center gap-4">
                <RiEmotionHappyLine className="text-7xl cursor-pointer" />
                <p>Ecstatic</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <ImHappy className="text-6xl cursor-pointer" />
                <p>Happy</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <RiEmotionNormalLine className="text-7xl cursor-pointer" />
                <p>Good</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <RiEmotionUnhappyLine className="text-7xl cursor-pointer" />
                <p>Unhappy</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <RiEmotionSadLine className="text-7xl cursor-pointer" />
                <p>Distressed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
